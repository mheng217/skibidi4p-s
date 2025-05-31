function addToFavorites() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  const recipeName = document.querySelector("h1")?.innerText || "Món ăn";
  const recipeImage =
    document.querySelector(".slide-image")?.getAttribute("src") || "";

  const exists = favorites.some((fav) => fav.name === recipeName);

  if (!exists) {
    favorites.push({ name: recipeName, image: recipeImage });
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert(`✅ '${recipeName}' đã được thêm vào mục yêu thích!`);
  } else {
    alert(`⚠️ '${recipeName}' đã có trong mục yêu thích!`);
  }
}

const recipeId = document.title.replace(/\s/g, "_").toLowerCase();
function submitComment() {
  const rating = document.querySelector('input[name="rating"]:checked');
  const commentText = document.getElementById("commentText").value.trim();

  if (!rating) {
    alert("Vui lòng chọn số sao để đánh giá!");
    return;
  }

  if (commentText === "") {
    alert("Vui lòng nhập bình luận của bạn!");
    return;
  }

  const username = localStorage.getItem("displayName") || "Người dùng ẩn danh";

  const newComment = {
    rating: parseInt(rating.value),
    text: commentText,
    timestamp: new Date().toLocaleString("vi-VN"),
    author: username,
  };

  const comments =
    JSON.parse(localStorage.getItem(`comments_${recipeId}`)) || [];
  comments.push(newComment);
  localStorage.setItem(`comments_${recipeId}`, JSON.stringify(comments));

  rating.checked = false;
  document.getElementById("commentText").value = "";

  displayComments();

  alert("Bình luận và đánh giá của bạn đã được gửi!");
}

function displayComments() {
  const commentsList = document.getElementById("commentsList");
  commentsList.innerHTML = "";

  const comments =
    JSON.parse(localStorage.getItem(`comments_${recipeId}`)) || [];

  if (comments.length === 0) {
    commentsList.innerHTML =
      '<p style="text-align: center; color: #888">Chưa có bình luận nào.</p>';
    return;
  }

  comments.forEach((comment) => {
    const commentItem = document.createElement("div");
    commentItem.classList.add("comment-item");

    const ratingDisplay = document.createElement("div");
    ratingDisplay.classList.add("rating-display");
    ratingDisplay.innerHTML = "&#9733;".repeat(comment.rating);

    const commentAuthor = document.createElement("strong");
    commentAuthor.textContent = `${comment.author || "Người dùng ẩn danh"} (${
      comment.timestamp
    })`;

    const commentText = document.createElement("p");
    commentText.textContent = comment.text;

    commentItem.appendChild(ratingDisplay);
    commentItem.appendChild(commentAuthor);
    commentItem.appendChild(commentText);
    commentsList.appendChild(commentItem);
  });
}

document.addEventListener("DOMContentLoaded", displayComments);

let currentSlide = 0;
const slides = document.querySelectorAll(".slide-image");
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
  });
  slides[index].classList.add("active");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

// Hiện slide đầu tiên
showSlide(currentSlide);

// Chuyển slide mỗi 3 giây
setInterval(nextSlide, 3000);
