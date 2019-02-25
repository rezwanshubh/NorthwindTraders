using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Northwind.Application.Orders.GetAllOrders;
using Northwind.Persistence;

namespace Northwind.Application.Orders.Queries.GetAllOrders
{
    public class GetAllOrdersQueryHandler : IRequestHandler<GetAllOrdersQuery, OrderDto>
    {
        private readonly NorthwindDbContext _context;
        private readonly IMapper _mapper;

        public GetAllOrdersQueryHandler(NorthwindDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public Task<OrderDto> Handle(GetAllOrdersQuery request, CancellationToken cancellationToken)
        {
            throw new System.NotImplementedException();
        }
    }    
}
