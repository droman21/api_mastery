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
        public string Ingredients { get; set; }
        public string CookTime { get; set; }

        //[JsonIgnore]
        public virtual FoodType FoodType { get; set; }
        public int FoodTypeId { get; set; }

        public Recipe()
        {
        }

        public Recipe (int recipeId, string recipeName, string recipeImage, string recipeIngredients, string cookTime, int foodTypeId)
        {
            this.RecipeId = recipeId;
            this.RecipeName = recipeName;
            this.RecipeImage = recipeImage;
            this.Ingredients = recipeIngredients;
            this.CookTime = cookTime;
            this.FoodTypeId = foodTypeId;
        }
    }
}
