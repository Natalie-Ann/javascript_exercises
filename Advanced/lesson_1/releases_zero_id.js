function processReleaseData(data) {
    let filteredFilms = data.filter(film => film.title && (film.id || film.id === 0));
    let processedFilms = filteredFilms.map(film => {
        return {'id': film.id, 'title': film.title};
    });
    console.log(processedFilms);
  }

let newReleases = [
    {
      'id': 70111470,
      'title': 'Die Hard',
      'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
      'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
      'rating': [4.0],
      'bookmark': [],
    },
    {
      'id': 0,
      'title': 'Practice',
      'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
      'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
      'rating': [5.0],
      'bookmark': [{ id:432534, time:65876586 }],
    },
    {
      'title': 'The Chamber',
      'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
      'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
      'rating': [4.0],
      'bookmark': [],
    },
    {
      'id': 675465,
      'title': 'Fracture',
      'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
      'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
      'rating': [5.0],
      'bookmark': [{ id:432534, time:65876586 }],
    },
  ];
  
processReleaseData(newReleases);
  