export default function RecipeEdit(recipe){
    return `
        <h3>${recipe.recipeName}</h3>
        <input class="edit-recipe__name" type="text" value='${recipe.recipeName}'>
        <input class="edit-recipe__id" type="hidden" value='${recipe.recipeId}'>
        <input class="edit-recipe__image" type="hidden" value='${recipe.recipeImage}'>
        <input class="edit-recipe__ingredients" type="hidden" value='${recipe.ingredients}'>
        <input class="edit-recipe__foodType" type="hidden" value='${recipe.foodType}'>
        <input class="edit-recipe__cookTime" value='${recipe.cookTime}'>
        <button class="edit-recipe__submit">Save Changes</button>
    `
}