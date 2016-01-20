using Day17_Review.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Day17_Review.API
{
    public class ProductsController : ApiController
    {
        static List<Product> _products = new List<Product>
        {
            new Product { Id = 1, Name = "Laptop", Price = 650m},
            new Product { Id = 2, Name = "Cellphone", Price = 700m },
            new Product { Id = 3, Name = "Yeti Microphone", Price = 172.99m }
        };

        public IHttpActionResult Get()
        {
            if (!ModelState.IsValid)
            {
                return NotFound();
            }

            return Ok(_products);
        }

        public IHttpActionResult Get(int id)
        {
            var product = _products.Find(p => p.Id == id);

            if(product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }

        public IHttpActionResult Post(Product product)
        {
            product.Id = _products.Count + 1;
            if(!ModelState.IsValid)
            {
                return BadRequest();
            }

            _products.Add(product);
            return Ok(product);
        }

    }
}
