using api_collection.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api_collection
{
    public class FoodContext : DbContext
    {
        public DbSet<Recipe> Recipes { get; set; }
        public DbSet<FoodType> FoodTypes { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = "Server=(localdb)\\mssqllocaldb;Database=FoodCollection_Database;Trusted_Connection=True;";

            optionsBuilder.UseSqlServer(connectionString)
                          .UseLazyLoadingProxies();

            base.OnConfiguring(optionsBuilder);
        }
        protected override void OnModelCreating(ModelBuilder modelbuilder)
        {
            modelbuilder.Entity<FoodType>().HasData(
                new FoodType(1, "Vegetarian"),
                new FoodType(2, "Chicken"),
                new FoodType(3, "Beef")
                );
            modelbuilder.Entity<Recipe>().HasData(
                new Recipe(1, "Matar Paneer", ""),
                new Recipe(1, "Black Bean Burger", ""),
                new Recipe(1, "Ratatouille", ""),
                new Recipe(2, "Chicken Enchiladas", ""),
                new Recipe(2, "Chicken Parmesean", ""),
                new Recipe(2, "Fried Chicken", ""),
                new Recipe(3, "Angus Burger", ""),
                new Recipe(3, "Steak", ""),
                new Recipe(3, "Pot Roast", "")
                );
        }
    }
}
