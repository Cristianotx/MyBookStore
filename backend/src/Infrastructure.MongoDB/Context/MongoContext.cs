using Infrastructure.MongoDB.Interfaces;
using Microsoft.Extensions.Configuration;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Conventions;
using MongoDB.Driver;
using System;

namespace Infrastructure.MongoDB.Context
{
    public class MongoContext: IMongoContext
    {
        private IMongoDatabase Database { get; set; }
        public MongoClient MongoClient { get; set; }

        public MongoContext(IConfiguration configuration)
        {

            BsonDefaults.GuidRepresentation = GuidRepresentation.CSharpLegacy;
            RegisterConventions();

            MongoClient = new MongoClient(configuration.GetSection("MongoSettings").GetSection("Connection").Value);
            Database = MongoClient.GetDatabase(configuration.GetSection("MongoSettings").GetSection("DatabaseName").Value);

        }

        private void RegisterConventions()
        {
            var pack = new ConventionPack
            {
                new CamelCaseElementNameConvention(),
                new LookupIdGeneratorConvention(),
                new IgnoreExtraElementsConvention(true)
            };

            ConventionRegistry.Register("camelCase", pack, t => true);
        }

        public IMongoCollection<T> GetCollection<T>(string name)
        {
            return Database.GetCollection<T>(name);
        }

        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }
    }
}

