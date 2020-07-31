using api_collection.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api_collection.Repositories
{
    public class FoodTypeRepository : Repository<FoodType>, IRepository<FoodType>
    {
        FoodContext context;
        public FoodTypeRepository(FoodContext db) : base(db)
        {
            context = db;
        }
        public override FoodType GetById(int id)
        {
            return context.FoodTypes.Where(o => o.Id == id).Include("recipes").FirstOrDefault();
        }
        public override IEnumerable<FoodType> GetAll()
        {
            return context.FoodTypes.Include("recipes").ToList();
        }
    }
}
