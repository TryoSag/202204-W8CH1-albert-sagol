import axios from "axios";

let shipsClassList: string[] = [];

export const getShips = async () => {
  for (let i = 0; i < 4; i++) {
    const {
      data: { results },
    } = await axios.get(`https://swapi.dev/api/starships/?page=${i + 1}`);

    results.forEach((result: { starship_class: string }) =>
      shipsClassList.push(result.starship_class)
    );
  }
  console.log(shipsClassList);

  return shipsClassList;
};
