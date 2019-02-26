using MediatR;


namespace BookStore.Application.Orders.Commands.CreateOrderItem
{
    public class CreateOrderItemCommand : IRequest
    {
        public int OrderId { get; set; }
        public int ProductId { get; set; }
    }
}
