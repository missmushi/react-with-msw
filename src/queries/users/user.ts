import { useQuery } from "@tanstack/react-query";

import { fetchUsers } from "../../api/user";

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
};

export const useGetUsers = () =>
  useQuery<User[]>({
    queryKey: ["user"],
    queryFn: fetchUsers,
  });
