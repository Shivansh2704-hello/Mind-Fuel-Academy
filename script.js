
  // Toggle dropdown menu (Courses)
  function toggleDropdown(e) {
    e?.preventDefault(); // optional chaining to support non-event calls
    const dropdown = document.getElementById("courseDropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  }

  // Close dropdown if clicking outside
  window.addEventListener("click", function (e) {
    if (!e.target.matches(".dropbtn")) {
      const dropdown = document.getElementById("courseDropdown");
      if (dropdown) dropdown.style.display = "none";
    }
  });

  // Dummy function to simulate login check
  function isUserLoggedIn() {
    // Replace this with actual login logic (e.g., check localStorage/session)
    return false;
  }

  function handleCardClick(targetUrl) {
    if (isUserLoggedIn()) {
      window.location.href = targetUrl;
    } else {
      window.location.href = "diff-select.html"; // Login/Registration page
    }
  }

  // Assign click events to the cards (AFTER DOM is ready)
  document.addEventListener("DOMContentLoaded", function () {
    const recorded = document.getElementById("recorded");
    const live = document.getElementById("live");
    const test = document.getElementById("test");

    if (recorded)
      recorded.addEventListener("click", function (e) {
        e.preventDefault();
        handleCardClick("recorded.html"); // Replace with actual path
      });

    if (live)
      live.addEventListener("click", function (e) {
        e.preventDefault();
        handleCardClick("live.html"); // Replace with actual path
      });

    if (test)
      test.addEventListener("click", function (e) {
        e.preventDefault();
        handleCardClick("test.html"); // Replace with actual path
      });
  });

  // Login/Register form tab switch
  function showForm(type) {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const loginTab = document.getElementById("loginTab");
    const registerTab = document.getElementById("registerTab");

    if (type === 'login') {
      loginForm.classList.add("active");
      registerForm.classList.remove("active");
      loginTab.classList.add("active");
      registerTab.classList.remove("active");
    } else {
      loginForm.classList.remove("active");
      registerForm.classList.add("active");
      loginTab.classList.remove("active");
      registerTab.classList.add("active");
    }
  }

  // Phone icon click info box toggle
  function toggleInfo() {
    const box = document.getElementById("infoBox");
    box.style.display = box.style.display === "block" ? "none" : "block";
  }

  // Toggle mobile menu (if you add one)
  function toggleMobileMenu() {
    const menu = document.getElementById("navMenu");
    if (menu) {
      menu.classList.toggle("show");
    }
  }

