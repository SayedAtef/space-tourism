import Wrapper from "../components/Wrapper";
import Topbar from "../components/Topbar";
import Main from "../components/home/Main";
import ExploreButton from "../components/home/ExploreButton";

const Home = () => {
  return (
    <Wrapper>
      <Topbar topActive={"home"} />
      <div className="mainDesktop">
        <Main />
        <ExploreButton />
      </div>
    </Wrapper>
  );
};

export default Home;
