// const allMealURL = "https://www.themealdb.com/api/json/v1/1/categories.php";
// const filtByCate =
//   "https://www.themealdb.com/api/json/v1/1/filter.php?c=breakfast";
// const randMeal = "https://www.themealdb.com/api/json/v1/1/random.php";
// const searchByName =
//   "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";
// const mealName = document.querySelector("#result span");
// const image = document.querySelector("#img");
// const result = document.querySelector("#display span");
// const instructions = document.querySelector(".instructions");
// console.log(instructions.children)
// const update = (meal) => {
//   name = meal.strMeal;
//   pic = meal.strMealThumb;
//   ins = meal.strInstructions;
//   console.log(name, pic);
//   image.innerHTML = `<img src='${pic}' alt="">`;
//   mealName.innerText = `${name}`;
//   result.innerText = `${name}`;
//   let p = document.createElement('p')
//   p.innerHTML = `${ins}`
//   instructions.appendChild(p) ;
// };

// const findMeal = async (url) => {
//   const response = await fetch(url);
//   return response.json();
// };
// findMeal(allMealURL)
//   .then((data) => {
//     console.log(data);
//     //update(data.meals[0]);
//     return findMeal(allMealURL).then(data=>{
//       console.log(data)
//     })
//   })
//   .catch((err) => {
//     console.log(err);
//   });
