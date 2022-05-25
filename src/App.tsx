import React from "react";
import { useEffect } from "react";
import { ShipsList } from "./components/ShipList/ShipList";
import { IShipsInformation } from "./typeSchema/shipsInformation";
import { getShips } from "./utils/getShips";

function App() {
  useEffect()= async()=>{
  const shipsClassList: string[] = getShips();
  },[]

  const shipsInformation: IShipsInformation[] = shipsClassList.reduce(
    (accumulator, class) => {
      return { ...accumulator, [class]: (accumulator[class] || 0) + 1 };
    },
    {}
  );

  return (
    <div className="App">
      <ShipsList shipsInformation={shipsInformation} />
    </div>
  );
}

export default App;
