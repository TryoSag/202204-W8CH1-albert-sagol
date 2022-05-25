import { Ship } from "../Ship/Ship";

export const ShipsList = ({ infoShips }: { infoShips: string[] }) => {
  return (
    <div id={"background-container"}>
      <header id={"header-title"}> Star Wars Test </header>
      <main id="main-container">
        <h2>Starships:</h2>
        <p id={"total-ships"}> Total ships: </p>
        <h2>Starships by class:</h2>
        <ul>
          {infoShips.map((ship: string, index: number) => (
            <li key={index}>
              <Ship ship={ship} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};
