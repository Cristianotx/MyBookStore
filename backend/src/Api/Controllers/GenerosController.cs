using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.Entities;
using Domain.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("v1/generos")]
    [ApiController]
    public class GenerosController : ControllerBase
    {
        private readonly IGeneroRepository _generoRepository;

        public GenerosController(IGeneroRepository generoRepository)
        {
            _generoRepository = generoRepository;
        }

        [HttpPost("")]
        public async Task<IActionResult> Post([FromBody]string genero)
        {
            var model = new Genero
            {
                Id = Guid.NewGuid(),
                Nome = genero
            };
            var result = await _generoRepository.Add(model);
            return Ok(result);
        }


        [HttpGet("")]
        public async Task<IActionResult> Get()
        {
            var generos = await _generoRepository.GetAll();
            if (generos.Count() == 0)
            {
                throw new ArgumentException("Nenhum gênero cadastrado.");
            }
            return Ok(generos.Select(x => x.Nome));
        }
    }
}