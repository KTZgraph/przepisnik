import "./SearchTemplate.scss";

const SearchTemplate = ({ children, subtitle, className }) => {
  return (
    <div className={`search-template main__container ${className}`}>
      <h2>{subtitle}</h2>
      <div className="search-template__container">{children}</div>
    </div>
  );
};

export default SearchTemplate;
