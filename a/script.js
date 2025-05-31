window.addEventListener("load", () => {
  document.fonts.ready.then(() => {
    const loading = document.getElementById("loading-screen");
    loading.classList.add("fade-out");

    setTimeout(() => {
      loading.style.display = "none";
      document.body.style.overflow = "auto";
    }, 1500);
  });
});

const toggle = document.querySelector(".js-menuToggle");
const menu = document.getElementById("mobileMenu");

toggle?.addEventListener("click", function () {
  menu.classList.toggle("open");
  this.classList.toggle("open");
});

const slides = document.querySelectorAll(".bg-slide");
let current = 0;

setInterval(() => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}, 4000);

// Toggle dropdown
function toggleUserDropdown() {
  const dropdown = document.getElementById("userDropdown");
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
}

// Ẩn dropdown khi click ra ngoài
document.addEventListener("click", function (e) {
  const avatar = document.querySelector(".avatar-circle");
  const dropdown = document.getElementById("userDropdown");
  if (!avatar.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.style.display = "none";
  }
});

// Cập nhật UI theo trạng thái đăng nhập
window.addEventListener("DOMContentLoaded", () => {
  const email = localStorage.getItem("loggedInUser");
  const displayName = localStorage.getItem("displayName");

  if (email && displayName) {
    // Gán tên người dùng
    document.getElementById(
      "dropdown-username"
    ).textContent = `👋 ${displayName}`;

    // Hiển thị các mục cho người đã đăng nhập
    document.getElementById("link-logout").style.display = "block";
    document.getElementById("link-fav").style.display = "block";

    // Ẩn nút đăng nhập, đăng ký
    document.getElementById("link-login").style.display = "none";
    document.getElementById("link-signup").style.display = "none";
  }
});

function logout() {
  localStorage.removeItem("loggedInUser");
  localStorage.removeItem("displayName");
  alert("Bạn đã đăng xuất.");
  window.location.href = "index.html";
}

window.addEventListener("load", () => {
  const email = localStorage.getItem("loggedInUser");
  const name = localStorage.getItem("displayName");

  const mobileAccount = document.getElementById("mobileAccountName");
  const loginMobile = document.getElementById("mobileLogin");
  const signupMobile = document.getElementById("mobileSignup");
  const logoutMobile = document.getElementById("mobileLogout");
  const mobileFav = document.getElementById("mobileFav");

  const loginDesktop = document.getElementById("link-login");
  const signupDesktop = document.getElementById("link-signup");
  const logoutDesktop = document.getElementById("link-logout");
  const favDesktop = document.getElementById("link-fav");
  const dropdownUser = document.getElementById("dropdown-username");

  if (email && name) {
    if (mobileAccount) {
      mobileAccount.style.display = "block";
      mobileAccount.innerText = `👋 ${name}`;
    }
    if (loginMobile) loginMobile.style.display = "none";
    if (signupMobile) signupMobile.style.display = "none";
    if (logoutMobile) logoutMobile.style.display = "block";
    if (mobileFav) mobileFav.style.display = "block";

    if (loginDesktop) loginDesktop.style.display = "none";
    if (signupDesktop) signupDesktop.style.display = "none";
    if (logoutDesktop) logoutDesktop.style.display = "block";
    if (favDesktop) favDesktop.style.display = "block";
    if (dropdownUser) dropdownUser.textContent = `👋 ${name}`;
  } else {
    if (mobileAccount) mobileAccount.style.display = "none";
    if (loginMobile) loginMobile.style.display = "block";
    if (signupMobile) signupMobile.style.display = "block";
    if (logoutMobile) logoutMobile.style.display = "none";
    if (mobileFav) mobileFav.style.display = "none";

    if (loginDesktop) loginDesktop.style.display = "block";
    if (signupDesktop) signupDesktop.style.display = "block";
    if (logoutDesktop) logoutDesktop.style.display = "none";
    if (favDesktop) favDesktop.style.display = "none";
    if (dropdownUser) dropdownUser.textContent = "Tài khoản";
  }
});
