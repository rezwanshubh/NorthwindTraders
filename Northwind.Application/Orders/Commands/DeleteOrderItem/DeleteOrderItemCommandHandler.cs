using MediatR;
using Northwind.Application.Exceptions;
using Northwind.Domain.Entities;
using Northwind.Persistence;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Northwind.Application.Orders.Commands.DeleteOrderItem
{
    public class DeleteOrderItemCommandHandler : IRequestHandler<DeleteOrderItemCommand>
    {
        private readonly NorthwindDbContext _context;

        public DeleteOrderItemCommandHandler(NorthwindDbContext context)
        {
            _context = context;
        }

        public async Task<Unit> Handle(DeleteOrderItemCommand request, CancellationToken cancellationToken)
        {
            var entity = await _context.OrderDetails.FindAsync(request.OrderId);

            if (entity == null)
            {
                throw new NotFoundException(nameof(OrderDetail), request.OrderId);
            }

            _context.OrderDetails.Remove(entity);

            await _context.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}
