﻿using System.Threading;
using System.Threading.Tasks;
using MediatR;
using BookStore.Domain.Entities;
using BookStore.Persistence;

namespace BookStore.Application.Products.Commands.CreateProduct
{
    public class CreateProductCommandHandler : IRequestHandler<CreateProductCommand, int>
    {
        private readonly BookStoreDbContext _context;

        public CreateProductCommandHandler(BookStoreDbContext context)
        {
            _context = context;
        }

        public async Task<int> Handle(CreateProductCommand request, CancellationToken cancellationToken)
        {
            var entity = new Product
            {
                ProductName = request.ProductName,
                CategoryId = request.CategoryId,
                SupplierId = request.SupplierId,
                UnitPrice = request.UnitPrice,
                Discontinued = request.Discontinued
            };

            _context.Products.Add(entity);

            await _context.SaveChangesAsync(cancellationToken);

            return entity.ProductId;
        }
    }
}
