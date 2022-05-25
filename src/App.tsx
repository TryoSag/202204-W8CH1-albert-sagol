import { useEffect } from "react";
import { ShipsList } from "./components/ShipList/ShipList";
import { IShipsInformation } from "./typeSchema/shipsInformation";
import { getShips } from "./utils/getShips";

function App() {
  debugger;
  const shipsClassList: Promise<string[]> = getShips();
  console.log(shipsClassList);
  //const shipsInformation = shipsClassList.reduce((accumulator, class) => { ...accumulator, [class]: (accumulator[class] || 0) + 1 } ,{});

  return (
    <div className="App">
      <ShipsList shipsInformation={shipsClassList} />
    </div>
  );
}

export default App;
