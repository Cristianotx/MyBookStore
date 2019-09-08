using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Api.Controllers
{
    [Route("v1/generos")]
    [ApiController]
    public class GenerosController : ControllerBase
    {

        [HttpGet("")]
        public IActionResult Get()
        {
            var generos = new List<string> {
                "Ação",
                "Ficção",
                "Romance",
                "Horror",
                "Terror",
                "Aventura",
                "Fantasia",
                "Drama",
                "Policial",
                "Política",
                "Espiritual",
                "Auto-ajuda",
                "Ciências"
            };
            return Ok(generos);
        }
    }
}