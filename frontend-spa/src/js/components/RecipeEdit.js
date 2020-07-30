export default function RecipeEdit(recipe){
    return `
        <h1>Apply Your Edits Below</h1>
        <h3>Recipe Name:</h3>
        <input class='edit-recipe__name' type="text" value='${recipe.recipeName}'}>
        <input class='edit-recipe__id' type="hidden" value='${recipe.recipeId}'}>
        <h3>Ingredients:</h3>
        <input class='edit-recipe__ingredients' type="text" value='${recipe.ingredients}'}>
        <h3>Cook Time:</h3>
        <input class='edit-recipe__cookTime' type="text" value='${recipe.cookTime}'}>
        <input class='edit-recipe__foodTypeId' type="hidden" value='${recipe.foodType.id}'}>
        <button class='edit-recipe__submit'>Save Changes</button>
        
    `
}