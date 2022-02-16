import axios from "axios";
import React, { useEffect, useState } from "react";
import Person from "./@types/Person";
import List from "./components/List/List";

const App: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([]);
  useEffect(() => {
    const fetchPeople = async () => {
      const { data } = await axios.get("http://localhost:3333/people");
      setPeople(data);
    };
    fetchPeople();
  }, []);

  return (
    <div className="App">
      <List people={people} />
    </div>
  );
};

export default App;
