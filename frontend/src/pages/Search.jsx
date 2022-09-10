import { useRef } from "react";
import SearchTemplate from "../components/templates/SearchTemplate";

import "./Search.scss";

const SearchForm = () => {
  const keywordRef = useRef();
  const familyRef = useRef();
  const addedByRef = useRef();
  const QAByRef = useRef();
  const statusRef = useRef();
  const creationDateBetweenStartRef = useRef();
  const creationDateBetweenEndRef = useRef();
  const vulnerabilityDateBetweenStartRef = useRef();
  const vulnerabilityDateBetweenEndRef = useRef();
  const gitStatusRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const keyword = keywordRef.current.value;
    const family = familyRef.current.value;
    const addedBy = addedByRef.current.value;
    const QABy = QAByRef.current.value;
    const status = statusRef.current.value;
    const creationDateBetweenStart = creationDateBetweenStartRef.current.value;
    const creationDateBetweenEnd = creationDateBetweenEndRef.current.value;
    const vulnerabilityDateBetweenStart =
      vulnerabilityDateBetweenStartRef.current.value;
    const vulnerabilityDateBetweenEnd =
      vulnerabilityDateBetweenEndRef.current.value;
    const gitStatus = gitStatusRef.current.value;

    console.log("keyword:", keyword);
    console.log("family:", family);
    console.log("addedBy:", addedBy);
    console.log("QABy:", QABy);
    console.log("gitStatus:", gitStatus);
    console.log("creationDateBetweenStart:", creationDateBetweenStart);
    console.log("creationDateBetweenEnd:", creationDateBetweenEnd);
    console.log(
      "vulnerabilityDateBetweenStart:",
      vulnerabilityDateBetweenStart
    );
    console.log("vulnerabilityDateBetweenEnd:", vulnerabilityDateBetweenEnd);
    console.log("status:", status);
  };

  return (
    <form className="search__form" onSubmit={handleSubmit}>
      <div className="row">
        {/* pierwszy wiersz */}
        <div className="form__input">
          {/* TODO NIE Dropdown */}
          <label htmlFor="keyword">Keyword:</label>
          <input type="text" id="keyword" name="keyword" ref={keywordRef} />
        </div>
        <div className="form__input">
          <label htmlFor="family">Family:</label>
          <input type="text" id="family" name="family" ref={familyRef} />
        </div>
      </div>
      {/* drugi wiersz */}
      <div className="row">
        <div className="form__input">
          <label htmlFor="addedBy">Added By:</label>
          <input type="text" id="addedBy" name="addedBy" ref={addedByRef} />
        </div>
        <div className="form__input">
          <label htmlFor="QABy">QA By:</label>
          <input type="text" id="QABy" name="QABy" ref={QAByRef} />
        </div>
        <div className="form__input">
          <label htmlFor="status">Status:</label>
          <input type="text" id="status" name="status" ref={statusRef} />
        </div>
      </div>
      {/* trzeci wiersz */}
      <div className="row">
        <div className="form__input">
          <label htmlFor="creationDateBetween">Creation date between:</label>
          {/* TODO NIE Dropdown */}
          <div className="input-multiple">
            <input
              type="text"
              id="creationDateBetweenStart"
              name="creationDateBetweenStart"
              ref={creationDateBetweenStartRef}
            />
            {/* TODO NIE Dropdown */}
            <input
              type="text"
              id="creationDateBetweenEnd"
              name="creationDateBetweenEnd"
              ref={creationDateBetweenEndRef}
            />
          </div>
        </div>
        <div className="form__input">
          <label htmlFor="vulnerabilityDateBetween">
            Vulnerability date between:
          </label>
          {/* TODO NIE Dropdown */}
          <div className="input-multiple">
            <input
              type="text"
              id="vulnerabilityDateBetweenStart"
              name="vulnerabilityDateBetweenStart"
              ref={vulnerabilityDateBetweenStartRef}
            />
            {/* TODO NIE Dropdown */}
            <input
              type="text"
              id="vulnerabilityDateBetweenEnd"
              name="vulnerabilityDateBetweenEnd"
              ref={vulnerabilityDateBetweenEndRef}
            />
          </div>
        </div>
      </div>
      {/* czwarty wiersz */}
      <div className="row">
        <div className="form__input">
          <label htmlFor="gitStatus">Git status:</label>
          <input
            type="text"
            id="gitStatus"
            name="gitStatus"
            ref={gitStatusRef}
          />
        </div>
        <button type="submit" className="action">
          Search
        </button>
      </div>
    </form>
  );
};

const SearchTable = () => {
  return <div className="search-table"></div>;
};

const Search = () => {
  return (
    <SearchTemplate subtitle="Szukaj produktu" className="search">
      <SearchForm />
      <div className="search__result">
        <SearchTable />
      </div>
      ;
    </SearchTemplate>
  );
};

export default Search;
