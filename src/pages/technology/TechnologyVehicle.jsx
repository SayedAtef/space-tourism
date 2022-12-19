import Buttons from "../../components/tech/Buttons";
import MainImgTech from "../../components/tech/MainImgTech";
import MainTech from "../../components/tech/MainTech";
import SpaceLaunch from "../../components/tech/SpaceLaunch";
import TechnologyWrapper from "../../components/tech/TechnologyWrapper";
import Topbar from "../../components/Topbar";

const data = {
  sourceLandscape: "../assets/technology/image-launch-vehicle-landscape.jpg",
  sourcePortrait: "../assets/technology/image-launch-vehicle-portrait.jpg",
  title: "LAUNCH VEHICLE",
  desc: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
};

const TechnologyVehicle = () => {
  return (
    <TechnologyWrapper>
      <Topbar topActive={"vehicle"} />
      <SpaceLaunch />
      <MainImgTech source={data.sourceLandscape} nameClass={"mainImgTech"} />
      <section className="techMain">
        <section className="techRight">
          <Buttons active={"vehicle"} />
          <MainTech title={data.title} desc={data.desc} />
        </section>
        <MainImgTech
          source={data.sourcePortrait}
          nameClass={"mainImgTechSec"}
        />
      </section>
    </TechnologyWrapper>
  );
};

export default TechnologyVehicle;
