import { Link } from "react-router-dom";
import Loader from "../../reusable_components/Loader";

const Contributor = ({ userData, index }) => {
  const { login, avatar_url, contributions, followers, gists_repos } = userData;

  return (
    <div className="shadow-md w-96 bg-secondary-500 p-4 rounded-lg col-span-12">
      <div className="flex flex-col items-center flex-1 gap-2 border-b-2 pb-2 relative">
        <div className="flex flex-col flex-1 gap-4 items-center p-2">
          <img
            alt="profile"
            src={avatar_url}
            className="rounded-full w-20 object-cover"
          />
          <Link
            className="w-min text-primary-100 hover:underline text-2xl font-semibold whitespace-nowrap"
            to={`user/${login}`}
          >
            {login}
          </Link>
        </div>
        <div className="absolute top-0 left-0 bg-primary-900 h-10 w-10 flex justify-center items-center rounded-full font-bold text-lg">
          {index + 1}
        </div>
      </div>
      <div className="p-6 px-9 flex flex-col gap-2">
        <UserStat label="Contributions" value={contributions} />
        <UserStat label="Followers" value={followers} />
        <UserStat label="Gists & Repos" value={gists_repos} />
      </div>
    </div>
  );
};

function UserStat({ label, value }) {

  return (
    <p className="flex justify-between">
      {label}: <span className="font-bold">{value ? value : <Loader />}</span>
    </p>
  );
}

export default Contributor;
