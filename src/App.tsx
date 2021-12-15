import { Provider } from "react-redux";
import { store } from "config/redux";
import { Router, Switch, Route } from "react-router-dom";
import AppWrapper from "components/Common/AppWrapper";
import { ArticleList, Profile, LoginRegister } from "./views";
import Settings from "./Settings";
import { createHashHistory } from "history";
export const history = createHashHistory();

function App() {
  return (
    <Provider store={store}>
      <AppWrapper>
        <Router history={history}>
          <Switch>
            <Route path="/login" exact component={LoginRegister} />
            <Route path="/profile/:username" exact component={Profile} />
            <Route path="/settings" exact component={Settings} />
            <Route path="/" component={ArticleList} />
          </Switch>
        </Router>
      </AppWrapper>
    </Provider>
  );
}

export default App;
