import React from "react";
import Dots from "./Dots";

const CrewMemberDetail = ({ title, name, desc, active }) => {
  return (
    <main>
      <hr className="breakMember" />
      <div className="dotsMob">
        <Dots active={active} />
      </div>
      <h2 className="memberRank">{title}</h2>
      <h1 className="memberName">{name}</h1>
      <article className="memberDetails">{desc}</article>
      <div className="secDots">
        <Dots active={active} />
      </div>
    </main>
  );
};

export default CrewMemberDetail;
