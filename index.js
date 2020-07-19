'use strict';

function getDogImage() {
  //let num = $('input[type=number]').val();
  let hound = $('#dog-breed').val();
  console.log(hound);

  fetch(`https://dog.ceo/api/breed/${hound}/images/random`)
    .then(response => response.json())
    .then(responseJson =>
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);

  //display array of images
  /* responseJson.forEach(image => {$('.results').append(
    `<img src=${image} class="results-img" alt="placeholder">`);
  }); */

  if (responseJson.status === 'error') {
    alert(`${responseJson.message}`);
  }
  else{ //replace the existing image with the new one
    $('.results-img').replaceWith(
      `<img src="${responseJson.message}" class="results-img">`);
    //display the results section
    $('.results').removeClass('hidden');}

}

function watchForm() {
  $('form').submit(event => {
    //$('.results').empty();
    event.preventDefault();
    getDogImage();
  });
}

$(function () {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});