import Header from './components/Header';
import Home from './components/Home';
import apiActions from './components/apiActions';
import Recipe from './components/Recipe';
import Recipes from './components/Recipes';
import FoodType from './components/FoodType';
import FoodTypes from './components/FoodTypes';
import RecipePostSection from './components/RecipePostSection';
import RecipeEdit from '.components/RecipeEdit';
import Footer from './components/footer';

const appDiv = document.querySelector('.app')

export default function pageBuild(){
    header();
    navHome();
    navFoodTypes();
    navRecipes();
    footer();
}
function header() {
    const header = document.querySelector('#header');
    header.innerHTML = Header();
}
function navHome() {
    const homeButton = document.querySelector('.home__nav');
    homeButton.addEventListener('click', function () {
        appDiv.innerHTML ="fetch";
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