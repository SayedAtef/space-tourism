import DestinationWrapper from "../../components/destination/DestinationWrapper";
import Topbar from "../../components/Topbar";
import PickDestination from "../../components/destination/PickDestination";
import MainImg from "../../components/destination/MainImg";
import DestinationOptions from "../../components/destination/DestinationOptions";
import MainDestination from "../../components/destination/MainDestination";

const data = {
  source: "../assets/destination/image-titan.webp",
  title: "TITAN",
  desc: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
  distance: "1.6 BIL. km",
  travel: "7 years",
};
const DestinationTitan = () => {
  return (
    <DestinationWrapper>
      <Topbar topActive={"moon"} />
      <PickDestination />
      <section className="destinationDesktop">
        <MainImg source={data.source} title={"titan"} />
        <section className="rightDestination">
          <DestinationOptions activeOption={"titan"} />
          <MainDestination
            title={data.title}
            desc={data.desc}
            distance={data.distance}
            travel={data.travel}
          />
        </section>
      </section>
    </DestinationWrapper>
  );
};

export default DestinationTitan;
