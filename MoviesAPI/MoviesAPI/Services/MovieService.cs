using System.Text.Json;
using MoviesAPI.Models;

namespace MoviesAPI.Services
{
    public class MovieService
    {
        private readonly HttpClient _httpClient;
        private const string MoviesUrl = "https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON";

        public MovieService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<List<Movie>> GetMoviesAsync()
        {
            var response = await _httpClient.GetStringAsync(MoviesUrl);
            var movies = JsonSerializer.Deserialize<List<Movie>>(response, new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            });

            foreach (var movie in movies ?? new List<Movie>())
            {
                if (!string.IsNullOrEmpty(movie.Poster) && movie.Poster.StartsWith("http://"))
                {
                    movie.Poster = movie.Poster.Replace("http://", "https://");
                }
            }

            return movies ?? new List<Movie>();
        }
    }
}
