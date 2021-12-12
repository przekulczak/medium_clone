import { Router, Switch, Route } from "react-router-dom";
import AppWrapper from "components/Common/AppWrapper";
import { SWRConfig } from "swr";
import { swrConfig } from "config/apiConfig";
import Article from "./Article";
import { ArticleList, Profile, LoginRegister } from "./views";
import Editor from "./Editor";
import Logout from "./Logout";
import Settings from "./Settings";
import { createHashHistory } from "history";
export const history = createHashHistory();

function App() {
  return (
    <SWRConfig value={swrConfig}>
      <AppWrapper>
        <Router history={history}>
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
      </AppWrapper>
    </SWRConfig>
  );
}

export default App;
