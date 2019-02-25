using BookStore.Application.Notifications.Models;
using System.Threading.Tasks;

namespace BookStore.Application.Interfaces
{
    public interface INotificationService
    {
        Task SendAsync(Message message);
    }
}
