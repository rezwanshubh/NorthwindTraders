using System.Threading;
using System.Threading.Tasks;
using MediatR;
using BookStore.Application.Exceptions;
using BookStore.Domain.Entities;
using BookStore.Persistence;

namespace BookStore.Application.Customers.Queries.GetCustomerDetail
{
    public class GetCustomerDetailQueryHandler : IRequestHandler<GetCustomerDetailQuery, CustomerDetailModel>
    {
        private readonly BookStoreDbContext _context;

        public GetCustomerDetailQueryHandler(BookStoreDbContext context)
        {
            _context = context;
        }

        public async Task<CustomerDetailModel> Handle(GetCustomerDetailQuery request, CancellationToken cancellationToken)
        {
            var entity = await _context.Customers
                .FindAsync(request.Id);

            if (entity == null)
            {
                throw new NotFoundException(nameof(Customer), request.Id);
            }

            return CustomerDetailModel.Create(entity);
        }
    }
}
