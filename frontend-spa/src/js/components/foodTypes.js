export default function FoodTypes(foodTypes) {
    return `
    <h1>${foodTypes.name}</h1>
     <ul class="foodtype__list">
        ${foodTypes.map(foodType => {
        return `
                <li>
                   <p> <img src="images/${foodType.image}" alt="image"> </p>
                    <a class="foodType__name" id="${foodType.id}"  href= "#"> ${foodType.name} </a>                     
                </li>
            `
    }).join("")}
        </ul> 
        `
}