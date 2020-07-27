using Microsoft.EntityFrameworkCore.Migrations;

namespace api_collection.Migrations
{
    public partial class FirstMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FoodTypes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FoodCategory = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FoodTypes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Recipes",
                columns: table => new
                {
                    RecipeId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RecipeName = table.Column<string>(nullable: true),
                    RecipeImage = table.Column<string>(nullable: true),
                    FoodTypeId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Recipes", x => x.RecipeId);
                    table.ForeignKey(
                        name: "FK_Recipes_FoodTypes_FoodTypeId",
                        column: x => x.FoodTypeId,
                        principalTable: "FoodTypes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "FoodTypes",
                columns: new[] { "Id", "FoodCategory" },
                values: new object[] { 1, "Vegetarian" });

            migrationBuilder.InsertData(
                table: "FoodTypes",
                columns: new[] { "Id", "FoodCategory" },
                values: new object[] { 2, "Chicken" });

            migrationBuilder.InsertData(
                table: "FoodTypes",
                columns: new[] { "Id", "FoodCategory" },
                values: new object[] { 3, "Beef" });

            migrationBuilder.InsertData(
                table: "Recipes",
                columns: new[] { "RecipeId", "FoodTypeId", "RecipeImage", "RecipeName" },
                values: new object[,]
                {
                    { 2, 1, "", "Matar Paneer" },
                    { 3, 1, "", "Black Bean Burger" },
                    { 4, 1, "", "Ratatouille" },
                    { 5, 2, "", "Chicken Enchiladas" },
                    { 6, 2, "", "Chicken Parmesean" },
                    { 7, 2, "", "Fried Chicken" },
                    { 8, 3, "", "Angus Burger" },
                    { 9, 3, "", "Steak" },
                    { 10, 3, "", "Pot Roast" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Recipes_FoodTypeId",
                table: "Recipes",
                column: "FoodTypeId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Recipes");

            migrationBuilder.DropTable(
                name: "FoodTypes");
        }
    }
}
