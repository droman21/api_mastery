export default function RecipeEdit(recipe){
    return `
        <h3>${recipe.recipeName}</h3>
        <input class="edit-recipe__name" type="text" value='${recipe.recipeNa,e}'>
        <input class="edit-recipe__id" type="hidden" value='${recipe.recipeId}'>
        <input class="edit-recipe__image" type="hidden" value='${recipe.recipeImage}'>
        <input class="edit-recipe__Ingredients" type="hidden" value='${recipe.ingredients}'>
        <input class="edit-recipe__foodTypeID" type="hidden" value='${foodType.recipeId}'>
        <input class="edit-recipe__cookTime" value='${recipe.cookTime}'>
        <button class="edit-recipe__submit">Save Changes</button>
    `
}