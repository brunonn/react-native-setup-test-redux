import axios from "axios";

export const userAPI = {
  async fetchUser() {
    const res = await axios<{ name: string }>({
      url: "https://test.com/api/user",
    });
    return res.data;
  },
};
