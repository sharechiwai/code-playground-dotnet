using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Threading.Tasks;

namespace code_playground.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UtilProxyController : ControllerBase
    {
        
        [Route("proxy")]
        public async Task<string> Index([FromQuery] string url)
        {
            using (HttpClient client = new HttpClient())
            {
                return await client.GetStringAsync(url);
            }
        }
    }
}