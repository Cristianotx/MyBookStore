using Domain.Entities;
using Domain.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;
using System.Threading.Tasks;

namespace Api.Controllers
{
    [Route("v1/arquivo")]
    [ApiController]
    public class ArquivoController : ControllerBase
    {
        private readonly IArquivoRepository _arquivoRepository;
        public ArquivoController(IArquivoRepository arquivoRepository)
        {
            _arquivoRepository = arquivoRepository;
        }


        [HttpPost("upload"), DisableRequestSizeLimit]
        public async Task<IActionResult> Post()
        {

            using (var ms = new MemoryStream())
            {
                IFormFile file = Request.Form.Files[0];
                file.CopyTo(ms);
                var fileBytes = ms.ToArray();

                var arquivo = new Arquivo
                {
                    Id = Guid.NewGuid(),
                    FileName = file.FileName,
                    ContentType = file.ContentType,
                    Bytes = fileBytes
                };


                var result = await _arquivoRepository.Add(arquivo);

                return Ok($"v1/arquivo/{arquivo.Id}");
            }

        }

        [HttpGet("{id:guid}")]
        public async Task<IActionResult> Get(Guid id)
        {
            var arquivo = await _arquivoRepository.GetById(id);
            if (arquivo == null) return NotFound();

            var stream = new MemoryStream(arquivo.Bytes);
            return new FileStreamResult(stream, arquivo.ContentType);
        }

    }
}