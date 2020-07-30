export default function recipe(recipe){
    return `
        <h1>${recipe.name}</h1>
        <ol>
            ${recipe.foodTypes.map(recipe =>{
                return `
                <li>
                    <h4 id="${foodType.id}">Recipe Name: ${recipe.name}</h4>
                    <h4>Recipe Ingredients: ${recipe.ingredients}</h4>
                    <h4>Food Category: ${recipe.foodType.foodCategory}</h4>
                    <div class="recipe__image">
                    <img src="/images/DefaultFoodImage.jpg" alt='${foodType.foodType}' style="width: 100px; height: 100px;">
                    </div> 
                </li>
                `
            }).join("")}
        <ol>
    `
}