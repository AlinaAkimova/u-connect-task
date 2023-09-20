import { FC } from "react";

// Layouts
import MainLayout from "layouts/MainLayout/MainLayout";

// Components
import TablePC from "components/TablePC/TablePC";
import SearchBase from "components/SearchBase/SearchBase";

// Styles
import classes from "./PCPage.module.scss";

const PCPage: FC = () => {
  return (
    <MainLayout>
      <div className={classes.childrenBody}>
        <SearchBase />
        <TablePC />
      </div>
    </MainLayout>
  );
};

export default PCPage;
