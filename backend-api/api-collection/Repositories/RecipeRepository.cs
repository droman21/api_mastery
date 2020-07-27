using api_collection.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api_collection.Repositories
{
    public class RecipeRepository : Repository<Recipe>, IRepository<Recipe>
    {
        public RecipeRepository(FoodContext context) : base(context)
        {
        }
    }
}
