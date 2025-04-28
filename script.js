function searchSite() {
  var query = document.getElementById("search").value.toLowerCase();

  if (query.includes("home")) {
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
