using Domain.Entities.Dtos;
using Domain.Mappings;
using Domain.Repositories;
using FluentValidation;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace Api.Controllers
{
    [Route("v1/livro")]
    public class LivroController : ControllerBase
    {
        private readonly ILivroRepository _livroRepository;
        private readonly IValidator<LivroDto> _validator;

        public LivroController(ILivroRepository livroRepository, IValidator<LivroDto> validator)
        {
            _livroRepository = livroRepository;
            _validator = validator;
        }


        [HttpGet("")]
        public async Task<IActionResult> Get(string texto, int page = 1, int itensPerPage = 12)
        {
            var result = await _livroRepository.GetFiltered(texto, page, itensPerPage);
            return Ok(result);
        }

        [HttpGet("{id:guid}", Name = "GetByID")]
        public async Task<IActionResult> Get(Guid id)
        {
            var result = await _livroRepository.GetById(id);

            if (result == null)
                return NotFound("Livro não encontrado.");

            return Ok(result);
        }

        [HttpPost("")]
        public async Task<IActionResult> Post([FromBody]LivroDto dto)
        {
            var validation = _validator.Validate(dto);
            if (!validation.IsValid)
            {
                throw new ArgumentException(string.Join(", ", validation.Errors));
            }

            var entity = dto.ToEntity();
            entity.Id = Guid.NewGuid();

            var createad = await _livroRepository.Add(entity);

            return Ok(createad);
        }

        [HttpPut("{id:guid}")]
        public async Task<IActionResult> Put(Guid id, [FromBody]LivroDto dto)
        {

            var validation = _validator.Validate(dto);
            if (!validation.IsValid)
            {
                throw new ArgumentException(string.Join(", ", validation.Errors));
            }

            var entity = dto.ToEntity();
            entity.Id = id;

            var updated = await _livroRepository.Update(entity);

            return Ok(updated);
        }

        [HttpDelete("{id:guid}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            await _livroRepository.Remove(id);
            return Ok();
        }
    }
}
