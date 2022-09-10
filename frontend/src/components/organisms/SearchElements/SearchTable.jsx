import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./SearchTable.scss";

const SearchTable = () => {
  const handleClick = () => {
    console.log("Usuwanie klik");
  };

  return (
    <div className="search-table">
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
