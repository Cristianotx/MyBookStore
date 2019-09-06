using Domain.Entities;
using Domain.Repositories;
using Infrastructure.MongoDB.Interfaces;

namespace Infrastructure.MongoDB.Repositories
{
    public class LivroRepository : BaseRepository<Livro>, ILivroRepository
    {
        public LivroRepository(IMongoContext context) : base(context)
        {
        }
    }
}
