import React from "react";
import IssueImage from "./IssueImage";
import AsyncImage from "../common/AsyncImage";

function IssueDetail(props) {
  if (props.issue.image) {
    return (
      <>
        <div className="detail-container">
          <div className="child">
            <h1>Characters</h1>
            <hr></hr>
            <div>
              <ul>
                {props.issue.character_credits.map(character => {
                  return (
                    <li key={character.id}>
                      <IssueImage
                        type="character"
                        id={character.id}
                        alt={character.name}
                      />
                      <span>{character.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <h1>Teams</h1>
            <hr></hr>
            <div>
              <ul>
                {props.issue.team_credits.map(team => {
                  return (
                    <li key={team.id}>
                      <IssueImage type="team" id={team.id} alt={team.name} />
                      <span>{team.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <h1>Locations</h1>
            <hr></hr>
            <div>
              <ul>
                {props.issue.location_credits.map(location => {
                  return (
                    <li key={location.id}>
                      <IssueImage
                        type="location"
                        id={location.id}
                        alt={location.name}
                      />
                      <span>{location.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <h1>Concepts</h1>
            <hr></hr>
            <div>
              <ul>
                {props.issue.concept_credits.map(concept => {
                  return (
                    <li key={concept.id}>
                      <IssueImage
                        type="concept"
                        id={concept.id}
                        alt={concept.name}
                      />
                      <span>{concept.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <AsyncImage
            src={props.issue.image.medium_url}
            alt={props.issue.name}
          />
        </div>
      </>
    );
  }
  return <></>;
}

export default IssueDetail;
