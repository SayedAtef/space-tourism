import CrewWrapper from "../../components/crew/CrewWrapper";
import Topbar from "../../components/Topbar";
import MeetCrew from "../../components/crew/MeetCrew";
import MainImgCrew from "../../components/crew/MainImgCrew";
import CrewMemberDetail from "../../components/crew/CrewMemberDetail";

const data = {
  source: "../assets/crew/image-anousheh-ansari.webp",
  title: "Flight Engineer",
  name: "Anousheh Ansari",
  desc: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
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
            active={"engineer"}
          />
        </section>
        <MainImgCrew source={data.source} nameClass={"mainImgCrewSec"} />
      </section>
    </CrewWrapper>
  );
};

export default CrewPilot;
