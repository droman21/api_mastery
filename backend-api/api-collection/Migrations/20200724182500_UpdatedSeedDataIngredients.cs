using Microsoft.EntityFrameworkCore.Migrations;

namespace api_collection.Migrations
{
    public partial class UpdatedSeedDataIngredients : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CookTime",
                table: "Recipes",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Ingredients",
                table: "Recipes",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Recipes",
                keyColumn: "RecipeId",
                keyValue: 2,
                columns: new[] { "CookTime", "Ingredients" },
                values: new object[] { "20 minutes", "Cottage Cheese Cubes, Curry Sauce, Peas" });

            migrationBuilder.UpdateData(
                table: "Recipes",
                keyColumn: "RecipeId",
                keyValue: 3,
                columns: new[] { "CookTime", "Ingredients" },
                values: new object[] { "18 minutes", "Black Beans, Quinoa, Corn, Brown Rice, Lettuce, Tomato, Guac, Brioche Bun" });

            migrationBuilder.UpdateData(
                table: "Recipes",
                keyColumn: "RecipeId",
                keyValue: 4,
                columns: new[] { "CookTime", "Ingredients" },
                values: new object[] { "15 minutes", "Zucchini, Marinara Sauce, Squash, Onion" });

            migrationBuilder.UpdateData(
                table: "Recipes",
                keyColumn: "RecipeId",
                keyValue: 5,
                columns: new[] { "CookTime", "Ingredients" },
                values: new object[] { "75 minutes", "Chicken, Cheese, Beans, Tortillas, Enchilada Sauce, Rice, Chili" });

            migrationBuilder.UpdateData(
                table: "Recipes",
                keyColumn: "RecipeId",
                keyValue: 6,
                columns: new[] { "CookTime", "Ingredients" },
                values: new object[] { "60 minutes", "Chicken, Mozzarella Cheese, Shredded Parmesean Cheese, Red Sauce, Pasta, Panko, Butter" });

            migrationBuilder.UpdateData(
                table: "Recipes",
                keyColumn: "RecipeId",
                keyValue: 7,
                columns: new[] { "CookTime", "Ingredients" },
                values: new object[] { "35 minutes", "Chicken, Grease, Flour, Cayenne Pepper, Salt, Pepper, Butter Milk" });

            migrationBuilder.UpdateData(
                table: "Recipes",
                keyColumn: "RecipeId",
                keyValue: 8,
                columns: new[] { "CookTime", "Ingredients" },
                values: new object[] { "17 minutes", "Angus Beef, Bacon, Mayo, Ketchup, Lettuce, Tomato, Sesame Seed Bun" });

            migrationBuilder.UpdateData(
                table: "Recipes",
                keyColumn: "RecipeId",
                keyValue: 9,
                columns: new[] { "CookTime", "Ingredients" },
                values: new object[] { "20 minutes", "USDA Prime Beef" });

            migrationBuilder.UpdateData(
                table: "Recipes",
                keyColumn: "RecipeId",
                keyValue: 10,
                columns: new[] { "CookTime", "Ingredients" },
                values: new object[] { "45 minutes", "Beef, Carrots, Celery, Potatos, Bay Leaf, Rosemary, Salt, Pepper, Beef Stock, Flour" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CookTime",
                table: "Recipes");

            migrationBuilder.DropColumn(
                name: "Ingredients",
                table: "Recipes");
        }
    }
}
