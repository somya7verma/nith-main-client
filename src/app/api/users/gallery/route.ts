import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const prisma = new PrismaClient();

// GET handler - Test endpoint and return gallery items
export async function GET() {
  try {
    // Test database connection
    await prisma.$connect();

    const galleryItems = await prisma.galley.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Gallery items retrieved successfully',
        data: galleryItems,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Gallery GET Error:', error);

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
        message: 'Internal server error',
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

// (Write handler removed) This route is read-only and only exposes GET.
