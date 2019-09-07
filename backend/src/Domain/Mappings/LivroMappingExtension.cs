using Domain.Entities;
using Domain.Entities.Dtos;

namespace Domain.Mappings
{
    public static class LivroMappingExtension
    {
        public static Livro ToEntity(this LivroDto dto)
        {
            return new Livro
            {
                Titulo = dto.Titulo,
                Generos = dto.Generos,
                DataPublicacao = dto.DataPublicacao,
                Paginas = dto.Paginas,
                Autor = dto.Autor,
                Editora = dto.Editora,
                Descricao = dto.Descricao,
                Sinopse = dto.Sinopse,
                UrlCapa = dto.UrlCapa,
                Links = dto.Links
            };
        }
    }
}
