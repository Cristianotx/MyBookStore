using System;
using System.Runtime.Serialization;

namespace Infrastructure.Data
{
    public abstract class Entity
    {
        public Guid Id { get; set; }
    }
}
