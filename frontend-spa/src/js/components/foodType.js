export default function FoodType(foodType) {
    return `
        <u><h1 class="foodType__category">${foodType.foodCategory}</h1></u>
            ${foodType.recipes.map(recipe => {
                return `
                <ul>
                    <p><img src="images/${recipe.recipeImage}" alt="image"></p>
                    <h4 id="${foodType.id}">Recipe Name: ${recipe.recipeName}</h4>
                    <h4>Ingredients: ${recipe.ingredients}</h4>
                    <h4>Cook Time: ${recipe.cookTime}</h4>
                    <input class='foodType__name' type="hidden" id="${recipe.recipeId}" value='${recipe.recipeName}'>
                </ul>
                `
            }).join("")}

    `
}