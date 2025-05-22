function searchSite() {
  var query = document.getElementById("search").value.toLowerCase();

  if (query.includes("welcome")) {
    window.location.href = "index.html";
  } else if (query.includes("home")) {
    window.location.href = "home.html";
  } else if (query.includes("about")) {
    window.location.href = "about.html";
  } else if (query.includes("contact")) {
    window.location.href = "contact.html";
  } else if (query.includes("feedback")) {
    window.location.href = "feedback.html";
  } else if (query.includes("visual") || query.includes("images")) {
    window.location.href = "images.html";
  } else {
    alert("Page not found!");
  }
  return false;
}

/*feedback*/
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("feedbackform");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from reloading the page

    // Optionally collect form data here if needed

    // Redirect to thank you page
    window.location.href = "thanks.html";
  });
});

/*active navigation page highlight*/
document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop(); 
  const navLinks = document.querySelectorAll(".navbar a");

  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
});

