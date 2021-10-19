import { FaGithub } from "react-icons/fa";
import Loader from "../../../reusable_components/Loader";

const Profile = ({ data, isLoading, contributors }) => {
  const { name, open_issues_count, forks_count, watchers_count, html_url } =
    data;

  if (isLoading) {
    return <Loader className="m-5" />;
  }

  return (
    <div className="shadow-lg bg-secondary-500 rounded-xl mx-auto p-4 flex flex-col max-w-md">
      <div className="p-4 flex flex-col gap-3">
        <div className="border-b-2 text-center pb-4 mb-7">
          <p className="text-3xl font-semibold">{name}</p>
        </div>
        {/* {contributors && contributors.map(({ login }) => <Link to={`/user/${login}`} className="text-pink-200 hover:underline">{login}</Link>)} */}
        <div className=" flex flex-col gap-4">
          <FlexBetween>
            <p>Contributors: {contributors ? contributors.length : 0}</p>
            <p>Forks: {forks_count}</p>
          </FlexBetween>
          <FlexBetween>
            <p>Open issues: {open_issues_count}</p>
            <p>Watchers: {watchers_count}</p>
          </FlexBetween>
          <a href={html_url} target="_blank" rel="noreferrer">
            <FaGithub className="text-3xl text-white mx-auto" />
          </a>
        </div>
      </div>
    </div>
  );
};
function FlexBetween({ children }) {
  return <div className="flex justify-between text-gray-300">{children}</div>;
}
export default Profile;
