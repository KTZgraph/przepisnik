import { useRef, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import "./SearchForm.scss";

const SearchForm = () => {
  const [expanded, setExpanded] = useState(false);

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
  const cveRef = useRef();

  const handleClick = () => {
    setExpanded(!expanded);
  };

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
    const cve = cveRef.current.value;

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
    console.log("cve:", cve);
  };

  if (!expanded) {
    return (
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="u-flex-end">
          <ExpandMoreIcon className="icon" onClick={handleClick} />
        </div>
        <div className="row">
          {/* pierwszy wiersz */}
          <div className="form__input">
            {/* TODO NIE Dropdown */}
            <label htmlFor="keyword">Keyword:</label>
            <input type="text" id="keyword" name="keyword" ref={keywordRef} />
          </div>
          <div className="form__input">
            <label htmlFor="gitStatus">Git status:</label>
            <input
              type="text"
              id="gitStatus"
              name="gitStatus"
              ref={gitStatusRef}
            />
          </div>
        </div>
        <div className="u-flex-end">
          <button type="submit" className="action">
            Search
          </button>
        </div>
      </form>
    );
  } else {
    return (
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="u-flex-end">
          <ExpandLessIcon className="icon" onClick={handleClick} />
        </div>
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
          <div className="form__input">
            <label htmlFor="cve">CVE:</label>
            <input type="checkbox" id="cve" name="cve" ref={cveRef} />
          </div>
          <button type="submit" className="action">
            Search
          </button>
        </div>
      </form>
    );
  }
};

export default SearchForm;
