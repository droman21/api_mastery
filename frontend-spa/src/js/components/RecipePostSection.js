export default function RecipePostSection(foodTypes){
    return `
        <input class="create-recipe__recipeName" type="text" placeholder="Enter Recipe Name">
        <input class="create-recipe__Ingredients" type="text" placeholder="Enter Ingredients">
        <input class="create-recipe__cookTime" type="text" placeholder="Enter Cooktime">
        <select class="create-recipe__foodCategory" type="dropdown">
            ${foodTypes.map(foodType => {
                return `
                    <option class="create-recipe__recipeName" value="${foodType.foodTypeId}">${foodType.foodCategory}</option>
                `
            }).join("")}
        </select>
        <button class="create-recipe__submit">Save Your Recipe</button>
    `
}