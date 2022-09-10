import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/">
          <span className="logoName">przepiśnik</span>
        </Link>
      </div>
      <hr />
      {/* główne linki */}
      <div className="center">
        <ul>
          <Link to="/">
            <li>
              <DashboardRoundedIcon className="icon" />
              <span>główna</span>
            </li>
          </Link>
          {/* produkty */}
          <Link to="/products">
            <li>
              <DashboardRoundedIcon className="icon" />
              <span>produkty</span>
            </li>
          </Link>
          {/* śniadania */}
          <Link to="/breakfasts">
            <li>
              <DashboardRoundedIcon className="icon" />
              <span>śniadania</span>
            </li>
          </Link>
          {/* drugie śniadania */}
          <Link to="/second-breakfasts">
            <li>
              <DashboardRoundedIcon className="icon" />
              <span>drugie śniadania</span>
            </li>
          </Link>
          {/* obiady*/}
          <Link to="/lunches">
            <li>
              <DashboardRoundedIcon className="icon" />
              <span>obiady</span>
            </li>
          </Link>
          {/* podwieczorki*/}
          <Link to="/teas">
            <li>
              <DashboardRoundedIcon className="icon" />
              <span>podwieczorki</span>
            </li>
          </Link>
          {/* kolacje*/}
          <Link to="/dinners">
            <li>
              <DashboardRoundedIcon className="icon" />
              <span>kolacje</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
