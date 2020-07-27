using Microsoft.EntityFrameworkCore.Migrations;

namespace api_collection.Migrations
{
    public partial class AddedFoodTypeImages : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "FoodImage",
                table: "FoodTypes",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "FoodTypes",
                keyColumn: "Id",
                keyValue: 1,
                column: "FoodImage",
                value: "veggies.jpg");

            migrationBuilder.UpdateData(
                table: "FoodTypes",
                keyColumn: "Id",
                keyValue: 2,
                column: "FoodImage",
                value: "chicken.jpg");

            migrationBuilder.UpdateData(
                table: "FoodTypes",
                keyColumn: "Id",
                keyValue: 3,
                column: "FoodImage",
                value: "beef.jpg");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FoodImage",
                table: "FoodTypes");
        }
    }
}
