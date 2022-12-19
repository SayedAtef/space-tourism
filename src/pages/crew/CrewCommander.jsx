import CrewWrapper from "../../components/crew/CrewWrapper";
import Topbar from "../../components/Topbar";
import MeetCrew from "../../components/crew/MeetCrew";
import MainImgCrew from "../../components/crew/MainImgCrew";
import CrewMemberDetail from "../../components/crew/CrewMemberDetail";

const data = {
  source: "../assets/crew/image-douglas-hurley.webp",
  title: "COMMANDER",
  name: "Douglas Hurley",
  desc: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
};

const CrewCommander = () => {
  return (
    <CrewWrapper>
      <Topbar topActive={"commander"} />
      <MeetCrew nameClass={"meetCrewFirst"} />
      <MainImgCrew nameClass={"mainImgCrew"} source={data.source} />
      <section className="crewMain">
        <section className="leftCrew">
          <MeetCrew nameClass={"meetCrewSec"} />
          <CrewMemberDetail
            title={data.title}
            desc={data.desc}
            name={data.name}
            active={"commander"}
          />
        </section>
        <MainImgCrew source={data.source} nameClass={"mainImgCrewSec"} />
      </section>
    </CrewWrapper>
  );
};

export default CrewCommander;
