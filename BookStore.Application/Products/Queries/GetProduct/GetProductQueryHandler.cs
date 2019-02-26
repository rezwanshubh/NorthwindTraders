using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using BookStore.Application.Exceptions;
using BookStore.Domain.Entities;
using BookStore.Persistence;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace BookStore.Application.Products.Queries.GetProduct
{
    public class GetProductQueryHandler : IRequestHandler<GetProductQuery, ProductViewModel>
    {
        private readonly BookStoreDbContext _context;
        private readonly IMapper _mapper;

        public GetProductQueryHandler(BookStoreDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<ProductViewModel> Handle(GetProductQuery request, CancellationToken cancellationToken)
        {
            var product = _mapper.Map<ProductViewModel>(await _context
                .Products.Where(p => p.ProductId == request.Id)
                .SingleOrDefaultAsync(cancellationToken));

            if (product == null)
            {
                throw new NotFoundException(nameof(Product), request.Id);
            }

            // TODO: Set view model state based on user permissions.
            product.EditEnabled = true;
            product.DeleteEnabled = false;

            return product;
        }
    }
}
