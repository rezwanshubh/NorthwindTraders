using System.Threading.Tasks;
using BookStore.Application.Orders.Commands.CreateOrderItem;
using BookStore.Application.Orders.Commands.DeleteOrderItem;
using BookStore.Application.Orders.Queries.GetAllOrders;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookStore.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : BaseController
    {
        [Route("api/[controller]")]
        [ApiController]
        public class ProductsController : BaseController
        {
            // GET: api/products
            [HttpGet]
            public async Task<ActionResult<OrderPreviewDto>> GetAll()
            {
                return Ok(await Mediator.Send(new GetOrderPreviewQuery()));
            }
        }

        // POST api/orderItem
        [HttpPost("add/order-item")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> Create([FromBody]CreateOrderItemCommand command)
        {
            await Mediator.Send(command);

            return NoContent();
        }

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