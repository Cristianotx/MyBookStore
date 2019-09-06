using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Text;

namespace Infrastructure.MongoDB.Interfaces
{
    public interface IMongoContext : IDisposable
    {
        IMongoCollection<T> GetCollection<T>(string name);
    }
}
