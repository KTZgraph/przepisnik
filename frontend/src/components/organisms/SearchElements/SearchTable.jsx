import { useRef, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./SearchTable.scss";

// TODO CSS grid Table https://codepen.io/gilli/pen/QVaWGR

const TableInfo = () => {
  const [expanded, setExpanded] = useState(false);
  const pageNumberRef = useRef();

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="table-info">
      <div className="default">
        <span>4 matching reconds found. You are viewing page 1 od 1.</span>
        <div className="page-input">
          <label htmlFor="pageNumber">Go to page:</label>
          <input
            type="number"
            id="pageNumber"
            name="pageNumber"
            ref={pageNumberRef}
          />
        </div>
        {/* strzałeczki rozwijania */}
        <div className="u-flex-end">
          {expanded ? (
            <ExpandLessIcon className="icon" onClick={handleClick} />
          ) : (
            <ExpandMoreIcon className="icon" onClick={handleClick} />
          )}
        </div>
      </div>
      {expanded && <div className="expanded-options">expanded-options</div>}
    </div>
  );
};

const SearchTable = () => {
  const handleClick = () => {
    console.log("Usuwanie klik");
  };

  return (
    <div className="search-table">
      <TableInfo />
      {/* nagłowek tabelki */}
      <div className="table-row table-header">
        <div className="table-row-item cell-file u-flex-grow2">file</div>
        <div className="table-row-item cell-added-by">added by</div>
        <div className="table-row-item cell-qa-by">QA By</div>
        <div className="table-row-item cell-cve">CVE</div>
        <div className="table-row-item cell-last-update">Last Update</div>
        <div className="table-row-item cell-git-scharp">
          GIT (.csharp / .json)
        </div>
        <div className="table-row-item cell-git-yaml">GIT (.yaml)</div>
        <div className="table-row-item cell-delete">
          Delete
          {/* <button>Delete</button> */}
        </div>
      </div>
      {/* wiersze tabelki */}
      <div className="table-row">
        <div
          className="table-row-item cell-file u-flex-grow2"
          data-header="file"
        >
          {/* https://pl.wikipedia.org/wiki/Renesans#/media/Plik:Leonardo_self.jpg */}
          https://pl.wikipedia.org/wiki/Renesans#/media/Plik:Leonardo_self.jpg
        </div>
        <div className="table-row-item cell-added-by" data-header="added by">
          Janusz
        </div>
        <div className="table-row-item cell-qa-by" data-header="QA By">
          Grażynka
        </div>
        <div className="table-row-item cell-cve" data-header="CVE">
          CVE-2022-27909
        </div>
        <div
          className="table-row-item cell-last-update"
          data-header="Last Update"
        >
          02-06-2022 12:48:41
        </div>
        <div
          className="table-row-item cell-git-scharp"
          data-header="GIT (.csharp / .json)"
        >
          {/* Nonexistent / Nonexistent czerwone */}
          Nonexistent / Nonexistent
        </div>
        <div className="table-row-item cell-git-yaml" data-header="GIT (.yaml)">
          {/* Nonexistent / Nonexistent czerwone */}
          Nonexistent
        </div>
        <div className="table-row-item cell-delete" data-header="Delete">
          {/* Nonexistent / Nonexistent czerwone */}
          <DeleteForeverIcon className="icon" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default SearchTable;
