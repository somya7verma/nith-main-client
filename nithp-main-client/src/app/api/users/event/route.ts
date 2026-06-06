import { NextRequest, NextResponse } from 'next/server';
import { getPrismaClient } from '../../../../../lib/prisma';

// GET: /api/users/event
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

    // If ID is provided, get specific event
    if (id) {
      const event = await client.events.findUnique({
        where: { id: parseInt(id) },
      });

      if (!event) {
        return NextResponse.json(
          {
            success: false,
            message: `Event with ID ${id} not found`,
            data: null,
          },
          { status: 404 }
        );
      }

      return NextResponse.json(
        {
          success: true,
          message: 'Event retrieved successfully',
          data: event,
        },
        { status: 200 }
      );
    }

    // Get all events ordered by start date
    const events = await client.events.findMany({
      orderBy: {
        startedAt: 'asc',
      },
    });

    return NextResponse.json(
      {
        success: true,
        message:
          events.length > 0
            ? 'Events retrieved successfully'
            : 'No events found',
        data: events,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Events GET Error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to retrieve events data',
        data: [],
      },
      { status: 500 }
    );
  }
}
