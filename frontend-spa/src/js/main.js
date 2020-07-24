import Header from './components/Header';
import Home from './components/Home';
import apiActions from './components/apiActions';
import Recipes from './components/Recipes';
import FoodType from './components/FoodType';
import FoodTypes from './components/FoodTypes';
import RecipePostSection from './components/RecipePostSection';
import RecipeEdit from './components/RecipeEdit';
import Footer from './components/footer';
import Recipe from './components/Recipe';

const appDiv = document.querySelector('.app')

export default function pageBuild() {
    header();
    navHome();
    navFoodTypes();
    navRecipes();
    footer();
    showFoodTypes();
}
function header() {
    const header = document.querySelector('#header');
    header.innerHTML = Header();
}
function navHome() {
    const homeButton = document.querySelector('.home__nav');
    homeButton.addEventListener('click', function () {
        appDiv.innerHTML = "fetch";
    })
}
function navFoodTypes() {
    const foodTypesButton = document.querySelector('.foodType__nav');
    foodTypesButton.addEventListener('click', function () {
        appDiv.innerHTML = "fetch"
    })
}
function navRecipes() {
    const recipesButton = document.querySelector('.recipes__nav');
    recipesButton.addEventListener('click', function () {
        appDiv.innerHTML = "fetch"
    })
}
function footer() {
    const footerElement = document.querySelector('.footer');
    footerElement.innerHTML = Footer();
}
function showFoodTypes() {
    fetch("https://localhost:44307/api/foodtype")
        .then(response => response.json())
        .then(foodTypes => {
            appDiv.innerHTML = FoodTypes(foodTypes);
            foodTypesButton();
        })
        .catch(err => console.log(err))
}

function foodTypesButton() {
    const FoodTypeElement = document.querySelectorAll('.foodtype__list');
    FoodTypeElement.forEach(element => {
        element.addEventListener('click', function () {
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

// function recipeNameButton(foodTypeId, foodCategory) {
//     const recipeNameElement = document.querySelectorAll('.foodtype-recipe');
//     recipeNameElement.forEach(element => {
//         element.addEventListener('click', function () {
//             const recipeId = element.id;
//             const endpoint = `https://localhost:44307/api/recipe/${recipeId}`;
//             const foodTypeCallback = foodType => {;
//             const callBack = recipe => {
//                 appDiv.innerHTML = Recipe(recipe);
//             };
//             apiActions.getRequest(endpoint, callBack);
//         })
//     })
// }

// appDiv.addEventListener('click', function () {
//     if (event.target.classList.contains('create-recipe_recipeName')) {
//         const addRecipeSection = document.querySelector('.create-recipe');
//         addRecipeSection.innerHTML = RecipePostSection();
//     }
// })

appDiv.addEventListener('click', function () {
    if (event.target.classList.contains('create-recipe__submit')) {
        const recipeName = event.target.parentElement.querySelector(".create-recipe__recipeName").value;
        const recipeImage = event.target.parentElement.querySelector(".create-recipe__Image").value;
        const recipeIngredients = event.target.parentElement.querySelector(".create-recipe__Ingredients").value;
        const cookTime = event.target.parentElement.querySelector('.create-recipe__cookTime').value;
        const foodTypeId = event.target.parentElement.querySelector(".create-recipe__foodTypeId").value;

        var requestBody = {
            Name: recipeName,
            ImageName: recipeImage,
            Ingredients: recipeIngredients,
            CookTime: cookTime,
            Id: foodTypeId
        }

        apiActions.postRequest(
            "https://localhost:44307/api/foodtype",
            requestBody,
            newRecipes => {
                appDiv.innerHTML = Recipes(newRecipes);
                recipeNameButton();
            }
        )
    }

})

//Current in progress marker
appDiv.addEventListener('click', function () {
    if (event.target.classList.contains('create-recipe__recipeName')) {
        const addRecipeSection = document.querySelector('.create-recipe');
        const foodTypeId = event.target.parentElement.querySelector(".create-recipe__submit").id;
        addRecipeSection.innerHTML = RecipePostSection(foodTypeId);
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
        const receipeFoodType = event.target.parentElement.querySelector('.edit-recipe__foodTypeID').value;
        const recipeIngredients = event.target.parentElement.querySelector('.edit-recipe__Ingredients').value;
        const cookTime = event.target.parentElement.querySelector('.edit-recipe__cookTime').value;

        const recipeData = {
            Name: recipeName,
            Ingredients: recipeIngredients,
            CookTime: cookTime,
            Id: recipeId,
            FoodTypeID: receipeFoodType
  
        };
  
        apiActions.putRequest(
            `https://localhost:44307/api/recipe/${recipeId}`,
            recipeData,
            recipes => {
                appDiv.innerHTML = Recipes(recipes);
            }
        )
    }
  })

//Current stopping point
appDiv.addEventListener("click", function () {
    if (event.target.classList.contains('update-song__button')) {
        const editSongSection = document.querySelector('.edit-song');
        const songId = event.target.parentElement.querySelector('.update-song__button').id;
        const albumId = event.target.parentElement.querySelector('.update-song__button').value;
        apiActions.getRequest(
            `https://localhost:44313/api/song/${songId}`,
            songEdit => {
                editSongSection.innerHTML = SongEditSection(songEdit, albumId);
            }
        )
    }
})
