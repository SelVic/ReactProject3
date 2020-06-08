import axios from 'axios';

const def = {api_key: '2934fb32a8f4aad4d39b02e619082aa3', language: 'ru-RU'};

const moviesApi = {
    getTopMovies: async (params) => {
        Object.assign(params, def);
        let response = await axios.get('https://api.themoviedb.org/3/movie/top_rated', {params});
        return response.data;
    },
    getMovieDetails: async (id) => {
        let response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {params: def});
        return response.data;
    },
    getSimilarMovies: async (id) => {
        let response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar`, {params: def});
        return response.data;
    }
};
export {moviesApi}