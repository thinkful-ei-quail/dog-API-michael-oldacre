'use strict';

function getDogImage() {
  let num = $('input[type=number]').val();
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson.message))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  responseJson.forEach(image => {$('.results').append(
    `<img src=${image} class="results-img" alt="placeholder">`);
  });
  
  /* $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`); */
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    $('.results').empty();
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});