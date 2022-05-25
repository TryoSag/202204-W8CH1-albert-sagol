import { useEffect, useState } from "react";
import { ShipsList } from "./components/ShipList/ShipList";
import { IShipsInformation } from "./typeSchema/shipsInformation";
import { getShips } from "./utils/getShips";

function App() {
  const [infoShips, setInfoShips] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const shipsClassList = await getShips();
      setInfoShips(shipsClassList);
    })();
  }, []);

  //const shipsInformation: IShipsInformation[] = infoShips.reduce((accumulator, className) => { ...accumulator, [className] : (accumulator[className] || 0) + 1 } ,{});

  return (
    <div className="App">
      <ShipsList infoShips={infoShips} />
    </div>
  );
}

export default App;
