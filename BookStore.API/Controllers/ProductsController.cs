using System.Threading.Tasks;
using BookStore.Application.Products.Queries.GetAllProducts;
using Microsoft.AspNetCore.Mvc;

namespace BookStore.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : BaseController
    {
        // GET: api/products
        [HttpGet]
        public async Task<ActionResult<ProductsListViewModel>> GetAll()
        {
            return Ok(await Mediator.Send(new GetAllProductsQuery()));
        }
    }
}