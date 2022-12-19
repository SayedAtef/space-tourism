import { useNavigate } from "react-router-dom";

const Dots = ({ active }) => {
  const navigate = useNavigate();
  return (
    <ul className="dots">
      <li
        className={active === "commander" ? "activeDot" : "nonActiveDot"}
        id="first"
        onClick={() => navigate("/commander")}
      ></li>
      <li
        className={
          active === "missionSpecialist" ? "activeDot" : "nonActiveDot"
        }
        id="second"
        onClick={() => navigate("/mission-specialist")}
      ></li>
      <li
        className={active === "pilot" ? "activeDot" : "nonActiveDot"}
        id="third"
        onClick={() => navigate("/pilot")}
      ></li>
      <li
        className={active === "engineer" ? "activeDot" : "nonActiveDot"}
        id="fourth"
        onClick={() => navigate("/flight-engineer")}
      ></li>
    </ul>
  );
};

export default Dots;
