// JavaScript code for post.html page

// Get the necessary elements
const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const submitButton = document.getElementById('comment-submit1');

// Add event listener to the submit button
submitButton.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Display a confirmation dialog
  if (confirm('Are you sure you want to submit this comment?')) {
    commentForm.submit(); // Submit the form
  } else {
    commentInput.value = ''; // Clear the comment input field
  }
});

