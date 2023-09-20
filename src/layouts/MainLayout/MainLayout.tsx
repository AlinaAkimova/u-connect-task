import { FC, ReactNode } from "react";

import Box from "@mui/material/Box";

// Components
import Header from "components/Header/Header";
import SideMenu from "components/SideMenu/SideMenu";

// Styles
import classes from "./MainLayout.module.scss";

interface IProps {
  children: ReactNode;
}

const MainLayout: FC<IProps> = ({ children }) => {
  return (
    <Box className={classes.containerMain}>
      <SideMenu />
      <section className={classes.containerChildren}>
        <Header />
        {children}
      </section>
    </Box>
  );
};

export default MainLayout;
