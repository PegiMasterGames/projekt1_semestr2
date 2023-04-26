document.getElementById('myButton').addEventListener('click', function() {
  var output = document.getElementById('output');
  var comments = ['BRAWO!', 'ŚWIETNIE!', 'DOSKONALE!', 'SUPER!', 'FANTASTYCZNIE!'];
  var randomIndex = Math.floor(Math.random() * comments.length);
  var randomComment = comments[randomIndex];

  // Stylowanie przycisku
  var button = document.getElementById('myButton');
  button.style.textDecoration = 'underline';
  button.style.fontWeight = 'bold';
  button.style.color = 'red';

  // Stylowanie komentarza
  output.textContent = randomComment;
  output.style.textDecoration = 'underline';
  output.style.fontWeight = 'bold';
  output.style.color = 'red';
});