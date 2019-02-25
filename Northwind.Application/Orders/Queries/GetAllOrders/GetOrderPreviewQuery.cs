using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace Northwind.Application.Orders.Queries.GetAllOrders
{
    public class GetOrderPreviewQuery : IRequest<List<OrderPreviewDto>>
    {
        
    }
}
