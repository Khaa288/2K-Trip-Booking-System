using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace tkpm_API.Migrations
{
    /// <inheritdoc />
    public partial class AddTripCost : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "TripCost",
                table: "Bills",
                type: "float",
                nullable: false,
                defaultValue: 0.0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TripCost",
                table: "Bills");
        }
    }
}
