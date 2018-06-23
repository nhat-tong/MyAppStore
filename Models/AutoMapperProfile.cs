using AutoMapper;
using MyStore.Data.Entities;

namespace MyStore.Models
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Customer, CustomerModel>()
                .ReverseMap();

            CreateMap<Address, AddressModel>()
                .ReverseMap();
        }
    }
}
