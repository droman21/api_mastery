using api_collection.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api_collection.Repositories
{
    public class RecipeRepository : Repository<Recipe>, IRepository<Recipe>
    {
        FoodContext context;
        
        public RecipeRepository(FoodContext db) : base(db)
        {
            context = db;
        }
        public override Recipe GetById(int id)
        {
            return context.Recipes.Where(o => o.RecipeId == id).Include("FoodType").FirstOrDefault();
        }
        public override IEnumerable<Recipe> GetAll()
        {
            return context.Recipes.Include("FoodType").ToList();
        }
    }
}
