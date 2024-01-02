export const saveToken = (token) => {
  if (typeof window !== "undefined") {
    // Perform localStorage action
    localStorage.setItem("userToken", token);
  }
};

export const getToken = () => {
  if (typeof window !== "undefined") {
    // Perform localStorage action
    return localStorage.getItem("userToken");
  }
};

export const deleteToken = () => {
  if (typeof window !== "undefined") {
    // Perform localStorage action
    return localStorage.removeItem("userToken");
  }
};
