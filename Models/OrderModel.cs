﻿using System;
using System.Collections.Generic;

namespace MyStore.Models
{
    public class OrderModel
  {
    public DateTime OrderDate { get; set; }
    public string OrderNumber { get; set; }
    public ICollection<OrderItemModel> Items { get; set; }
  }

  public class OrderItemModel
  {
    public string GTINCode { get; set; }
    public double Price { get; set; }
    public double Quantity { get; set; }
    public double Discount { get; set; }
  }
}
