using MediatR;
using Microsoft.EntityFrameworkCore;
using BookStore.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace BookStore.Application.Orders.Queries.GetAllOrders
{
    public class GetOrderPreviewQueryHandler : IRequestHandler<GetOrderPreviewQuery, List<OrderPreviewDto>>
    {
        private readonly NorthwindDbContext _context;

        public GetOrderPreviewQueryHandler(NorthwindDbContext context)
        {
            _context = context;
        }

        public Task<List<OrderPreviewDto>> Handle(GetOrderPreviewQuery request, CancellationToken cancellationToken)
        {          
            return _context.Orders
                .Select(OrderPreviewDto.Projection)
                .ToListAsync(cancellationToken);
        }
    }
}
