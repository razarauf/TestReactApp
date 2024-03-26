using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TestReactApp.Data;
using TestReactApp.Models;

namespace TestReactApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PostsController : ControllerBase
    {
        private ApplicationDbContext context;

        public PostsController (ApplicationDbContext _context)
        {
            context = _context;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<Post> Get()
        {
            List<Post> posts = context.Posts.ToList();
            return posts;
        }

        /**
        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
        **/
    }
}

