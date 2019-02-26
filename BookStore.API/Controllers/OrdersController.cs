using System.Threading.Tasks;
using BookStore.Application.Orders.Commands.DeleteOrderItem;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookStore.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : BaseController
    {
        // DELETE: api/orderItem
        [HttpDelete("delete/order-item")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> Delete(int orderId, int productId)
        {
            await Mediator.Send(new DeleteOrderItemCommand { OrderId =  orderId, ProductId = productId});

            return NoContent();
        }
    }
}