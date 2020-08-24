import React from "react";
import Position from "./Position";
import Picture from "./Picture";
import Info from "./Info";
import Name from "./Name";
import Votes from "./Votes";
import Percentage from "./Percentage";
import Popularity from "./Popularity";
import css from "./candidate.module.css";

export default function Candidate({
  previousVote,
  previousPercentage,
  candidate,
  position,
}) {
  const { id, name, votes, percentage, popularity } = candidate;
  const imageSource = `${id}.jpg`;

  return (
    <div className={css.flexRow}>
      <Position> {position} </Position>
      <Picture imageSource={imageSource} description={name} title={name} />
      <Info>
        <Name>{name}</Name>
        <Votes value={votes} previousVotes={previousVote} />
        <Percentage value={percentage} previousPercentage={previousPercentage}>
          {percentage}
        </Percentage>
        <Popularity value={popularity} />
      </Info>
    </div>
  );
}
