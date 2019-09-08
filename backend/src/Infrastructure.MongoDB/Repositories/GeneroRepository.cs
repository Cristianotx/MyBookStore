using Domain.Entities;
using Domain.Repositories;
using Infrastructure.MongoDB.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Infrastructure.MongoDB.Repositories
{
    public class GeneroRepository : BaseRepository<Genero>, IGeneroRepository
    {
        public GeneroRepository(IMongoContext context) : base(context)
        {
        }
    }
}
