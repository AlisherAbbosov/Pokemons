let ElPokemonsList = document.querySelector(".pokemons__list");

let render = function (array, renderedPlace) {
  for (let pokemon of array) {
    let newPokemonItem = document.createElement("li");
    let newPokemonCard = document.createElement("div");
    let newPokemonImgBox = document.createElement("div");
    let newPokemonImg = document.createElement("img");
    let newCardBody = document.createElement("div");
    let newSavedLogo = document.createElement("i");
    let newPokemonName = document.createElement("p");
    let newPokemonType = document.createElement("p");
    let newPokemonInfo = document.createElement("div");
    let newPokemonWeight = document.createElement("p");
    let newPokemonHeight = document.createElement("p");

    renderedPlace.appendChild(newPokemonItem);
    newPokemonItem.appendChild(newPokemonCard);
    newPokemonCard.appendChild(newPokemonImgBox);
    newPokemonImgBox.appendChild(newPokemonImg);
    newPokemonCard.appendChild(newCardBody);
    newCardBody.appendChild(newSavedLogo);
    newCardBody.appendChild(newPokemonName);
    newCardBody.appendChild(newPokemonType);
    newCardBody.appendChild(newPokemonInfo);
    newPokemonInfo.appendChild(newPokemonWeight);
    newPokemonInfo.appendChild(newPokemonHeight);

    newPokemonItem.setAttribute("class", "pokemons__item");
    newPokemonCard.setAttribute("class", "cards");
    newPokemonImgBox.setAttribute("class", "cards__images-box");
    newPokemonImg.setAttribute("class", "cards__images");
    newPokemonImg.setAttribute("alt", "Pokemon's image");
    newPokemonImg.setAttribute("src", pokemon.img);
    newCardBody.setAttribute("class", "card__body");
    newSavedLogo.setAttribute("class", "far fa-heart pokemons__saved-icon");
    newPokemonName.setAttribute("class", "pokemons__name");
    newPokemonType.setAttribute("class", "pokemons__type");
    newPokemonInfo.setAttribute("class", "d-flex");
    newPokemonWeight.setAttribute("class", "pokemons__weight");
    newPokemonHeight.setAttribute("class", "pokemons__height m-0");

    newPokemonName.textContent = pokemon.name;
    newPokemonType.textContent = pokemon.type;
    newPokemonWeight.textContent = pokemon.weight;
    newPokemonHeight.textContent = pokemon.height;

    newSavedLogo.addEventListener("click", function () {
      newSavedLogo.classList.toggle("saved");
    });
  }
};

render(pokemons, ElPokemonsList);
