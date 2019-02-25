using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BookStore.Application.Orders.Queries.GetAllOrders;
using Microsoft.AspNetCore.Http;
using BookStore.Application.Orders.Commands.DeleteOrderItem;

namespace BookStore.WebUI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : BaseController
    {
        // GET: api/orders
        [HttpGet]
        public async Task<ActionResult<OrderPreviewDto>> GetAll()
        {
            return Ok(await Mediator.Send(new GetOrderPreviewQuery()));
        }

        // DELETE: api/order/deleteItem
        [HttpDelete("deleteItem")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> Delete(int orderId, int productId)
        {
            await Mediator.Send(new DeleteOrderItemCommand { OrderId = orderId, ProductId = productId });

            return NoContent();
        }
    }
}