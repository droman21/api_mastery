using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using api_collection.Models;
using api_collection.Repositories;

namespace api_collection.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipeController : ControllerBase
    {
        public IRepository<Recipe> recipeRepo;

        public RecipeController(IRepository<Recipe> recipeRepo)
        {
            this.recipeRepo = recipeRepo;
        }

        // GET: api/<RecipeController>
        [HttpGet]
        public IEnumerable<Recipe> Get()
        {
            return recipeRepo.GetAll();
        }

        // GET api/<RecipeController>/5
        [HttpGet("{id}")]
        public Recipe Get(int id)
        {
            Recipe recipe = recipeRepo.GetById(id);
            return recipe;
        }

        // POST api/<RecipeController>
        [HttpPost]
        public IEnumerable<Recipe> Post([FromBody] Recipe value)
        {
            recipeRepo.Create(value);
            return recipeRepo.GetAll();
        }

        // PUT api/<RecipeController>/5
        [HttpPut("{id}")]
        public IEnumerable<Recipe> Put([FromBody] Recipe value)
        {
            Recipe recipe = recipeRepo.GetById(value.RecipeId);
            recipe.RecipeName = value.RecipeName;
            recipeRepo.Update(recipe);
            return recipeRepo.GetAll();

        }

        // DELETE api/<RecipeController>/5
        [HttpDelete("{id}")]
        public IEnumerable<Recipe> Delete(int id)
        {
            var recipe = recipeRepo.GetById(id);
            recipeRepo.Delete(recipe);
            return recipeRepo.GetAll();
        }
    }

}

