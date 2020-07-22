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
                new Recipe(2, "Matar Paneer", "", 1),
                new Recipe(3, "Black Bean Burger", "",1),
                new Recipe(4, "Ratatouille", "", 1),
                new Recipe(5, "Chicken Enchiladas", "",2),
                new Recipe(6, "Chicken Parmesean", "",2),
                new Recipe(7, "Fried Chicken", "",2),
                new Recipe(8, "Angus Burger", "",3),
                new Recipe(9, "Steak", "",3),
                new Recipe(10, "Pot Roast", "",3)
                );
        }
    }
}
