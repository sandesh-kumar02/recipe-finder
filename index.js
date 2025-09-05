let image = document.querySelector("img");
let title = document.getElementById("title");
let strCategory = document.getElementById("strCategory");
let strArea = document.getElementById("strArea");
let strInstructions = document.getElementById("strInstructions");
let searchInput = document.querySelector("input");
let btn = document.getElementById("btn");

btn.addEventListener("click", async (event) => {
  let query = searchInput.value.trim();
  if (!query) {
    alert("Please enter a recipe name!");
    return;
}
receipeFinder(query);
searchInput.value = ""
});


async function receipeFinder(query) {
    const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
  const fetchingReceipe = fetch(URL);
  const data = await await (await fetchingReceipe).json();

  if (!data.meals) {
    alert("No recipe found!");
    return;
  }

  console.log(data.meals[0]);
  image.src = data.meals[0].strMealThumb;
  title.innerHTML = data.meals[0].strMeal;
  strCategory.innerHTML = data.meals[0].strCategory;
  strArea.innerHTML = data.meals[0].strArea;
  strInstructions.innerHTML = data.meals[0].strInstructions;
}
