export default function FoodType(foodType) {
    return `
    <h1>${foodType.name}</h1>
     <ul class="foodType-recipes">
        ${foodType.recipes.map(recipe => {
        return `
                <li>
                   <p> <img src="images/${recipe.image}" alt="image"> </p>
                    <a class="foodType__name" id="${recipe.id}"  href= "#"> ${recipe.name} </a>                     
                </li>
            `
    }).join("")}
        </ul> 
        `
}