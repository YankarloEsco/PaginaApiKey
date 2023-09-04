const APIKEY = "393dc938faf4a9a228d55422da8c2164"; //Colocar el APIKEY
const baseUrl = "https://api.themoviedb.org/3"; //URL De la base de datos

function cargarGeneros(){
    const idioma = document.getElementById('Lenguajes').value; 
    const generosSelect = document.getElementById('Generos'); // Obtener el elemento select
    const peliculasContainer = document.getElementById('contendorPeliculas'); // Obtener el elemento contendor
    
    console.log(idioma);
        const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTNkYzkzOGZhZjRhOWEyMjhkNTU0MjJkYThjMjE2NCIsInN1YiI6IjY0ZWE3OWU5ODM5MDE4MDBlNWQwNTdjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rCOgXoDv5kuoy-_LTNUBqN-qdbttpFQu5yG4MA0QeGI'
        }
      };
      
      fetch(`https://api.themoviedb.org/3/genre/movie/list?language=${idioma}`, options)
        .then(response => response.json())
        .then(data => {      
            // Limpiar el combo box antes de agregar opciones nuevas
            generosSelect.innerHTML = '';
            
            // Iterar sobre los géneros y crear opciones    
            data.genres.forEach(genero => {
              const opcion = document.createElement('option');
              opcion.value = genero.id;
              opcion.textContent = genero.name;
      
              // Agregar la opción al combobox
              generosSelect.appendChild(opcion);
            });
          })
        .catch(err => console.error(err));
}

function cargarPeliculas(){
    const idioma = document.getElementById('Lenguajes').value; 
    const peliculasContainer = document.getElementById('contendorPeliculas'); // Obtener el elemento contendor
    
    console.log(idioma);
        const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTNkYzkzOGZhZjRhOWEyMjhkNTU0MjJkYThjMjE2NCIsInN1YiI6IjY0ZWE3OWU5ODM5MDE4MDBlNWQwNTdjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rCOgXoDv5kuoy-_LTNUBqN-qdbttpFQu5yG4MA0QeGI'
        }
      };
      
      fetch(`https://api.themoviedb.org/3/movie/popular?language=${idioma}&page=1`, options)
        .then(response => response.json())
        .then(data => {
            // Limpiar el contenedor antes de agregar películas nuevas
            peliculasContainer.innerHTML = '';
      
            // Iterar sobre las películas y mostrar información
            data.results.forEach(pelicula => {
              const peliculaDiv = document.createElement('div');
              peliculaDiv.classList.add('pelicula');
      
              // Crear elementos para la imagen, título y descripción
              const imagen = document.createElement('img');
              imagen.src = `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`;
              imagen.alt = pelicula.title;
      
              const titulo = document.createElement('h2');
              titulo.textContent = pelicula.title;
      
              const descripcion = document.createElement('p');
              descripcion.textContent = pelicula.overview;
      
              // Agregar elementos al contenedor de películas
              peliculaDiv.appendChild(imagen);
              peliculaDiv.appendChild(titulo);
              peliculaDiv.appendChild(descripcion);
      
              peliculasContainer.appendChild(peliculaDiv);
            });
          })
        .catch(err => console.error(err));
}
