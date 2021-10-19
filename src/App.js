import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Repo from "./pages/repo";
import User from "./pages/user";
import AngularIcon from "./reusable_components/AngularIcon";

function App() {
  return (
    <div className="min-h-screen bg-background-500 text-white py-3">
      <div className="flex items-center mx-auto w-min mb-5">
        <AngularIcon />
      </div>
      <Switch>
        <Route path="/user/:username" component={User} />
        <Route path="/repo/:company/:name" component={Repo} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
