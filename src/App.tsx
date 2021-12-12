import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { SWRConfig } from "swr";
import { swrConfig } from "config/apiConfig";
import Article from "./Article";
import ArticleList from "./views/ArticleList/ArticleList";
import Editor from "./Editor";
import LoginRegister from "./LoginRegister";
import Logout from "./Logout";
import Profile from "./Profile";
import Settings from "./Settings";

function App() {
  return (
    <SWRConfig value={swrConfig}>
      <Router>
        <Switch>
          <Route path="/editor" exact component={Editor} />
          <Route path="/editor/:slug" exact component={Editor} />
          <Route path="/login" exact component={LoginRegister} />
          <Route path="/logout" exact component={Logout} />
          <Route path="/profile/:username" exact component={Profile} />
          <Route path="/profile/:username/favorites" exact component={Profile} />
          <Route path="/register" exact component={LoginRegister} />
          <Route path="/settings" exact component={Settings} />
          <Route path="/:slug" exact component={Article} />
          <Route path="/" component={ArticleList} />
        </Switch>
      </Router>
    </SWRConfig>
  );
}

export default App;
