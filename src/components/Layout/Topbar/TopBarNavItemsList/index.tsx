import { FC, useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { TopBarNavItemType } from "../../../../types/TopBarNavItemType";
import { navItems } from "./navItems";
import TopbarNavItem from "./TopbarNavItem";
import { history } from "../../../../App";
import { clearUser } from "store/user";

const TopBarNavItemsList: FC = () => {
  const dispatch = useDispatch();
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  const getUserData = () => {
    axios
      .get("/user")
      .then(() => setLogged(true))
      .catch(() => setLogged(false))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    getUserData();
  });

  const list = navItems.map((navItem: TopBarNavItemType) => (
    <TopbarNavItem name={navItem.name} href={navItem.href} key={navItem.name} />
  ));
  const authItem = logged ? (
    <TopbarNavItem
      name="Logout"
      onClick={() => {
        dispatch(clearUser());
        history.push("/");
        axios.defaults.headers.common["Authorization"] = "";
        getUserData();
      }}
    />
  ) : (
    <TopbarNavItem name="Sign in" href="/#/login" />
  );
  const currentContent = loading ? (
    <></>
  ) : (
    <>
      {list} {authItem}
    </>
  );
  return <ul className="nav navbar-nav pull-xs-right">{currentContent}</ul>;
};

export default TopBarNavItemsList;
