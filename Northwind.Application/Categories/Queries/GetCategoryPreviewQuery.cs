using System.Collections.Generic;
using MediatR;
using BookStore.Application.Categories.Models;

namespace BookStore.Application.Categories.Queries
{
    public class GetCategoryPreviewQuery : IRequest<List<CategoryPreviewDto>>
    {
        public int CategoryId { get; set; }
    }
}
