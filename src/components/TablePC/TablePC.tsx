import { FC, useState, useEffect } from "react";
import clsx from "clsx";
import { observer } from "mobx-react-lite";
import { useSearchParams } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

// Components
import TableFooter from "components/TableFooter/TableFooter";

// Stores
import pcStore from "stores/PCStores";

// Styles
import classes from "./TablePC.module.scss";

const TablePC: FC = observer(() => {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const { num, pc } = pcStore;
  const [searchParams] = useSearchParams();

  const start = searchParams.get("nameStarts");

  useEffect(() => {
    pcStore.loadPC(start, page, rowsPerPage);
  }, [start, page, rowsPerPage]);

  return (
    <div className={classes.wrapper}>
      <TableContainer
        className={clsx(classes.container, {
          [classes.undefinedRowsContainer]: !pc || pc.length === 0,
        })}
      >
        <Table aria-label="a dense table" className={classes.table}>
          <TableHead
            className={clsx({
              [classes.undefinedRowsHeader]: !pc || pc.length === 0,
            })}
          >
            <TableRow
              sx={{
                ".MuiTableCell-root": {
                  borderBottom: "none",
                },
              }}
            >
              <TableCell align="left" className={classes.tableCellHead}>
                Название
              </TableCell>
              <TableCell align="left" className={classes.tableCellHead}>
                Тип
              </TableCell>
              <TableCell align="left" className={classes.tableCellHead}>
                Расположение
              </TableCell>
              <TableCell align="left" className={classes.tableCellHead}>
                Орг. еденица
              </TableCell>
              <TableCell align="left" className={classes.tableCellHead}>
                Инд. номер
              </TableCell>
              <TableCell align="left" className={classes.tableCellHead}>
                Теги
              </TableCell>
              <TableCell align="left" className={classes.tableCellHead}>
                Дата создания
              </TableCell>
              <TableCell align="left" className={classes.tableCellHead}>
                Дата удаления
              </TableCell>
              <TableCell align="left" className={classes.tableCellHead}>
                Дата аудита
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pc
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={row.id}
                    sx={{
                      ".MuiTableCell-root": {
                        borderBottom: "none",
                      },
                    }}
                  >
                    <TableCell align="left" className={classes.typography}>
                      {row.name}
                    </TableCell>
                    <TableCell align="left" className={classes.typography}>
                      {row.type}
                    </TableCell>
                    <TableCell align="left" className={classes.typography}>
                      {row.place}
                    </TableCell>
                    <TableCell align="left" className={classes.typography}>
                      {row.org}
                    </TableCell>
                    <TableCell align="left" className={classes.typography}>
                      {row.number}
                    </TableCell>
                    <TableCell align="left" className={classes.typography}>
                      {row.tag}
                    </TableCell>
                    <TableCell align="left" className={classes.typography}>
                      {row.startDate}
                    </TableCell>
                    <TableCell align="left" className={classes.typography}>
                      {row.updateDate}
                    </TableCell>
                    <TableCell align="left" className={classes.typography}>
                      {row.auditDate}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TableFooter
        rowsLength={num}
        page={page}
        setPage={setPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
      />
    </div>
  );
});

export default TablePC;
