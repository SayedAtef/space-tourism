import Buttons from "./Buttons";

const MainTech = ({ title, desc }) => {
  return (
    <main className="mainTech">
      <h2 className="techTerminology">THE TERMINOLOGY…</h2>
      <h1 className="techTitle">{title}</h1>
      <article className="techDetail">{desc}</article>
    </main>
  );
};

export default MainTech;
