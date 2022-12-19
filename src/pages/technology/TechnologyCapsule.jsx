import Buttons from "../../components/tech/Buttons";
import MainImgTech from "../../components/tech/MainImgTech";
import MainTech from "../../components/tech/MainTech";
import SpaceLaunch from "../../components/tech/SpaceLaunch";
import TechnologyWrapper from "../../components/tech/TechnologyWrapper";
import Topbar from "../../components/Topbar";

const data = {
  sourceLandscape: "../assets/technology/image-space-capsule-landscape.jpg",
  sourcePortrait: "../assets/technology/image-space-capsule-portrait.jpg",
  title: "SPACE CAPSULE",
  desc: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
};

const TechnologyCapsule = () => {
  return (
    <TechnologyWrapper>
      <Topbar topActive={"vehicle"} />
      <SpaceLaunch />
      <MainImgTech source={data.sourceLandscape} nameClass={"mainImgTech"} />
      <section className="techMain">
        <section className="techRight">
          <Buttons active={"capsule"} />
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

export default TechnologyCapsule;
