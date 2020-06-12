const form = document.querySelector("form");
const mealName = document.querySelector("#found");
const list = document.querySelector("#lists");
const result = document.querySelector(".resultWrapper");
const instructions = document.querySelector(".instructions");
const hideSearch = document.querySelector("#display");
const button = document.querySelector("#random");

const baseForLetter = "https://www.themealdb.com/api/json/v1/1/search.php?f=";
const baseForNation = "https://www.themealdb.com/api/json/v1/1/filter.php?a=";
const baseForName = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const random = "https://www.themealdb.com/api/json/v1/1/random.php";

const searchMeal = async (url, param) => {
  const base = url;
  const query = `${param}`;
  const response = await fetch(base + query);
  return response.json();
};

const search = async (id) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  return response.json();
};
const finalJob = (dets) => {
  for (key in dets) {
    for (let i = 0; i < 20; i++) {
      if (key === `strIngredient${i}` && dets[key] !== null) {
        const ing = dets[key];
        list.innerHTML += `<li>${ing}</li>`;
      }
    }
  }
  const instruc = document.createElement("div");
  instructions.innerHTML = `<h1>Instructions</h1>`;
  instruc.innerText = `${dets.strInstructions}`;
  instructions.appendChild(instruc);
};

const getDetails = () => {
  const images = document.querySelectorAll("#img img");
  images.forEach((img) => {
    img.addEventListener("click", (e) => {
      const newId = e.target.id;

      search(newId).then((data) => {
        if (!list.innerHTML && !instructions.innerHTML) {
          finalJob(data.meals[0]);
        }
        if (list.innerHTML && instructions.innerHTML) {
          list.innerHTML = "";

          instructions.innerHTML = "";
          finalJob(data.meals[0]);
        }
      });
      list.scrollIntoView(true);
    });
  });
};

const updateUI = (food, name) => {
  if (food === null) {
    hideSearch.classList.remove("displayNone");
    mealName.innerText = name;
    mealName.innerHTML = `<p><span>Sorry found nothing on ${name}</span></p>`;
  } else {
    hideSearch.classList.remove("displayNone");
    mealName.innerText = name;
    food.forEach((item) => {
      const div = `
    <div id="result">
              <div id="img" ><img id='${item.idMeal}' src="${item.strMealThumb}" alt="" /></div>
              <span>${item.strMeal}</span>
            </div>

    `;
      result.innerHTML += div;
    });
    getDetails();
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameSearch = form.byName.value;
  const letterSearch = form.byFirstLetter.value;
  const areaSearch = form.byArea.value;

  if (nameSearch) {
    searchMeal(baseForName, nameSearch)
      .then((data) => {
        if (!result.innerHTML) {
          updateUI(data.meals, nameSearch);
        } else if (result.innerHTML) {
          result.innerHTML = "";
          updateUI(data.meals, nameSearch);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  if (letterSearch) {
    searchMeal(baseForLetter, letterSearch)
      .then((data) => {
        if (!result.innerHTML) {
          updateUI(data.meals, letterSearch);
        } else if (result.innerHTML) {
          result.innerHTML = "";
          updateUI(data.meals, letterSearch);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  if (areaSearch) {
    searchMeal(baseForNation, areaSearch)
      .then((data) => {
        if (!result.innerHTML) {
          updateUI(data.meals, areaSearch);
        } else if (result.innerHTML) {
          result.innerHTML = "";
          updateUI(data.meals, areaSearch);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  form.reset();
});
button.addEventListener("click", (e) => {
  searchMeal(random, "")
    .then((data) => {
      if (!result.innerHTML) {
        updateUI(data.meals, "random");
      } else if (result.innerHTML) {
        result.innerHTML = "";
        updateUI(data.meals, "random");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
