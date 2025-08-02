import { NextResponse } from 'next/server';

// Define the Instagram data type
type InstagramData = {
  followers_count: number;
  following_count: number;
  post_count: number;
  last_updated: string;
};

// Mock data - replace with actual API call in production
const MOCK_DATA: InstagramData = {
  followers_count: 12345,
  following_count: 678,
  post_count: 123,
  last_updated: new Date().toISOString()
};

// Cache for 1 hour (in milliseconds)
const CACHE_DURATION = 60 * 60 * 1000; 
let cachedData: InstagramData | null = null;
let lastFetched = 0;

async function fetchInstagramStats(): Promise<InstagramData> {
  // Use cached data if available and not expired
  const now = Date.now();
  if (cachedData && (now - lastFetched < CACHE_DURATION)) {
    return cachedData;
  }
  
  try {
    // In a real implementation, you would:
    // 1. Make an authenticated request to Instagram API or a service like RapidAPI
    // 2. Parse the response and extract follower count
    
    // For now, using mock data
    const data = MOCK_DATA;
    
    // Update cache
    cachedData = data;
    lastFetched = now;
    
    return data;
  } catch (err) {
    console.error('Error fetching Instagram data:', err);
    throw new Error('Failed to fetch Instagram data');
  }
}

export async function GET() {
  try {
    const data = await fetchInstagramStats();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch Instagram data' },
      { status: 500 }
    );
  }
}
