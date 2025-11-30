// hooks/useUsers.ts
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const { data, error } = await supabase.from("users").select("*");

      if (error) throw error;

      setUsers(data || []);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch immediately on mount
    fetchUsers();

    // Set up interval to fetch every 1 minute (60000ms)
    const interval = setInterval(fetchUsers, 60000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return { users, error, loading, refetch: fetchUsers };
}
