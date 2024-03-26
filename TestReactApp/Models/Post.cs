using System;
namespace TestReactApp.Models
{
	public class Post
	{
		public int PostId { get; set; }
		public required string Title { get; set; }
		public required string Content { get; set; }
	}
}

