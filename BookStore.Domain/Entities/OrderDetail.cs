using System;

namespace BookStore.Domain.Entities
{
    public class OrderDetail
    {
        public Int64 OrderId { get; set; }
        public Int64 ProductId { get; set; }
        public decimal UnitPrice { get; set; }
        public short Quantity { get; set; }
        public float Discount { get; set; }

        public Order Order { get; set; }
        public Product Product { get; set; }
    }
}
