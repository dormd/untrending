'use strict';
$(document).ready(() => {
  const updateCategories = categories => {
    $.ajax({
      method: 'PUT',
      url: '/api/profile',
      data: categories
    })
      .then(data => {
        console.log('Registered user');
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

$('#delete-account').on('click', event => {
    alert('You are about to delete you UnTrending account!');
    $.ajax({
      method: 'DELETE',
      url: '/api/delete-account'
    })
      .then(data => {
        console.log();
        console.log(`Deleted user`);
        console.log(data);
        const path = window.location.href.replace('/profile', '/');
        window.location.replace(path);
      })
      .catch(err => {
        console.log(err);
      });
  });

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
    updateCategories(categories);
    alert('Categories have been updated');
  });
});
