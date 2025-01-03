import { useState } from "react";
import { puppyList } from "./data.js";
import "./App.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupID, setFeatPupId] = useState(null);

  const featuredPup = puppies.find((pup) => pup.id === featPupID);

  return (
    <>
      <div>
        <h2>Click on a name to learn more!</h2>
        {puppies.map((puppy) => {
          return (
            <p
              onClick={() => {
                console.log("Featured Puppy ID: ", puppy.id);
                console.log("Featured Puppy:", puppy);
                setFeatPupId(puppy.id);
              }}
              key={puppy.id}
            >
              {puppy.name}
            </p>
          );
        })}
        <br></br>
        <hr></hr>
        <br></br>
        {featPupID && (<div>
          <h3>You have selected:</h3>
          <h2 class="name">{featuredPup.name}</h2>
          <br></br>
        <hr></hr>
        <br></br>
          <h3>Here is some general information:</h3>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
            <li>Tricks: 
              <ul>
                {featuredPup.tricks.map((trick)=>(
                <li key={trick.id}>{trick.title} </li>))}
              </ul>
            </li>
          </ul>
        </div>)}
      </div>
    </>
  );
}

export default App;
