'use strict';
$(document).ready(() => {
  const registerUser = categories => {
    $.post('/api/categories', {
      categories
    })
      .then(data => {
        console.log('Registered user');
      })
      .catch(err => {
        console.log(err);
      });
  };
  
  $('#categories-submit').on('click', event => {
    event.preventDefault();
    const categories = {
      business: $('#business').prop('checked'),
      entertainment: $('#entertainment').prop('checked'),
      health: $('#health').prop('checked'),
      science: $('#science').prop('checked'),
      sports: $('#sports').prop('checked'),
      technology: $('#technology').prop('checked')
    };
    registerUser(categories);
    const path = window.location.href.replace('/signup', '/');
    window.location.replace(path);
  });

  
});