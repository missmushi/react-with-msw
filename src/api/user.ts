export const fetchUsers = async () => {
  const response = await fetch("/api/users");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
