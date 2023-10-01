
export const getUsers = async () => {
  try {
    const response = await fetch(`api/get-user`, {
      method: "GET",
    });
    const result = await response.json();
    console.log(result);
    return result;

  } catch (error) {
    console.error("Error fetching users:", error);
    return error;
  }
}

