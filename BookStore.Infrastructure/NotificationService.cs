using BookStore.Application.Interfaces;
using BookStore.Application.Notifications.Models;
using System.Threading.Tasks;

namespace BookStore.Infrastructure
{
    public class NotificationService : INotificationService
    {
        public Task SendAsync(Message message)
        {
            return Task.CompletedTask;
        }
    }
}
