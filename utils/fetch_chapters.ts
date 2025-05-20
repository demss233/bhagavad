import axios from "axios";

async function fetch_chapters() {
  try {
    let response = await axios.get(
      "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?skip=0&limit=18",
      {
        params: { skip: 0, limit: 18 },
        headers: {
          "x-rapidapi-key":
            "d53b0e0d8amsh4ad2ef4e30938b2p196976jsn2f2be51bad13",
          "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export default fetch_chapters;
