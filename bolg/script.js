//document.getElementById("ALL POST-btn").addEventListener("click", function() {
    // Perform sign up logic
    //alert("All Post button clicked!");
 // });
  
 // document.getElementById("CREAT POST-btn").addEventListener("click", function() {
    // Perform sign in logic
   // alert("Creat Post  button clicked!");
 // });

  document.getElementById("option1-btn").addEventListener("click", function() {
    document.querySelector(".signup").classList.remove("invisible");
  });
  
  document.getElementById("signup-close").addEventListener("click", function() {
    document.querySelector(".signup").classList.add("invisible");
  });
  function showModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = 'block';
  }
  
  // Function to hide the modal
  function hideModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = 'none';
  }
  
  // Event listeners to show/hide the sign-up and sign-in modals
  document.getElementById('option1-btn').addEventListener('click', function() {
    showModal('signup-modal');
  });
  
  document.getElementById('option2-btn').addEventListener('click', function() {
    showModal('signin-modal');
  });
  
  document.getElementById('signup-close').addEventListener('click', function() {
    hideModal('signup-modal');
  });
  
  document.getElementById('signin-close').addEventListener('click', function() {
    hideModal('signin-modal');
  });
  const createPostButton = document.getElementById('CREAT POST-btn');

// Get the modal element
const createPostModal = document.getElementById('createpost-modal');

// Get the close button element in the modal
const createPostCloseButton = document.getElementById('createpost-close');

// Add event listener to the "Create Post" button to open the modal
createPostButton.addEventListener('click', () => {
  createPostModal.style.display = 'block';
});

// Add event listener to the close button in the modal to close it
createPostCloseButton.addEventListener('click', () => {
  createPostModal.style.display = 'none';
});
document.getElementById('signup-link').addEventListener('click', function() {
    hideModal('signin-modal');
    showModal('signup-modal');
  });
  
  