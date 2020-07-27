using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api_collection.Repositories;
using Newtonsoft.Json;

namespace api_collection.Models
{
    public class FoodType
    {
        public int Id { get; set; }
        public string FoodCategory { get; set; }
        public string FoodImage { get; set; }

        public virtual IEnumerable<Recipe> recipes { get; set; }

        public FoodType()
        {

        }
        public FoodType(int id, string foodCategory, string foodImage)
        {
            this.Id = id;
            this.FoodCategory = foodCategory;
            this.FoodImage = foodImage;
        }
    }
}
