using Microsoft.EntityFrameworkCore;
using tkpm_API.Models;

namespace tkpm_API.Data
{
    public class AppDbContext : DbContext
    {
        protected readonly IConfiguration Configuration;

        public AppDbContext(DbContextOptions<AppDbContext> options, IConfiguration configuration) : base(options)
        {
            Configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(Configuration.GetConnectionString("SqlServer"));
        }

        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            #region User Data
            modelBuilder.Entity<User>().HasData(
                    new User
                    {
                        Id = 1,
                        FullName = "admin",
                        Address = "NVC",
                        PhoneNumber = "0123456789",
                        Email = "admin@gmail.com",
                        Username = "admin",
                        Password = "123",
                        RoleName = "admin",
                    }
                );
            #endregion
        }
    }
}
