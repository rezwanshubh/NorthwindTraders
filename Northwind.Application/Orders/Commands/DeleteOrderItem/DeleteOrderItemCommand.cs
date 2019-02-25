using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace Northwind.Application.Orders.Commands.DeleteOrderItem
{
    public class DeleteOrderItemCommand : IRequest
    {
        public int OrderId { get; set; }
        public int ProductId { get; set; }
    }
}
