using api_collection.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api_collection.Repositories
{
    public class FoodTypeRepository : Repository<FoodType>, IRepository<FoodType>
    {
        public FoodTypeRepository(FoodContext context) : base(context)
        {

        }
        
    }
}
