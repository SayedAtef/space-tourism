import CrewWrapper from "../../components/crew/CrewWrapper";
import Topbar from "../../components/Topbar";
import MeetCrew from "../../components/crew/MeetCrew";
import MainImgCrew from "../../components/crew/MainImgCrew";
import CrewMemberDetail from "../../components/crew/CrewMemberDetail";

const data = {
  source: "../assets/crew/image-victor-glover.webp",
  title: "Pilot",
  name: "Victor Glover",
  desc: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
};

const CrewPilot = () => {
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
            active={"pilot"}
          />
        </section>
        <MainImgCrew source={data.source} nameClass={"mainImgCrewSec"} />
      </section>
    </CrewWrapper>
  );
};

export default CrewPilot;
