export default function Recipes(recipes){
    return `
        <h1><u>Recipes</h1></u>
        <section class="recipe__list">
            ${recipes.map(recipe => {
                return `
            <div id="recipes"
                <ul><article><h2 class='recipe__name'>${recipe.recipeName}</h2>
                    <h4 class='recipe__ingredients'>Ingredients: ${recipe.ingredients}</h4>
                    <h4 class='recipe__cookTime'>Cook Time: ${recipe.cookTime}</h4>
                    <button class='recipe-item__edit'>Edit</button>
                    <button class='recipe-item__delete'>Delete</button>
                    <input class='recipe-item__id' type="hidden" value='${recipe.recipeId}'>
                    <div class="recipe__image">
                    <img src="images/${recipe.recipeImage}" alt="image" style="width: 100px; height: 100px">
                    </div></ul></article>
                </li>
            </div>
        
                `
            }).join("")}
            <section class="create-recipe">
            <button class="create-recipe__button">Add a Recipe</button>
            </section>
            </section>
    `;
}