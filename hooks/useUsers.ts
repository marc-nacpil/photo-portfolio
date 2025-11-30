// hooks/useUsers.ts
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const response = await fetch("/api/users");

      if (!response.ok) throw new Error("Failed to fetch users");

      const data = await response.json();

      setUsers(data || []);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
    const interval = setInterval(fetchUsers, 60000);
    return () => clearInterval(interval);
  }, []);

  return { users, error, loading, refetch: fetchUsers };
}
