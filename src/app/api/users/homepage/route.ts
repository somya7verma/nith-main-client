import { NextResponse } from 'next/server';
import { getHomepageData } from '../../../../../lib/prisma';

// GET: /api/users/homepage
export async function GET() {
  try {
    const homepage = await getHomepageData();

    // Return success even if data is empty (let frontend handle empty state)
    return NextResponse.json(
      {
        success: true,
        message:
          Object.keys(homepage).length > 0
            ? 'Homepage data retrieved successfully'
            : 'No homepage data found',
        data: homepage,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Homepage GET Error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to retrieve homepage data',
        data: {},
      },
      { status: 500 }
    );
  }
}
