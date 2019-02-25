using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Northwind.Application.Orders.GetAllOrders;
using Northwind.Application.Orders.Queries.GetAllOrders;

namespace Northwind.WebUI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : BaseController
    {
        // GET: api/orders
        [HttpGet]
        public async Task<ActionResult<OrderDto>> GetAll()
        {
            return Ok(await Mediator.Send(new GetAllOrdersQuery()));
        }
    }
}