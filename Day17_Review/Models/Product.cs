using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Day17_Review.Models
{
    public class Product
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Product name is required")]
        public string Name { get; set; }

        // Full property for Price
        private decimal _price;
        public decimal Price
        {
            get { return _price; }
            set {
                if (value < 0) value = 0;
                _price = value;
            }
        }


    }
}