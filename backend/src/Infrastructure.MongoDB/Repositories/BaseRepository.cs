
using Infrastructure.Data;
using Infrastructure.MongoDB.Interfaces;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Infrastructure.MongoDB.Repositories
{
    public abstract class BaseRepository<TEntity> : IRepository<TEntity> where TEntity : Entity
    {
        protected readonly IMongoContext Context;
        protected readonly IMongoCollection<TEntity> DbSet;

        protected BaseRepository(IMongoContext context)
        {
            Context = context;
            DbSet = Context.GetCollection<TEntity>(typeof(TEntity).Name);
        }

        public async Task<IEnumerable<TEntity>> GetAll()
        {
            var data = await DbSet.FindAsync(Builders<TEntity>.Filter.Empty);
            return await data.ToListAsync();
        }

        public async Task<TEntity> GetById(Guid id)
        {
            var data = await DbSet.FindAsync(Builders<TEntity>.Filter.Eq(x => x.Id, id));
            return data.SingleOrDefault();
        }

        public async Task<TEntity> Add(TEntity obj)
        {
            await DbSet.InsertOneAsync(obj);
            return obj;
        }

        public async Task<TEntity> Update(TEntity obj)
        {
            await DbSet.ReplaceOneAsync(p => p.Id == obj.Id, obj, new UpdateOptions
            {
                IsUpsert = true
            });
            return obj;

        }

        public async Task Remove(Guid id)
        {
            await DbSet.FindOneAndDeleteAsync(p => p.Id == id);
        }

        public void Dispose()
        {
            Context?.Dispose();
        }
    }
}
