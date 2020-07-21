using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using api_collection.Repositories;


namespace api_collection.Models
{
    public class Recipe
    {
        public int RecipeId { get; set; }
        public string RecipeName { get; set; }
        public string RecipeImage { get; set; }

        [JsonIgnore]
        public virtual IEnumerable<FoodType> foodTypes { get; set; }
        public int FoodTypeId { get; set; }

        public Recipe()
        {
        }

        public Recipe (int recipeId, string recipeName, string recipeImage)
        {
            this.RecipeId = recipeId;
            this.RecipeName = recipeName;
            this.RecipeImage = recipeImage;
        }
    }
}
