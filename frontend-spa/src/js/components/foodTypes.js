export default function FoodTypes(foodTypes) {
    return `
    <h1><u>Food Types</h1></u>
     <class="foodtype__list">
        ${foodTypes.map(foodType => {
        return `
        <div id="recipes"
                <ul><article>
                    <h2 class ="foodType__category" id="${foodType.foodTypeId}">${foodType.foodCategory}</h2>
                    <img src="images/${foodType.foodImage}" alt="image" style="width: 100px; height: 100px">                  
                </ul></article>
        </div>
        `
    }).join("")}
        `
}