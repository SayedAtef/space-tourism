import DestinationWrapper from "../../components/destination/DestinationWrapper";
import Topbar from "../../components/Topbar";
import PickDestination from "../../components/destination/PickDestination";
import MainImg from "../../components/destination/MainImg";
import DestinationOptions from "../../components/destination/DestinationOptions";
import MainDestination from "../../components/destination/MainDestination";

const data = {
  source: "../assets/destination/image-europa.webp",
  title: "EUROPA",
  desc: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
  distance: "628 MIL. km",
  travel: "3 years",
};
const DestinationEuropa = () => {
  return (
    <DestinationWrapper>
      <Topbar topActive={"moon"} />
      <PickDestination />
      <section className="destinationDesktop">
        <MainImg source={data.source} title={"europa"} />
        <section className="rightDestination">
          <DestinationOptions activeOption={"europa"} />
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

export default DestinationEuropa;
