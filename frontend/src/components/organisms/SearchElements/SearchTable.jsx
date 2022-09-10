import "./SearchTable.scss";

const SearchTable = () => {
  return (
    <div className="search-table">
      {/* nagłowek tabelki */}
      <div className="table-row table-header">
        <div className="table-row-item u-flex-grow2 row-item-file">file</div>
        <div className="table-row-item row-item-added-by">added by</div>
        <div className="table-row-item">QA By</div>
        <div className="table-row-item">CVE</div>
        <div className="table-row-item">Last Update</div>
        <div className="table-row-item">GIT (.csharp / .json)</div>
        <div className="table-row-item">GIT (.yaml)</div>
        <div className="table-row-item">
          Delete
          {/* <button>Delete</button> */}
        </div>
      </div>
      {/* wiersze tabelki */}
      <div class="table-row">
        <div
          class="table-row-item u-flex-grow2 row-item-file"
          data-header="file"
        >
          {/* https://pl.wikipedia.org/wiki/Renesans#/media/Plik:Leonardo_self.jpg */}
          https://pl.wikipedia.org/wiki/Renesans#/media/Plik:Leonardo_self.jpg
        </div>
        <div class="table-row-item row-item-added-by" data-header="added by">
          Janusz
        </div>
        <div class="table-row-item" data-header="QA By">
          Grażynka
        </div>
        <div class="table-row-item" data-header="CVE">
          CVE-2022-27909
        </div>
        <div class="table-row-item" data-header="Last Update">
          02-06-2022 12:48:41
        </div>
        <div class="table-row-item" data-header="GIT (.csharp / .json)">
          {/* Nonexistent / Nonexistent czerwone */}
          Nonexistent / Nonexistent
        </div>
        <div class="table-row-item" data-header="GIT (.yaml)">
          {/* Nonexistent / Nonexistent czerwone */}
          Nonexistent
        </div>
        <div class="table-row-item" data-header="Delete">
          {/* Nonexistent / Nonexistent czerwone */}
          <input type="checkbox" id="delete" name="delete" />
        </div>
      </div>
    </div>
  );
};

export default SearchTable;
