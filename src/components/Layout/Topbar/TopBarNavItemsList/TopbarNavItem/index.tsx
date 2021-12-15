import { FC } from "react";

interface Props {
  name: string;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const TopbarNavItem: FC<Props> = ({ name, href, onClick }: Props) => {
  const { hash, pathname } = location;
  const isActive = `${pathname}${hash}` === href;
  // TO DO USE BUTTON IF LOGOUT
  return (
    <li className={`nav-item ${isActive ? "active" : ""}`} style={{ cursor: "pointer" }}>
      <a className="nav-link" href={href} onClick={onClick}>
        {name}
      </a>
    </li>
  );
};

export default TopbarNavItem;
