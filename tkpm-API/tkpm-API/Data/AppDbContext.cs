using Microsoft.EntityFrameworkCore;
using tkpm_API.Entities;

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
        public DbSet<Role> Roles { get; set; }
        public DbSet<Driver> Drivers { get; set; }
        public DbSet<VehicleType> VehicleTypes { get; set; }
        public DbSet<Location> Locations { get; set; }
        public DbSet<Trip> Trips { get; set; }
        public DbSet<Bill> Bills { get; set; }
        public DbSet<OperatedTrip> OperatedTrips { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            #region Keys
            modelBuilder.Entity<User>().HasKey(u => u.Id);
            modelBuilder.Entity<Role>().HasKey(u => u.Id);
            modelBuilder.Entity<VehicleType>().HasKey(u => u.Id);
            modelBuilder.Entity<Location>().HasKey(u => u.Id);
            modelBuilder.Entity<Trip>().HasKey(u => u.Id);
            modelBuilder.Entity<Bill>().HasKey(u => u.Id);
            modelBuilder.Entity<OperatedTrip>().HasKey(u => u.Id);
            #endregion

            #region Relationships
            modelBuilder.Entity<Driver>()
                        .ToTable(
                            "Drivers", 
                            tableBuilder => tableBuilder
                                .Property(driver => driver.Id)
                                .HasColumnName("DriverId")
                        );

            modelBuilder.Entity<User>()
                        .HasOne(u => u.Role)
                        .WithMany(u => u.Users)
                        .HasForeignKey(u => u.RoleId);

            modelBuilder.Entity<Driver>()
                        .HasOne(d => d.VehicleType)
                        .WithMany(vt => vt.Drivers)
                        .HasForeignKey(d => d.RegisterVehicleId);

            modelBuilder.Entity<Driver>()
                        .HasOne(d => d.Location)
                        .WithMany(l => l.Drivers)
                        .HasForeignKey(d => d.RegisterLocationId);

            modelBuilder.Entity<Trip>()
                        .HasOne(t => t.Customer)
                        .WithMany(u => u.Trips)
                        .HasForeignKey(t => t.CustomerId)
                        .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Trip>()
                        .HasOne(t => t.VehicleType)
                        .WithMany(vt => vt.Trips)
                        .HasForeignKey(t => t.VehicleTypeId)
                        .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Bill>()
                        .HasOne(b => b.Trip)
                        .WithOne(t => t.Bill)
                        .HasForeignKey<Bill>(b => b.TripId);

            modelBuilder.Entity<OperatedTrip>()
                        .HasOne(ot => ot.VehicleType)
                        .WithMany(l => l.OperatedTrips)
                        .HasForeignKey(ot => ot.VehicleTypeId);
            #endregion

            #region Data
            modelBuilder.Entity<Role>().HasData(
                    new Role
                    {
                        Id = 1,
                        Name = "ADMIN"
                    },

                    new Role
                    {
                        Id = 2,
                        Name = "CUSTOMER"
                    },

                    new Role
                    {
                        Id = 3,
                        Name = "DRIVER"
                    },

                    new Role
                    {
                        Id = 4,
                        Name = "OPERATOR"
                    }
                );

            modelBuilder.Entity<User>().HasData(
                    new User
                    {
                        Id = 1,
                        FullName = "admin",
                        Address = "NVC",
                        PhoneNumber = "0123456789",
                        IdentityCard = "079212345678",
                        Email = "admin@gmail.com",
                        Username = "admin",
                        Password = "123",
                        RoleId = 1,
                    }
                );

            modelBuilder.Entity<VehicleType>().HasData(
                    new VehicleType
                    {
                        Id = 1,
                        Name = "Motor Bike",
                    },
                    new VehicleType
                    {
                        Id = 2,
                        Name = "Car",
                    }
                );

            modelBuilder.Entity<Location>().HasData(
                    new Location
                    {
                        Id = 1,
                        Name = "HCM",
                    }
                );
            #endregion
        }
    }
}
