import { graphqlAPI } from "./api";
import { query } from "./api/query.graphql";
import { orderBy } from "lodash";

const getApiData = async () => {
  const response = await fetch(graphqlAPI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();
  const dataOrder = orderBy(data.data.allFilms.films, ["title"], ["desc"]);
  console.log(data);

  dataOrder.map(({ title, director, releaseDate }) => {
    document.querySelector(".results").innerHTML += `
      <div class="card__info">
        <h1>${title}</h1>
        <p>${director}</p>
        <p>${releaseDate}</p>
      </div>
    `;
  });
};

getApiData();
