import axios from "axios";

async function fetch_verses(chapter: any) {
  try {
    const response = await axios.get(
      `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapter}/verses/`,
      {
        headers: {
          "x-rapidapi-key":
            "d53b0e0d8amsh4ad2ef4e30938b2p196976jsn2f2be51bad13",
          "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
        },
      }
    );
    const versesFiltered: any = [];
    response.data.map((element: any, index: any) => {
      const translations = element.translations;
      for (let ptr = 0; ptr < translations.length; ++ptr) {
        if (translations[ptr].language == "english") {
          versesFiltered.push(translations[ptr].description);
          break;
        }
      }
    });
    return versesFiltered;
  } catch (error) {
    console.log("Error fetching verses:", error);
  }
}

export default fetch_verses;
