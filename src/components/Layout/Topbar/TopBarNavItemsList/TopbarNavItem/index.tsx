import { FC } from "react";
import { TopBarNavItemType } from "../../../../../types/TopBarNavItemType";

type Props = TopBarNavItemType;

const TopbarNavItem: FC<Props> = ({ name, href }: Props) => (
  <li className="nav-item">
    {/* Add "active" class when you're on that page" */}
    <a className="nav-link active" href={href}>
      {name}
    </a>
  </li>
);

export default TopbarNavItem;
