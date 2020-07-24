export default function RecipePostSection(recipes){
    return `
        <input class="create-recipe__recipeName" type="text" placeholder="Create a Recipe Here">
        <input class="create-recipe__Ingredients" type="text-box">
        <input class="create-recipe__cookTime" type="text">
        <select class="create-recipe__foodTypes" type="dropdown">
        <input class="create-recipe__Image" type="text">
            ${recipes.map(recipe => {
                return `
                    <option class="create-recipe__recipeID" value="${recipe.recipeId}">${recipe.recipeName}</option>
                    <h4 class="recipe__Ingredients">${recipe.ingredients}</h4>
                    <h4 class="recipe__cookTime">${recipe.cookTime}</h4>
                `
            }).join("")}
        </select>
        <button class="create-recipe__submit">Save Your Recipe</button>
    `
}