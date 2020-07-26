export default function FoodTypes(foodTypes) {
    return `
    <h1><u>Food Types</h1></u>
     <ul class="foodtype__list">
        ${foodTypes.map(foodType => {
        return `
                <li>
                    <h4 class ="foodType__name" id="${foodType.foodTypeId}">${foodType.foodCategory}
                    <p><img src="images/${foodType.image}" alt="image"></p>                   
                </li>
            `
    }).join("")}
        </ul> 
        `
}