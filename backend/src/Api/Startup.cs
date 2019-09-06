
using Api.Middlewares;
using Domain.Entities.Dtos;
using Domain.Repositories;
using Domain.Validations;
using FluentValidation;
using Infrastructure.MongoDB.Context;
using Infrastructure.MongoDB.Interfaces;
using Infrastructure.MongoDB.Repositories;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Swashbuckle.AspNetCore.Swagger;

namespace Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }


        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();
            services.AddOptions();
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info { Title = "Api - Livro Store", Version = "v1" });
            });

            Register(services);
        }

        private void Register(IServiceCollection services)
        {
            services.AddScoped<IMongoContext, MongoContext>();
            services.AddScoped<ILivroRepository, LivroRepository>();
            services.AddScoped<IValidator<LivroDto>, LivroValidator>();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseCors("AllowSpecificOrigin");
            app.UseMiddleware(typeof(ErrorHandlingMiddleware));
            app.UseMvc();
            app.UseSwagger();

            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Api - Livro Store");
                c.RoutePrefix = string.Empty;
            });

        }
    }
}
