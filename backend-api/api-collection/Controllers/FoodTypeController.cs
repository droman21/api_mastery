using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api_collection.Models;
using api_collection.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace api_collection.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class FoodTypeController : ControllerBase
    {
        IRepository<FoodType> foodRepo;
        public FoodTypeController(IRepository<FoodType> foodRepo)
        {
            this.foodRepo = foodRepo;
        }

        // GET: api/Album
        [HttpGet]
        public IEnumerable<FoodType> Get()
        {
            return foodRepo.GetAll();
        }

        // GET: api/Album/5
        [HttpGet("{id}")]
        public FoodType Get(int id)
        {
            return foodRepo.GetById(id);
        }

        // POST: api/Album
        [HttpPost]
        public IEnumerable<FoodType> Post([FromBody] FoodType value)
        {
            foodRepo.Create(value);
            return foodRepo.GetAll();
        }

        // PUT: api/Album/5
        [HttpPut("{id}")]
        public IEnumerable<FoodType> Put(int id, [FromBody] FoodType foodType)
        {
            foodRepo.Update(foodType);
            return foodRepo.GetAll();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IEnumerable<FoodType> Delete(int id)
        {
            var foodType = foodRepo.GetById(id);
            foodRepo.Delete(foodType);
            return foodRepo.GetAll();
        }
    }

}
