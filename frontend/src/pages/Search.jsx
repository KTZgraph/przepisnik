import SearchForm from "../components/organisms/Forms/SearchForm";
import SearchTable from "../components/organisms/Tables/SearchTable";
import SearchTemplate from "../components/templates/SearchTemplate";

import "./Search.scss";

const Search = () => {
  return (
    <SearchTemplate subtitle="Szukaj produktu" className="search">
      <SearchForm />
      <div className="search-result">
        <SearchTable />
      </div>
    </SearchTemplate>
  );
};

export default Search;
