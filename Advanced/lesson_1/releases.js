// Write a Function named processReleaseData that processes the following movie release data:

// The Function should generate an Array of Objects that contain only the id and title key/value pairs. 
// You may assume that id and title, when existing, is an integer greater than 0 and non-empty string respectively. Here are the rules:

// Keep only releases that have both id and title property present.
// Keep only the id and title data for each release.

/*
Input: array of nested objects
Output: array of nested objects

Explicits:  - output array objects only contain id and title properties/values
            - id will be an integer > 0
            - title = non empty string
            - output array contains only the object that have both an id and title
Implicits:  - None

DS: arrays

Algorithm:
- Iterate through inputArray, creating a new array (filteredFilms)
    - Filter inputArray
        - if film.title && film.id are truthy, return those films
- Iterate through filteredFilms, creating a new array (processedReleases)
    - Map the array, returning only {title: film.title, film: film.id} for each film
- Returned processedReleases
*/



function processReleaseData(data) {
    let filteredFilms = data.filter(film => film.title && film.id);
    let processedFilms = filteredFilms.map(film => {
        let id = film.id;
        let title = film.title;
        return {'id': id, 'title': title};
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
      'id': 654356453,
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
  
  // should return:
//   [{ id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' }];