import SearchForm from "../components/organisms/SearchElements/SearchForm";
import SearchTable from "../components/organisms/SearchElements/SearchTable";
import SearchTemplate from "../components/templates/SearchTemplate";
import "./Search.scss";

const Search = () => {
  return (
    <SearchTemplate subtitle="Szukaj produktu" className="search">
      <SearchForm />
      <div className="search-result">
        <SearchTable className="search-table" />
      </div>
    </SearchTemplate>
  );
};

export default Search;
