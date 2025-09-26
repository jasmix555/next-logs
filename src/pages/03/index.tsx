import React, { useEffect, useState } from "react";
import Image from "next/image";

const OMDB_API_KEY = "236ed38c";
const TOP_20_IMDB_IDS = [
    "tt0111161", // The Shawshank Redemption
    "tt0068646", // The Godfather
    "tt0071562", // The Godfather: Part II
    "tt0468569", // The Dark Knight
    "tt0050083", // 12 Angry Men
    "tt0108052", // Schindler's List
    "tt0167260", // The Lord of the Rings: The Return of the King
    "tt0110912", // Pulp Fiction
    "tt0060196", // The Good, the Bad and the Ugly
    "tt0137523", // Fight Club
    "tt0120737", // The Lord of the Rings: The Fellowship of the Ring
    "tt0109830", // Forrest Gump
    "tt1375666", // Inception
    "tt0167261", // The Lord of the Rings: The Two Towers
    "tt0080684", // Star Wars: Episode V - The Empire Strikes Back
    "tt0133093", // The Matrix
    "tt0099685", // Goodfellas
    "tt0073486", // One Flew Over the Cuckoo's Nest
    "tt0114369", // Se7en
    "tt0047478", // Seven Samurai
];

interface Movie {
    imdbID: string;
    Title: string;
    Genre: string;
    Runtime: string;
    Actors: string;
    Poster: string;
}

export default function TopMoviesPage() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchMovies() {
            try {
                const results: Movie[] = [];
                for (const imdbID of TOP_20_IMDB_IDS) {
                    const res = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${OMDB_API_KEY}`);
                    const data = await res.json();
                    if (data.Response === "True") {
                        results.push(data);
                    }
                }
                setMovies(results);
            } catch (err) {
                setError("Failed to fetch movie data");
            } finally {
                setLoading(false);
            }
        }
        fetchMovies();
    }, []);

    if (loading) return <div className="flex ">Loading top 20 movies...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div style={{ maxWidth: 1200, margin: "2rem auto", padding: "1rem" }}>
            <h1>Top 20 Movies (IMDB)</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
                {movies.map((movie) => (
                    <div key={movie.imdbID} style={{ border: "1px solid #eee", borderRadius: 8, padding: "1rem", background: "#fafafa" }}>
                        <Image src={movie.Poster} alt={movie.Title} width={200} height={300} style={{ borderRadius: 8 }} />
                        <h2 style={{ fontSize: "1.2rem", margin: "0.5rem 0" }}>{movie.Title}</h2>
                        <p><strong>Genre:</strong> {movie.Genre}</p>
                        <p><strong>Runtime:</strong> {movie.Runtime}</p>
                        <p><strong>Cast:</strong> {movie.Actors}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}