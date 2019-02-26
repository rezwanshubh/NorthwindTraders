using Microsoft.EntityFrameworkCore;
using BookStore.Persistence.Infrastructure;

namespace BookStore.Persistence
{
    public class BookStoreDbContextFactory : DesignTimeDbContextFactoryBase<BookStoreDbContext>
    {
        protected override BookStoreDbContext CreateNewInstance(DbContextOptions<BookStoreDbContext> options)
        {
            return new BookStoreDbContext(options);
        }
    }
}
