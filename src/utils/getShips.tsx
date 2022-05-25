import axios from "axios";

export const getShips = async () => {
  let shipsClassList: string[];

  for (let i = 0; i < 4; i++) {
    const {
      data: { results },
    } = await axios.get(`https://swapi.dev/api/starships/?page=${i + 1}`);

    results.map((result) => [...shipsClassList, result.starship_class]);
  }

  return shipsClassList;
};
