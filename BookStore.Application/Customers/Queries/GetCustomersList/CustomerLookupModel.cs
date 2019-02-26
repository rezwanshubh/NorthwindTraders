using AutoMapper;
using BookStore.Application.Interfaces.Mapping;
using BookStore.Domain.Entities;

namespace BookStore.Application.Customers.Queries.GetCustomersList
{
    public class CustomerLookupModel : IHaveCustomMapping
    {
        public string Id { get; set; }
        public string Name { get; set; }

        public void CreateMappings(Profile configuration)
        {
            configuration.CreateMap<Customer, CustomerLookupModel>()
                .ForMember(cDTO => cDTO.Id, opt => opt.MapFrom(c => c.CustomerId))
                .ForMember(cDTO => cDTO.Name, opt => opt.MapFrom(c => c.CompanyName));
        }
    }
}
