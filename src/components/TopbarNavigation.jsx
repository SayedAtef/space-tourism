import { useNavigate } from "react-router-dom";

const TopbarNavigation = ({ activeOption }) => {
  const navigate = useNavigate();

  return (
    <nav className="topbarNavTablet">
      <ul className="topNavTablet">
        <li
          className={activeOption === "home" ? "activeOption" : ""}
          onClick={() => navigate("/")}
        >
          <span className="topbarNumber">00 </span>HOME
        </li>
        <li
          className={activeOption === "moon" ? "activeOption" : ""}
          onClick={() => navigate("/moon")}
        >
          <span className="topbarNumber">01 </span>DESTINATION
        </li>
        <li
          className={activeOption === "commander" ? "activeOption" : ""}
          onClick={() => navigate("/commander")}
        >
          <span className="topbarNumber">02 </span>CREW
        </li>
        <li
          className={activeOption === "vehicle" ? "activeOption" : ""}
          onClick={() => navigate("/vehicle")}
        >
          <span className="topbarNumber">03 </span>TECHNOLOGY
        </li>
      </ul>
    </nav>
  );
};

export default TopbarNavigation;
