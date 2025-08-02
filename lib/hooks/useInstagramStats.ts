import { useState, useEffect } from 'react';

type InstagramStats = {
  followers_count: number;
  following_count: number;
  post_count: number;
  last_updated: string;
};

export function useInstagramStats() {
  const [stats, setStats] = useState<InstagramStats | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchStats() {
      try {
        setLoading(true);
        const res = await fetch('/api/instagram');
        
        if (!res.ok) {
          throw new Error('Failed to fetch Instagram stats');
        }
        
        const data = await res.json();
        setStats(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching Instagram stats:', err);
        setError('Could not load Instagram stats');
        setStats(null);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
    
    // Optional: Set up polling to refresh data periodically
    // const interval = setInterval(fetchStats, 30 * 60 * 1000); // every 30 minutes
    // return () => clearInterval(interval);
  }, []);

  return { stats, loading, error };
}
