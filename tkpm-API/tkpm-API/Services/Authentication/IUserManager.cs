using tkpm_API.DTO.Request;
using tkpm_API.DTO.Response;
using tkpm_API.Entities;

namespace tkpm_API.Services.Authentication
{
    public interface IUserManager
    {
        Task<LoginResponse?> GetLoginUser(string username, string password);
        Task<User?> GetRegisterUser(string username, string email);

        Task CreateCustomer(RegisterRequest request);
        Task CreateDriver(RegisterDriverRequest request);
    }
}
