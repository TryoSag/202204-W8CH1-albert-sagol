import { IShipsInformation } from "../../typeSchema/shipsInformation";
import { Ship } from "../Ship/Ship";

export const ShipsList = ({ shipsInformation }) => {
  return (
    <div id={"background-container"}>
      <header id={"header-title"}> Star Wars Test </header>
      <main id="main-container">
        <h2>Starships:</h2>
        <p id={"total-ships"}> Total ships: </p>
        <h2>Starships by class:</h2>
        <ul>
          {shipsInformation.map((ship: IShipsInformation, index: number) => (
            <li key={index}>
              <Ship class={ship.class} number={ship.number} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};
