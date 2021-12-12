import { FC } from "react";
import { TopBarNavItemType } from "../../../../../types/TopBarNavItemType";

type Props = TopBarNavItemType;

const TopbarNavItem: FC<Props> = ({ name, href }: Props) => {
  const { hash, pathname } = location;
  const isActive = `${pathname}${hash}` === href;
  return (
    <li className={`nav-item ${isActive ? "active" : ""}`}>
      <a className="nav-link" href={href}>
        {name}
      </a>
    </li>
  );
};

export default TopbarNavItem;
