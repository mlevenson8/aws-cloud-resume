// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// Add your javascript here
$(document).ready(() => {
  $.post('https://qq01wfm9v6.execute-api.us-east-1.amazonaws.com/Prod/visit')
  .done(visitor_counter => {
      $('#loader').hide();
      $('#visits').text(Object.values(visitor_counter));
  })
  .fail(e => {
      console.log('Error');
      console.log(e);
  });
});