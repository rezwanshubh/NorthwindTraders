using BookStore.Persistence;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace BookStore.Application.Orders.Commands.CreateOrderItem
{
    public class CreateOrderItemCommandHandler : IRequestHandler<CreateOrderItemCommand>
    {
        private readonly BookStoreDbContext _context;

        public CreateOrderItemCommandHandler(BookStoreDbContext context)
        {
            _context = context;
        }

        public Task<Unit> Handle(CreateOrderItemCommand request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}
