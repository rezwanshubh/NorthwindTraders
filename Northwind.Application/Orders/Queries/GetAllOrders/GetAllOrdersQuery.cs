using MediatR;
using Northwind.Application.Orders.GetAllOrders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Northwind.Application.Orders.Queries.GetAllOrders
{
    public class GetAllOrdersQuery : IRequest<OrderDto>
    {
    }
}
