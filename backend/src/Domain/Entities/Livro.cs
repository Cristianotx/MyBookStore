using Infrastructure.Data;
using System;

namespace Domain.Entities
{
    public class Livro : Entity
    {
        public string Titulo { get; set; }
        public string[] Generos { get; set; }
        public DateTime DataPublicacao { get; set; }
        public int Paginas { get; set; }
        public string Autor { get; set; }
        public string Editora { get; set; }
        public string Descricao { get; set; }
        public string Sinopse { get; set; }
        public string UrlCapa { get; set; }
        public string[] Links { get; set; }

    }
}
