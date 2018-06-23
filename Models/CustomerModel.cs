using System.ComponentModel.DataAnnotations;

namespace MyStore.Models
{
    public class CustomerModel
  {
    [Required]
    [MinLength(5)]
    public string Name { get; set; }
    [Required]
    public string Phone { get; set; }
    public AddressModel Address { get; set; }

  }
}
