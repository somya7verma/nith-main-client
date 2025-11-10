import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const prisma = new PrismaClient();

// (Write handlers removed) This route is read-only and only exposes GET.

// GET handler - Retrieve achievements
export async function GET(request: NextRequest) {
  try {
    await prisma.$connect();

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const page = searchParams.get('page');
    const limit = searchParams.get('limit');

    // If ID is provided, get specific achievement
    if (id) {
      const achievement = await prisma.achievements.findUnique({
        where: { id: parseInt(id) },
      });

      if (!achievement) {
        return NextResponse.json(
          {
            success: false,
            message: `Achievement with ID ${id} not found`,
          },
          { status: 404 }
        );
      }

      return NextResponse.json(
        {
          success: true,
          message: 'Achievement retrieved successfully',
          data: achievement,
        },
        { status: 200 }
      );
    }

    // Get all achievements with optional pagination
    const pageNum = page ? parseInt(page) : 1;
    const limitNum = limit ? parseInt(limit) : 10;
    const skip = (pageNum - 1) * limitNum;

    const [achievements, totalCount] = await Promise.all([
      prisma.achievements.findMany({
        skip: skip,
        take: limitNum,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.achievements.count(),
    ]);

    const totalPages = Math.ceil(totalCount / limitNum);

    return NextResponse.json(
      {
        success: true,
        message: 'Achievements retrieved successfully',
        data: achievements,
        pagination: {
          currentPage: pageNum,
          totalPages: totalPages,
          totalCount: totalCount,
          limit: limitNum,
          hasNext: pageNum < totalPages,
          hasPrev: pageNum > 1,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Achievement GET Error:', error);

    if (error instanceof Error) {
      if (
        error.message.includes('connect') ||
        error.message.includes('ECONNREFUSED') ||
        error.message.includes('DATABASE_URL')
      ) {
        return NextResponse.json(
          {
            success: false,
            message: 'Database connection failed',
            error: 'Please check your database configuration and .env file',
          },
          { status: 503 }
        );
      }
    }

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to retrieve achievements',
        error:
          process.env.NODE_ENV === 'development'
            ? error instanceof Error
              ? error.message
              : 'Unknown error'
            : 'Something went wrong',
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// (Delete handler removed)
