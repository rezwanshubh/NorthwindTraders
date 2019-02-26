using System;
using System.Linq.Expressions;
using BookStore.Domain.Entities;

namespace BookStore.Application.Categories.Models
{
    public class ProductPreviewDto
    {
        public Int64 ProductId { get; set; }

        public string ProductName { get; set; }

        public decimal? UnitPrice { get; set; }

        public static Expression<Func<Product, ProductPreviewDto>> Projection
        {
            get
            {
                return p => new ProductPreviewDto
                {
                    ProductId = p.ProductId,
                    ProductName = p.ProductName,
                    UnitPrice = p.UnitPrice
                };
            }
        }
    }
}
