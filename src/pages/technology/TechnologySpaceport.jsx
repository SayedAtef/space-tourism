import Buttons from "../../components/tech/Buttons";
import MainImgTech from "../../components/tech/MainImgTech";
import MainTech from "../../components/tech/MainTech";
import SpaceLaunch from "../../components/tech/SpaceLaunch";
import TechnologyWrapper from "../../components/tech/TechnologyWrapper";
import Topbar from "../../components/Topbar";

const data = {
  sourceLandscape: "../assets/technology/image-spaceport-landscape.jpg",
  sourcePortrait: "../assets/technology/image-spaceport-portrait.jpg",
  title: "SPACEPORT",
  desc: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
};

const TechnologySpaceport = () => {
  return (
    <TechnologyWrapper>
      <Topbar topActive={"vehicle"} />
      <SpaceLaunch />
      <MainImgTech source={data.sourceLandscape} nameClass={"mainImgTech"} />
      <section className="techMain">
        <section className="techRight">
          <Buttons active={"spaceport"} />
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

export default TechnologySpaceport;
