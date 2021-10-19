import axios from "axios";

export default async function getFollowers(username, page = 1) {
  const res = await axios.get(`users/${username}/followers`, {
    params: { per_page: 100, page },
  });
  return res.data;
}
