import { useNavigate } from "react-router-dom";

const ExploreButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/moon");
  };

  return (
    <div onClick={handleClick} className="exploreButton">
      EXPLORE
    </div>
  );
};

export default ExploreButton;
