const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    params: {
      'api_key': API_KEY,
    },
  });
  
  async function getTrendingMoviesPreview() {
    const { data } = await api('trending/movie/day');
    const movies = data.results;
  
    movies.forEach(movie => {
      const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList')
      
      const movieContainer = document.createElement('div');
      movieContainer.classList.add('movie-container');
  
      const movieImg = document.createElement('img');
      movieImg.classList.add('movie-img');
      movieImg.setAttribute('alt', movie.title);
      movieImg.setAttribute(
        'src',
        'https://image.tmdb.org/t/p/w300' + movie.poster_path,
      );
  
      movieContainer.appendChild(movieImg);
      trendingPreviewMoviesContainer.appendChild(movieContainer);
    });
  }
  
  async function getCategoriesPreview() {
    const { data } = await api('genre/movie/list', {
        params: {
          language: 'es-ES', // Consider making language dynamic or configurable
        },
      }
    );
    const categories = data.genres;
    
    // Assuming 'previewCategoriesContainer' is the correct container element selected elsewhere
    // Clear previous categories
    previewCategoriesContainer.innerHTML = ''; 
  
    categories.forEach(category => {
      
      const categoryContainer = document.createElement('div');
      categoryContainer.classList.add('category-container');
  
      const categoryTitle = document.createElement('h3');
      categoryTitle.classList.add('category-title');
      categoryTitle.setAttribute('id', 'id' + category.id);
      const categoryTitleText = document.createTextNode(category.name);
  
      categoryTitle.appendChild(categoryTitleText);
      categoryContainer.appendChild(categoryTitle);
      previewCategoriesContainer.appendChild(categoryContainer);
    });
  }
  

  