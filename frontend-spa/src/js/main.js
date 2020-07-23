import Header from './components/Header';
import Home from './components/Home';
import apiActions from './components/apiActions';
import Recipe from './components/Recipe';
import Recipes from './components/Recipes';
import FoodType from './components/FoodType';
import FoodTypes from './components/FoodTypes';
import RecipePostSection from './components/RecipePostSection';
import RecipeEdit from '.components/RecipeEdit';

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