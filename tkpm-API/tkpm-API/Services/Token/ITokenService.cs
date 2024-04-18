using tkpm_API.Entities;

namespace RedMangoAPI.Services
{
    public interface ITokenService
    {
        string CreateToken(User user);
    }
}
