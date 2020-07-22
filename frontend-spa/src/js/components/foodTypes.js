export default function FoodTypes(foodType) {
    return `
    <h1>${foodTypes.name}</h1>
     <ul class="foodtype_list">
        ${foodTypes.map(foodType => {
        return `
                <li>
                   <p> <img src="images/${foodType.image}" alt="image"> </p>
                    <a class="foodType_name" id="${foodType.id}"  href= "#"> ${foodType.name} </a>                     
                </li>
            `
        }).join("")}
        </ul> 
        `
    }