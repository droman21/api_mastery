import Header from './components/Header';
import Home from './components/Home';
import apiActions from './api/apiActions';
import Recipes from './components/Recipes';
import FoodType from './components/FoodType';
import FoodTypes from './components/FoodTypes';
import RecipePostSection from './components/RecipePostSection';
import RecipeEdit from './components/RecipeEdit';
import Footer from './components/footer';
import Recipe from './components/Recipe';

const appDiv = document.querySelector('.app');

export default function pageBuild() {
    header();
    Home();
    navHome();
    navFoodTypes();
    navRecipes();
    footer();
    showRecipes();

}
function header() {
    const header = document.querySelector('.header');
    header.innerHTML = Header();
}
function navHome() {
    const homeButton = document.querySelector('.home__nav');
    homeButton.addEventListener('click', function () {
        appDiv.innerHTML = Home();
    })
}
function navFoodTypes() {
    const foodTypesLink = document.querySelector('.foodType__nav');
    foodTypesLink.addEventListener('click', function () {
        showFoodTypes();
    })
}
function navRecipes() {
    const recipesLink = document.querySelector('.recipes__nav');
    recipesLink.addEventListener('click', function () {
        showRecipes();
    })
}
function footer() {
    const footerElement = document.querySelector('.footer');
    footerElement.innerHTML = Footer();
}
function showRecipes() {
    fetch("https://localhost:44307/api/recipe")
        .then(response => response.json())
        .then(recipes => {
            appDiv.innerHTML = Recipes(recipes);
            recipesButton();
        })
    .catch(err => console.log(err))
}
function showFoodTypes() {
    fetch("https://localhost:44307/api/foodtype")
        .then(response => response.json())
        .then(foodTypes => {
            appDiv.innerHTML = FoodTypes(foodTypes);
            foodCategoryButton();
        })
    .catch(err => console.log(err))
}

// function foodTypesButton() {
//     const FoodTypeElement = document.querySelectorAll('.foodType__name');
//     FoodTypeElement.forEach(element => {
//         element.addEventListener('click', function () {
//             const id = element.id;
//             const foodTypeEndpoint = `https://localhost:44307/api/foodtype/${id}`;
//             const foodTypeCallback = foodType => {
//                 appDiv.innerHTML = FoodType(foodType);
//                 recipeButton(foodTypeId, foodType.foodCategory);
//             };
//             apiActions.getRequest(foodTypeEndpoint, foodTypeCallback);
//         })
//     })
// }

// function showFoodTypesByRecipeID() {
//     const recipeByIDLink = document.querySelectorAll(".foodType__item");
//     recipeByIDLink.forEach(element => {
//       element.addEventListener('click', function () {
//         const recipeId = element.id;
//         fetch(`https://localhost:44307/api/recipe/${recipeId}`)
//           .then(response => response.json())
//           .then(recipe => appDiv.innerHTML = Recipe(recipe))
//           .catch(err => console.log(err))
//       })
//     })
  
// }

// function recipesButton() {
//     const recipeElement = document.querySelectorAll('.recipe__list');
//     recipeElement.forEach(element=> {
//         element.addEventListener('click', function() {
//             const recipeId = element.id;
//             const recipeEndpoint = `https://localhost:44307/api/recipe/${recipeId}`;
//             const recipeCallback = recipe => {
//                 appDiv.innerHTML = Recipe(recipe);
//             };
//             apiActions.getRequest(recipeEndpoint, recipeCallback);
//         })
//     })
// }

appDiv.addEventListener("click", function(){
    const createRecipeSection = document.querySelector('.create-recipe');
    if(event.target.classList.contains('create-recipe__button')){
      apiActions.getRequest('https://localhost:44307/api/foodtype',
      foodTypes => {
      createRecipeSection.innerHTML= RecipePostSection(foodTypes);
      })
    }
})
  
appDiv.addEventListener("click", function () {
    if (event.target.classList.contains('create-recipe__submit')) {
      const recipeName = event.target.parentElement.querySelector('.create-recipe__recipeName').value;
      const recipeIngredients = event.target.parentElement.querySelector('.create-recipe__Ingredients').value;
      const recipeCookTime = event.target.parentElement.querySelector('.create-recipe__cookTime').value;
      const recipeFoodType = event.target.parentElement.querySelector('.create-recipe__foodCategory').value;
  
      console.log("Recipe name is" + recipeName +" The Food Category is" + recipeFoodType);
  
      var requestBody = {
        recipeName: recipeName,
        ingredients: recipeIngredients,
        cookTime: recipeCookTime,
        foodTypeId: recipeFoodType,
      }
  
      apiActions.postRequest(
        "https://localhost:44307/api/recipe",
        requestBody,
        recipes => {
            console.log(recipes);
            appDiv.innerHTML = Recipes(recipes);
        }
    )
  }
})

appDiv.addEventListener('click', function () {
    if (event.target.classList.contains('recipe-item__delete')) {
        const recipeId = event.target.parentElement.querySelector('.recipe-item__id').value;

        apiActions.deleteRequest(
            `https://localhost:44307/api/recipe/${recipeId}`,
            recipes => {
                appDiv.innerHTML = Recipes(recipes);
            }
        )
    }
})

appDiv.addEventListener("click", function(){
    if(event.target.classList.contains('recipe-item__edit')){
        const recipeId = event.target.parentElement.querySelector('.recipe-item__id').value;
        apiActions.getRequest(
            `https://localhost:44307/api/recipe/${recipeId}`,
            recipeEdit => {
                appDiv.innerHTML = RecipeEdit(recipeEdit);
            }
        )   
    }
})

appDiv.addEventListener("click", function(){
    if(event.target.classList.contains('edit-recipe__submit')){
        const recipeId = event.target.parentElement.querySelector('.edit-recipe__id').value;
        const recipeName = event.target.parentElement.querySelector('.edit-recipe__name').value;
        const recipeFoodTypeId = event.target.parentElement.querySelector('.edit-recipe__foodTypeId').value;
        const recipeIngredients = event.target.parentElement.querySelector('.edit-recipe__ingredients').value;
        const recipeCookTime = event.target.parentElement.querySelector('.edit-recipe__cookTime').value;

        const recipeData = {
            recipeId: recipeId,
            recipeName: recipeName,
            foodTypeId: recipeFoodTypeId,
            ingredients: recipeIngredients,
            cookTime: recipeCookTime
        };

        console.log(recipeData);
        console.log(JSON.stringify(recipeData));

        apiActions.putRequest(
            `https://localhost:44307/api/recipe/${recipeId}`,
            recipeData,
            recipes => {
                console.log(recipes);
                appDiv.innerHTML = Recipes(recipes);
            }
        )
    }
})

// function showRecipesFunction() {
//     fetch("https://localhost:44307/api/recipe")
//         .then(response => response.json())
//         .then(recipes => {
//             appDiv.innerHTML = Recipes(recipes);
            
//         })
//         .catch(err => console.log(err))
// }

appDiv.addEventListener("click", function () {
    if(event.target.classList.contains('foodType__category')){
      const id = document.querySelector(".foodType-recipes").value;
        console.log(`FoodType ID is ${id}`);
        fetch(`https://localhost:44307/api/foodtype/${id}`)
          .then(response => response.json())
          .then(foodType => appDiv.innerHTML = FoodType(foodType))
          .catch(err => console.log(err))
    }
})

// function displayFoodTypeList_forEach() {
//     const foodTypeName = document.querySelector('.foodType__name');
//     foodTypeName.forEach(element => {
//         element.addEventListener('click', function () {
//             const foodTypeId = element.id;
//             console.log("foodtype:" + foodCategory);
//             const foodTypeEndpoint = `https://localhost:44307/api/foodtype/${foodTypeId}`;
//             console.log("Recipe List Displays");
//             const foodTypeCallback = foodType => {
//                 apDiv.innerHTML = FoodType(foodType);
//                 //recipeNameButton(foodTypeId, foodCategory)
//             };
//             apiActions.getRequest(foodTypeEndpoint, foodTypeCallback);
//         })
//     })
// }

appDiv.addEventListener('click', function () {
    if (event.target.classList.contains("create-recipe__submit")) {
        const recipeName = event.target.parentElement.querySelector(".create-recipe__recipeName").value;
        const recipeIngredients = event.target.parentElement.querySelector(".create-recipe__Ingredients").value;
        const recipeCookTime = event.target.parentElement.querySelector(".create-recipe__cookTime").value;
        const foodTypeId = event.target.parentElement.querySelector(".create-recipe__foodTypeId").value;
        
        const requestBody = {
            Name: recipeName,
            Ingredients: recipeIngredients,
            Cooktime: recipeCookTime,
            FoodtypeId: foodTypeId
        }
        const foodTypeCallback = (recipes) => {
            apiActions.getRequest(`https://localhost:44307/api/foodtype/${foodTypeId}`,
                foodType => {
                    appDiv.innerHTML = FoodType(foodType);
                })
        }
        apiActions.postRequest(
            'https://localhost:44307/api/recipe',
            requestBody,
            foodTypeCallback
        )
    }
})

function foodCategoryButton() {
    const FoodCategoryElement = document.querySelectorAll('.foodType__category');
    FoodCategoryElement.forEach(element => {
        element.addEventListener('click', function () {
            console.log("category clicked")
            const foodTypeId = element.id;
            const foodTypeEndpoint = `https://localhost:44307/api/foodtype/${foodTypeId}`;
            const foodTypeCallback = foodType => {
                appDiv.innerHTML = FoodType(foodType);
                recipeButton(foodTypeId, foodType.foodCategory);
            };
            apiActions.getRequest(foodTypeEndpoint, foodTypeCallback);
        })
    })
}

function recipeButton() {
    const RecipeElement = document.querySelectorAll('.recipe__list');
    RecipeElement.forEach(element => {
        element.addEventListener('click', function () {
            console.log("recipe name clicked" + recipeId);
            const recipeId = element.id;
            const recipeEndpoint = `https://localhost:44307/api/recipe/${recipeId}`;
            const recipeCallback = recipe => {
                appDiv.innerHTML = Recipe(recipe);
                recipeButton(recipeId, foodType.foodCategory);
            };
            apiActions.getRequest(recipeEndpoint, recipeCallback);
        })
    })
}