import { useNavigate } from "react-router-dom";
import ButtonComp from "./ButtonComp";

const Buttons = ({ active }) => {
  const navigate = useNavigate();
  return (
    <ul className="buttonGroup">
      <li onClick={() => navigate("/vehicle")}>
        <ButtonComp
          content={"1"}
          nameClass={active === "vehicle" ? "activeButton" : "nonActiveButton"}
        />
      </li>
      <li onClick={() => navigate("/spaceport")}>
        <ButtonComp
          content={"2"}
          nameClass={
            active === "spaceport" ? "activeButton" : "nonActiveButton"
          }
        />
      </li>
      <li onClick={() => navigate("/capsule")}>
        <ButtonComp
          content={"3"}
          nameClass={active === "capsule" ? "activeButton" : "nonActiveButton"}
        />
      </li>
    </ul>
  );
};

export default Buttons;
