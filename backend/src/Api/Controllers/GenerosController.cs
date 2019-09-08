using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("v1/generos")]
    [ApiController]
    public class GenerosController : ControllerBase
    {

        [HttpGet]
        public IActionResult Get() {
            var generos = new List<string>
            {
                "Ação",
                "Ficção",
                "Fantasia",
                "Romance",
                "Drama",
                "Tecnologia"
            };
            return Ok(generos);
        }
    }
}