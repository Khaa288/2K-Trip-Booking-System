using Microsoft.EntityFrameworkCore;
using tkpm_API.Data;
using tkpm_API.Helpers;
using tkpm_API.Services.Admin;
using tkpm_API.Services.Authentication;
using tkpm_API.Services.Locations;
using tkpm_API.Services.VehicleTypes;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<AppDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("SqlServer"));
});

builder.Services.AddAuthorization();

builder.Services.AddAutoMapper(typeof(AutoMapperProfile));

builder.Services.AddCors();

// Bussiness Access Layer Services
builder.Services.AddScoped<IUserManager, UserManager>();
builder.Services.AddScoped<IVehicleTypeManager, VehicleTypeManager>();
builder.Services.AddScoped<ILocationManager, LocationManager>();
builder.Services.AddScoped<IAdminManager, AdminManager>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(options => options.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();
