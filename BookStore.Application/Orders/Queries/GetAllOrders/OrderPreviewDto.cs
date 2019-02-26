using BookStore.Application.Categories.Models;
using BookStore.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;

namespace BookStore.Application.Orders.Queries.GetAllOrders
{
    public class OrderPreviewDto
    {
        public OrderPreviewDto()
        {
            Products = new List<ProductPreviewDto>();
        }

        public int OrderId { get; set; }

        public string CustomerId { get; set; }

        public ICollection<ProductPreviewDto> Products { get; set; }

        public static Expression<Func<Order, OrderPreviewDto>> Projection
        {
            get
            {
                return c => new OrderPreviewDto
                {
                    
                    Products = c.Products.AsQueryable()
                        .Select(ProductPreviewDto.Projection)
                        .Take(5)
                        .OrderBy(p => p.ProductName)
                        .ToList()
                };
            }
        }
    }
}
