const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'fdc2986a7caf9ae6215371494e47f65f',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;