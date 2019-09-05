$(document).ready(function() {
  $('.name').hide();
  $('.name').fadeIn(2000);
  $('.navbar').hide();
  $('.navbar').fadeIn({
    queue: false,
    duration: 4000
  });
  $('.navbar').animate(
    {
      left: '45px'
    },
    2000
  );
});
