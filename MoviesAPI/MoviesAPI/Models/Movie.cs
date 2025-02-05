﻿using System.Text.Json.Serialization;

namespace MoviesAPI.Models
{
    public class Movie
    {
        public string Title { get; set; } = string.Empty;
        public string Year { get; set; } = string.Empty;
        public string Poster { get; set; } = string.Empty;
        public string imdbID { get; set; } = string.Empty;
        public string Genre { get; set; } = string.Empty;

       
    }
}
