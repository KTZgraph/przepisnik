import SearchTemplate from "../components/templates/SearchTemplate";

import "./Search.scss";

const SearchForm = () => {
  return <div className="search__form">Fromularz szukania</div>;
};

const SearchResult = () => {
  return <div className="search__result">Wyniki szukania produktów</div>;
};

const Search = () => {
  return (
    <SearchTemplate subtitle="Szukaj produktu" className="search">
      <SearchForm />
      <SearchResult />
    </SearchTemplate>
  );
};

export default Search;
