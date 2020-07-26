using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api_collection.Models;
using api_collection.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Cors;

namespace api_collection.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class FoodTypeController : ControllerBase
    {
        IRepository<FoodType> foodTypeRepo;
        public FoodTypeController(IRepository<FoodType> foodTypeRepo)
        {
            this.foodTypeRepo = foodTypeRepo;
        }

        // GET: api/FoodType
        [HttpGet]
        public IEnumerable<FoodType> Get()
        {
            return foodTypeRepo.GetAll();
        }

        // GET: api/FoodType/5
        [HttpGet("{id}")]
        public FoodType Get(int id)
        {
            return foodTypeRepo.GetById(id);
        }

        // POST: api/FoodType
        [HttpPost]
        public IEnumerable<FoodType> Post([FromBody] FoodType value)
        {
            foodTypeRepo.Create(value);
            return foodTypeRepo.GetAll();
        }

        // PUT: api/FoodType/5
        [HttpPut("{id}")]
        public IEnumerable<FoodType> Put([FromBody] FoodType value)
        {
            FoodType foodType = foodTypeRepo.GetById(value.Id);
            foodType.FoodCategory = value.FoodCategory;
            foodTypeRepo.Update(foodType);
            return foodTypeRepo.GetAll();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IEnumerable<FoodType> Delete(int id)
        {
            var foodType = foodTypeRepo.GetById(id);
            foodTypeRepo.Delete(foodType);
            return foodTypeRepo.GetAll();
        }
    }

}
