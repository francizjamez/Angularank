import axios from "axios";

export default async function getRepository(company, name) {
  const res = await axios.get(`repos/${company}/${name}`);
  return res.data;
}
