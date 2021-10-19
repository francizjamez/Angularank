import axios from "axios";

export default async function getUserRepositories(username, page = 1) {
  const res = await axios.get(`users/${username}/repos`, {
    params: { per_page: 100, page },
  });
  return res.data;
}
