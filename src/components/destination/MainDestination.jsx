const MainDestination = ({ title, desc, distance, travel }) => {
  return (
    <main className="mainDestination">
      <h1 className="destinationTitle">{title}</h1>
      <article className="destinationArticle">{desc}</article>
      <hr className="rec" />
      <section className="destinationData">
        <section className="averageDistance">
          <h3 className="averageDistanceTitle">AVG. DISTANCE</h3>
          <p className="averageDistanceValue">{distance}</p>
        </section>
        <section className="estTime">
          <h3 className="averageDistanceTitle">Est. travel time</h3>
          <p className="averageDistanceValue">{travel}</p>
        </section>
      </section>
    </main>
  );
};

export default MainDestination;
