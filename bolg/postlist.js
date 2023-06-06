const trashIcons = document.querySelectorAll('.trash-icon');
const deleteModal = document.getElementById('delete-modal');
const noButton = document.getElementById('no-button');
const yesButton = document.getElementById('yes-button');

trashIcons.forEach(function(trashIcon) {
  trashIcon.addEventListener('click', function() {
    deleteModal.style.display = 'block';
    const post = this.closest('.post');
    yesButton.addEventListener('click', function() {
      post.remove();
      // Perform delete operation here
      deleteModal.style.display = 'none';
    });
  });
});

noButton.addEventListener('click', function() {
  deleteModal.style.display = 'none';
});
const dotsIcons = document.querySelectorAll('.dots-icon');

dotsIcons.forEach(function(dotsIcon) {
    dotsIcon.addEventListener('click', function() {
        window.location.href = 'post.html';
    });
});
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
document.getElementById('signup-link').addEventListener('click', function() {
  hideModal('signin-modal');
  showModal('signup-modal');
});