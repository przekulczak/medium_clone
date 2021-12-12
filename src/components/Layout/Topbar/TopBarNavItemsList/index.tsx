import { FC } from "react";
import { TopBarNavItemType } from "../../../../types/TopBarNavItemType";
import { navItems } from "./navItems";
import TopbarNavItem from "./TopbarNavItem";

const TopBarNavItemsList: FC = () => {
  const list = navItems.map((navItem: TopBarNavItemType) => (
    <TopbarNavItem name={navItem.name} href={navItem.href} key={navItem.name} />
  ));
  return <ul className="nav navbar-nav pull-xs-right">{list}</ul>;
};

export default TopBarNavItemsList;
