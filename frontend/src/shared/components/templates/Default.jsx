import Sidebar from "../Navigation/Sidebar";

const Default = ({ children, subtitle }) => {
  return (
    <div className="default">
      <Sidebar />
      <h2>{subtitle}</h2>
      <div className="default__container">{children}</div>
    </div>
  );
};

export default Default;
