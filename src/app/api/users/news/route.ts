import { NextRequest, NextResponse } from 'next/server';
import { getPrismaClient } from '../../../../../lib/prisma';

// GET: /api/users/news
export async function GET(request: NextRequest) {
  try {
    const client = await getPrismaClient();

    if (!client) {
      return NextResponse.json(
        {
          success: false,
          message: 'Database connection failed',
          data: [],
        },
        { status: 500 }
      );
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    // If ID is provided, get specific news
    if (id) {
      const news = await client.news.findUnique({
        where: { id: parseInt(id) },
      });

      if (!news) {
        return NextResponse.json(
          {
            success: false,
            message: `News with ID ${id} not found`,
            data: null,
          },
          { status: 404 }
        );
      }

      return NextResponse.json(
        {
          success: true,
          message: 'News retrieved successfully',
          data: news,
        },
        { status: 200 }
      );
    }

    // Get all news ordered by creation date
    const news = await client.news.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(
      {
        success: true,
        message:
          news.length > 0 ? 'News retrieved successfully' : 'No news found',
        data: news,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('News GET Error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to retrieve news data',
        data: [],
      },
      { status: 500 }
    );
  }
}

// (Delete handler removed)
