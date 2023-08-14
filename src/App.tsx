import { useState } from "react";

let charCharacteristic = {
  strength: 1,
  agility: 22,
  itellect: 26,
};

let invetory = {
  electicalComponents: {
    name: "Electro-components",
    amount: 10,
  },
  chip: {
    name: "Chip",
    amount: 0,
    skillCheck: 50,
  },
};



function App() {
  const [charCharacteristicState, setCharCharacteristic] =
    useState(charCharacteristic);
  const [invetoryState, setInvetory] = useState(invetory);
  const { strength, agility, itellect } = charCharacteristicState;
  const { electicalComponents, chip } = invetoryState;

  const handelCreateChip = () => {
    if (electicalComponents.amount < 2) {
      alert("You do not have enough components !");
      return;
    }
    const numberOfScill = agility * 2 + itellect * 5;
    if (numberOfScill >= chip.skillCheck) {
      setInvetory((invetoryState) => ({
        ...invetoryState,
        electicalComponents: {
          ...invetory.electicalComponents,
          amount: invetoryState.electicalComponents.amount - 2,
        },
        chip: { ...invetoryState.chip, amount: invetoryState.chip.amount + 1 },
      }));
      setCharCharacteristic((charCharacteristicState) => ({
        ...charCharacteristicState,
        agility: (charCharacteristicState.agility * 100 + 5) / 100,
        itellect: (charCharacteristicState.itellect * 100 + 5) / 100,
      }));
      console.log("chip created");
    } else {
      setInvetory((invetoryState) => ({
        ...invetoryState,
        electicalComponents: {
          ...invetory.electicalComponents,
          amount: invetoryState.electicalComponents.amount - 1,
        },
      }));
      console.log("chip not created");
    }
  };
  return (
    <div>
      <h1>Hello in the game</h1>
      <h2>hero</h2>
      <h3>skils</h3>
      <ul>
        <li>strength:{charCharacteristicState.strength}</li>
        <li>agility:{charCharacteristicState.agility}</li>
        <li>itellect:{charCharacteristicState.itellect}</li>
      </ul>
      <hr />
      <h4>Doing</h4>
      <ul>
        <li>
          <button onClick={handelCreateChip}> create microcgip</button>
        </li>
      </ul>
      <hr />
      <h4>inventory</h4>
      <ul>
        <li>
          {invetoryState.electicalComponents.name}:{" "}
          {invetoryState.electicalComponents.amount}
        </li>
        <li>
          {invetoryState.chip.name}: {invetoryState.chip.amount}
        </li>
      </ul>
    </div>
  );
}

export default App;
