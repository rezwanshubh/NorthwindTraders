using System;
using System.Collections.Generic;
using System.Text;

namespace Northwind.Application.Orders.GetAllOrders
{
    public class OrderDto
    {
        public int OrderId { get; set; }
        public string CustomerId { get; set; }
    }
}
