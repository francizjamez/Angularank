import getFollowers from "../api/getFollowers";

export default async function getTotalFollowers(username) {
  let page = 1;
  let total = 0;

  while (true) {
    const currentFollowers = await getFollowers(username, page);
    total += currentFollowers.length;
    if (!currentFollowers.length) {
      break;
    }
    page++;
  }

  return total;
}
