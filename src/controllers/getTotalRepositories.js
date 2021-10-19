import getUserRepositories from "../api/getUserRepositories";

export default async function getTotalRepositories(username) {
  let page = 1;
  let total = 0;

  while (true) {
    const currentRepositories = await getUserRepositories(username, page);
    total += currentRepositories.length;
    if (!currentRepositories.length) {
      break;
    }
    page++;
  }

  return total;
}
