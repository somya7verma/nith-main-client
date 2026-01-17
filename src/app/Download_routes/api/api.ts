// src/app/Download_routes/api/api.ts

// Reusable function to fetch downloads data by title
export async function getDownloadsByTitle(title: string) {
  try {
    const response = await fetch(
      `http://localhost:4000/v1/downloads/${title}`,
      {
        cache: 'no-store', // Always fresh data
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch downloads data for title: ${title}`);
    }

    const data = await response.json();
    return {
      success: true,
      data: data.data || data,
      title,
    };
  } catch (error) {
    console.error(`Error fetching downloads for title ${title}:`, error);
    throw error;
  }
}

// TypeScript interface for type safety - matches ug_tables schema
export interface DownloadsData {
  id: number;
  title: string;
  particulars: string;
  form_type: string;
  name: string;
  file_url: string;
  word_url?: string;
  created_at: string;
  updated_at: string;
}
