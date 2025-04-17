import React, { Component, useState } from "react";
import ListCast from "./components/ListCast";

function App() {
  const name = "StarGazers";
  const [memberInfo, setMemberInfo] = useState(null);
  return (
    <div className="container">
      <article>
        <hgroup>
          <img src="images/group.svg" alt="StarGazers Group" />
          <h1>Welcome to {name}</h1>
          <p>
            Members of an <b>intergalactic alliance</b>
            <br />
            paving the way for peace and benevolence among all species. They are
            known for their enthusiasm for science, for their love of fun, and
            their dedication to education.
          </p>
          <ListCast onChoice={(member) => setMemberInfo(member)} />
          {memberInfo && (
            <hgroup>
              <img
                src={`images/${memberInfo.slug}_tn.svg`}
                alt={memberInfo.name}
              />
              <hgroup>
                <div>{memberInfo.name}</div>
                <div>{memberInfo.bio}</div>
              </hgroup>
            </hgroup>
          )}
        </hgroup>
      </article>
    </div>
  );
}
export default App;
