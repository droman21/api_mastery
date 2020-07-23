export default function recipe(recipe){
    return `
        <h1>${recipe.name}</h1>
        <ol>
            ${foodType.recipes.map(recipe =>{
                return `
                <li>
                    <h4>Recipe Name: ${recipe.name}</h4>
                    <h4>Recipe Ingredients: ${recipe.ingredients}</h4>
                </li>
                `
            }).join("")}
        <ol>
    `
}