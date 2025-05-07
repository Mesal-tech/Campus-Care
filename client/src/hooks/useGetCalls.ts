import { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';

export const useGetCalls = () => {
  const { user } = useUser();
  const client = useStreamVideoClient();
  const [calls, setCalls] = useState<Call[]>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadCalls = async () => {
      if (!client || !user?.id) return;

      setIsLoading(true);

      try {
        const { calls } = await client.queryCalls({
          sort: [{ field: 'starts_at', direction: -1 }],
        });

        // Sort calls locally by starts_at (ascending: earliest first)
        const sortedCalls = calls.sort((a, b) => {
          const startA = a.state?.starts_at ? new Date(a.state.starts_at).getTime() : Infinity;
          const startB = b.state?.starts_at ? new Date(b.state.starts_at).getTime() : Infinity;
          return startA - startB; // Ascending order (earliest first)
        });

        setCalls(sortedCalls);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCalls();
  }, [client, user?.id]);

  const now = new Date();

  const allCalls = calls;

  return {
    allCalls,
    callRecordings: calls,
    isLoading,
  };
};