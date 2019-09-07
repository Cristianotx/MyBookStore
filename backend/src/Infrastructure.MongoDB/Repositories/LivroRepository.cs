using Domain.Entities;
using Domain.Repositories;
using Infrastructure.MongoDB.Interfaces;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Infrastructure.MongoDB.Repositories
{
    public class LivroRepository : BaseRepository<Livro>, ILivroRepository
    {
        public LivroRepository(IMongoContext context) : base(context)
        {
        }

        public async Task<IEnumerable<Livro>> GetFiltered(string texto)
        {
            var filters = Builders<Livro>.Filter.Where(x => x.Titulo.Contains(texto) || x.Autor.Contains(texto));
            var data = await DbSet.FindAsync(filters);
            return await data.ToListAsync();
        }
    }
}
