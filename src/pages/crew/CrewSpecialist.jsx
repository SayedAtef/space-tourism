import CrewWrapper from "../../components/crew/CrewWrapper";
import Topbar from "../../components/Topbar";
import MeetCrew from "../../components/crew/MeetCrew";
import MainImgCrew from "../../components/crew/MainImgCrew";
import CrewMemberDetail from "../../components/crew/CrewMemberDetail";

const data = {
  source: "../assets/crew/image-mark-shuttleworth.webp",
  title: "Mission Specialist",
  name: "MARK SHUTTLEWORTH",
  desc: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
};

const CrewSpecialist = () => {
  return (
    <CrewWrapper>
      <Topbar topActive={"commander"} />
      <MeetCrew nameClass={"meetCrewFirst"} />
      <MainImgCrew nameClass={"mainImgCrew"} source={data.source} />
      <section className="crewMain">
        <section>
          <MeetCrew nameClass={"meetCrewSec"} />
          <CrewMemberDetail
            title={data.title}
            desc={data.desc}
            name={data.name}
            active={"missionSpecialist"}
          />
        </section>
        <MainImgCrew source={data.source} nameClass={"mainImgCrewSec"} />
      </section>
    </CrewWrapper>
  );
};

export default CrewSpecialist;
