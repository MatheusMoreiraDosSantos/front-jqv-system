import React from "react";
import Hidden from "@material-ui/core/Hidden";

import { Container } from "./styles";

function Header() {
  return (
    <Container>
      <Hidden mdUp>
        <h3>Cadastro JQV</h3>
      </Hidden>
      <Hidden smDown>
        <h3>Cadastro Jovens que vencem - IIGD Avaré</h3>
      </Hidden>
    </Container>
  );
}

export default Header;
