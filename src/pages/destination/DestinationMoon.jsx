import DestinationWrapper from "../../components/destination/DestinationWrapper";
import Topbar from "../../components/Topbar";
import PickDestination from "../../components/destination/PickDestination";
import MainImg from "../../components/destination/MainImg";
import DestinationOptions from "../../components/destination/DestinationOptions";
import MainDestination from "../../components/destination/MainDestination";

const data = {
  source: "../assets/destination/image-moon.webp",
  title: "MOON",
  desc: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
  distance: "384,400 km",
  travel: "3 days",
};
const DestinationMoon = () => {
  return (
    <DestinationWrapper>
      <Topbar topActive={"moon"} />
      <PickDestination />
      <section className="destinationDesktop">
        <MainImg source={data.source} title={"moon"} />
        <section className="rightDestination">
          <DestinationOptions activeOption={"moon"} />
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

export default DestinationMoon;
