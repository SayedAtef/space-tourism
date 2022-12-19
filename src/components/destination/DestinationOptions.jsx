import { useNavigate } from "react-router-dom";

const DestinationOptions = ({ activeOption }) => {
  const navigate = useNavigate();

  return (
    <ul className="destinationOptions">
      <li
        className={activeOption === "moon" ? "activeOption" : ""}
        onClick={() => navigate("/moon")}
      >
        Moon
      </li>
      <li
        className={activeOption === "mars" ? "activeOption" : ""}
        onClick={() => navigate("/mars")}
      >
        Mars
      </li>
      <li
        className={activeOption === "europa" ? "activeOption" : ""}
        onClick={() => navigate("/europa")}
      >
        Europa
      </li>
      <li
        className={activeOption === "titan" ? "activeOption" : ""}
        onClick={() => navigate("/titan")}
      >
        Titan
      </li>
    </ul>
  );
};

export default DestinationOptions;
