import { FC, useCallback, ChangeEvent, useMemo, useEffect } from "react";

import InputBase from "@mui/material/InputBase";
import debounce from "lodash.debounce";
import { useSearchParams } from "react-router-dom";

// Styles
import classes from "./SearchBase.module.scss";

const SearchBase: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearchParams({ nameStarts: e.target.value });
    },
    [setSearchParams]
  );

  const debouncedResults = useMemo(() => {
    return debounce(searchChange, 1500);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  return (
    <div className={classes.pageNameAndSearch}>
      <div>
        <h1>Серверы и ПК</h1>
      </div>
      <div className={classes.searchBase}>
        <InputBase
          fullWidth
          className={classes.openBase}
          defaultValue={searchParams.get("nameStarts")}
          onChange={debouncedResults}
          placeholder="Search all..."
          inputProps={{
            className: classes.input,
          }}
        />
      </div>
    </div>
  );
};

export default SearchBase;
