import React from 'react';
import './App.css';
import data from './data';
import PetsList from './PetsList';


function App() {

  const [pets, setPets] = React.useState(data)

  const [filtered, setFiltered] = React.useState(pets)

  const filter = (event) => {

    if (event.target.name === 'race') {
      const raceList = filtered.filter(pet => { return pet.race.toLowerCase().includes(event.target.value.toLowerCase()) });
      setFiltered(raceList)
    }
    else if (event.target.name === 'type') {
      const typeList = filtered.filter(pet => { return pet.type.toLowerCase().includes(event.target.value.toLowerCase()) });
      setFiltered(typeList)
    }
    else if (event.target.name === 'location') {
      const locationList = filtered.filter(pet => { return pet.location.toLowerCase().includes(event.target.value.toLowerCase()) });
      setFiltered(locationList)
    }
    if (event.target.value === '') {
      setFiltered(pets);
    }
  }

  return (
    <div className="App">
      <h1>Pets Adoption</h1>
      {/* filter */}
      <input
        name='race'
        placeholder='filter by race'
        onChange={filter} />
      <input
        name='type'
        placeholder='filter by type'
        onChange={filter} />
      <input
        name='location'
        placeholder='filter by Location'
        onChange={filter} />

      <PetsList petsList={filtered} />

    </div>
  );
}

export default App;
