using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Models
{
    public class LivroFilters
    {
        public int Page { get; set; }
        public int ItensPerPage { get; set; }
        public int SortBy { get; set; }
        public int SortByAsc { get; set; }
        public int Titulo { get; set; }
        public int Autor { get; set; }
    }
}
