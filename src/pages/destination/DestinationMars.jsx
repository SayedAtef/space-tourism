import DestinationWrapper from "../../components/destination/DestinationWrapper";
import Topbar from "../../components/Topbar";
import PickDestination from "../../components/destination/PickDestination";
import MainImg from "../../components/destination/MainImg";
import DestinationOptions from "../../components/destination/DestinationOptions";
import MainDestination from "../../components/destination/MainDestination";

const data = {
  source: "../assets/destination/image-mars.webp",
  title: "MARS",
  desc: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
  distance: "225 MIL. km",
  travel: "9 months",
};
const DestinationMars = () => {
  return (
    <DestinationWrapper>
      <Topbar topActive={"moon"} />
      <PickDestination />
      <section className="destinationDesktop">
        <MainImg source={data.source} title={"mars"} />
        <section className="rightDestination">
          <DestinationOptions activeOption={"mars"} />
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

export default DestinationMars;
