import axios from "axios";

export default async function getUser(username) {
  const res = await axios.get(`users/${username}`);
  return res.data;
}
