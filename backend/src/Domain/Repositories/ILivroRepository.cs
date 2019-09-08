using Domain.Entities;
using Infrastructure.Data;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Domain.Repositories
{
    public interface ILivroRepository : IRepository<Livro>
    {
        Task<IEnumerable<Livro>> GetFiltered(string text, int page, int itensPerPage);
    }
}
