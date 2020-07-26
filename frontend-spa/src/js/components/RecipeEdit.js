export default function RecipeEdit(recipe){
    return `
        <h1>Apply Your Edits Below</h1>
        <h3 class="edit-recipe__fields">Recipe Name:</h3>
        <input class="edit-recipe__name" type="text" value='${recipe.recipeName}'>
        <input class="edit-recipe__id" type="hidden" value='${recipe.recipeId}'>
        <h3 class="edit-recipe__fields">Ingredients:</h3>
        <input class="edit-recipe__ingredients" type="text" value='${recipe.ingredients}'>
        <h3 class="edit-recipe__field">Cook Time:</h3>
        <input class="edit-recipe__cookTime" type="text" value='${recipe.cookTime}'>
        <h3 class="edit-recipe__field">Food Category:</h3>
        <input class="edit-recipe__foodCategory" type="text" value='${recipe.foodType.foodCategory}'>
        <input class="edit-recipe__foodTypeId" type="hidden" value='${recipe.foodType.foodTypeId}'>
        <button class="edit-recipe__submit">Save Changes</button>
        
    `
}