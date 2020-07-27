// export default function FoodTypes(foodTypes) {
//     return `
//         <h1><u>Food Categories</h1></u>
//         <h2>Click a food category below to view all of its recipes</h2>
//         <section class="foodtype__list">
//             ${foodTypes.map(foodType => {
//                 return `
//                     <div id="recipes"
//                     <ul><article>
//                         <a class="foodType__item">
//                         <h2 class='foodType__category' id="${foodType.Id}">${foodType.foodCategory}</h2>
//                         <img src="images/${foodType.foodImage}" alt="image" style="width: 100px; height: 100px">
//                         </a>                 
//                     </ul></article>
//                     </div>
//                 `
//             }).join("")}
//         </section>
//     `
// }
export default function FoodTypes(foodTypes) {
    return `
    <h1><u>Food Types</h1></u>
     <class="foodtype__list">
        ${foodTypes.map(foodType => {
        return `
        <div id="recipes"
                <ul>
                <article>
                   <a class ="foodType__category" id="${foodType.id}" href="#">
                    <h2 >${foodType.foodCategory}</h2>
                    <p><img src="images/${foodType.foodImage}" alt="image"></p>          
                    </a>
                    </article>
                </ul>
        </div>
        `
    }).join("")}
        `
}