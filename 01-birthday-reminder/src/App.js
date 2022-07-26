import logo from "./logo.svg";
import "./App.css";
import data from "./data";
import List from "./List";
import { useState } from "react";
function App() {
  const [people,setPeople]=useState(data);
  return (
    <main>
      <section className="container">
        <h3> {people.length} Birthdays To Day</h3>
        <List people={people} />
        <button onClick={()=> setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
