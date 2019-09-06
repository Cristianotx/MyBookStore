using Domain.Entities.Dtos;
using FluentValidation;

namespace Domain.Validations
{
    public class LivroValidator : AbstractValidator<LivroDto>
    {
        public LivroValidator()
        {
            ConfigureRules();
        }

        public void ConfigureRules()
        {
            RuleFor(c => c)
                .Cascade(CascadeMode.StopOnFirstFailure);

            RuleFor(c => c.Titulo).NotNull().NotEmpty().MaximumLength(50);
            RuleFor(c => c.Generos).NotNull().NotEmpty();
            RuleFor(c => c.DataPublicacao).NotNull();
            RuleFor(c => c.Paginas).Must(c => c > 0).WithMessage("O número de páginas deve ser maior que zero");
            RuleFor(c => c.Autor).NotNull().NotEmpty().MaximumLength(200);
            RuleFor(c => c.Editora).NotNull().NotEmpty().MaximumLength(200);
            RuleFor(c => c.Descricao).NotNull().NotEmpty().MaximumLength(200);
            RuleFor(c => c.Sinopse).NotNull().NotEmpty();
            RuleFor(c => c.UrlCapa).NotNull().NotEmpty().MaximumLength(200);
            RuleFor(c => c.Links).NotNull().NotEmpty();
        }
    }
}
