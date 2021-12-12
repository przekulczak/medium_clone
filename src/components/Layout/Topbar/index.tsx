import { FC } from "react";
import Logo from "../../Common/Logo";
import Container from "../Container/";
import TopBarNavItemsList from "./TopBarNavItemsList";

const Topbar: FC = () => (
  <nav className="navbar navbar-light">
    <Container>
      <Logo />
      <TopBarNavItemsList />
    </Container>
  </nav>
);

export default Topbar;
