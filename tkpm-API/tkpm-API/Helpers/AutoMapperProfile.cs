using AutoMapper;
using tkpm_API.DTO.Response;
using tkpm_API.Entities;

namespace tkpm_API.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, LoginResponse>().ReverseMap();
            CreateMap<Location, LocationResponse>().ReverseMap();
            CreateMap<VehicleType, VehicleTypeResponse>().ReverseMap();
            CreateMap<Driver, DriverResponse>().ReverseMap();
        }
    }
}
