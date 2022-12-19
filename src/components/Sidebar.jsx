import { useNavigate } from "react-router-dom";

const Sidebar = ({ setClose }) => {
  const navigate = useNavigate();
  return (
    <nav className="sidebar">
      <div className="closeContainer">
        <img
          src="../assets/shared/icon-close.svg"
          alt="close"
          className="iconClose"
          onClick={() => setClose(false)}
        />
      </div>
      <ul>
        <li onClick={() => navigate("/")}>
          <span>00</span> HOME
        </li>
        <li onClick={() => navigate("/moon")}>
          <span>01</span> DESTINATION
        </li>
        <li onClick={() => navigate("/commander")}>
          <span>02</span> CREW
        </li>
        <li onClick={() => navigate("/vehicle")}>
          <span>03</span> TECHNOLOGY
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
