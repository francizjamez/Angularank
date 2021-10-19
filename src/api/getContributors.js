import axios from "axios";

export default async function getContributors(
  company = "angular",
  repo = "angular"
) {
  const res = await axios.get(`repos/${company}/${repo}/contributors`);
  return res.data;
}
