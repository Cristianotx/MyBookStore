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

        public async Task<IEnumerable<Livro>> GetFiltered(string text, int page, int itensPerPage)
        {
            var skip = (page - 1) * itensPerPage;
            var filters = Builders<Livro>.Filter.Empty;

            if (!string.IsNullOrEmpty(text))
            {
                text = text.ToLower().Trim();
                filters = Builders<Livro>.Filter
                    .Where(x => x.Titulo.ToLower().Trim().Contains(text) ||
                           x.Autor.ToLower().Trim().Contains(text));
            }

            var data = DbSet.Find(filters).Skip(skip).Limit(itensPerPage);

            return await data.ToListAsync();
        }
    }
}
