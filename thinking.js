// Get the form element
const form = document.getElementById("edi-form");

// Add a submit event listener to the form
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get the form inputs
  const companyName = document.getElementById("company-name").value;
  const websiteLink = document.getElementById("website-link").value;
  const twitterLink = document.getElementById("twitter-link").value;

  // Validate the form inputs
  if (!companyName || !websiteLink || !twitterLink) {
    alert("Please fill in all fields");
    return;
  }

  // Submit the form to the server-side for processing
  // You can use a library like axios or fetch to make the request
});
