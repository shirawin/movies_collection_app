using Microsoft.AspNetCore.Mvc;
using MoviesAPI.Services;
using MoviesAPI.Models;
using Microsoft.AspNetCore.Authorization;

namespace MoviesAPI.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class MoviesController : ControllerBase
    {
        private readonly MovieService _movieService;

        public MoviesController(MovieService movieService)
        {
            _movieService = movieService;
        }

        [HttpGet("search")]
        public async Task<IActionResult> SearchMovies(string query = "")
        {
            var movies = await _movieService.GetMoviesAsync();

            if (!string.IsNullOrWhiteSpace(query))
            {
                movies = movies.Where(m => m.Title.Contains(query, StringComparison.OrdinalIgnoreCase)).ToList();
            }

            return Ok(movies);
        }
    }
}
