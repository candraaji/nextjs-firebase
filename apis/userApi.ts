export const fetchUserData = async (userId: string) => {
  const response = await fetch(`/api/fetch-user-data/${userId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }
  return response.json();
};
