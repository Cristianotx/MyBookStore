using Domain.Entities;
using Domain.Repositories;
using Infrastructure.MongoDB.Interfaces;
using MongoDB.Driver;
using System.IO;
using System.Net;
using System.Threading.Tasks;
namespace Infrastructure.MongoDB.Repositories
{
    public class ArquivoRepository : BaseRepository<Arquivo>, IArquivoRepository
    {
        public ArquivoRepository(IMongoContext context) : base(context)
        {
        }
    }
}

