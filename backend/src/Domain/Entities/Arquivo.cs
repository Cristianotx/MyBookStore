using Infrastructure.Data;
using Microsoft.AspNetCore.Http;
using System;
using System.IO;
using System.Threading;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Arquivo : Entity
    {
        public string ContentType { get; set; }
        public string FileName { get; set; }
        public byte[] Bytes { get; set; }
    }
}
