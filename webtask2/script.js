const getUsersBtn = document.querySelector(".get-users-btn");
const userGrid = document.getElementById("user-grid");
const loader = document.querySelector(".loader");

getUsersBtn.addEventListener("click", getUsers);

function getUsers() {
  showLoader();

  fetch("https://reqres.in/api/users?page=1")
    .then(response => response.json())
    .then(data => {
      hideLoader();
      renderUsers(data.data);
    })
    .catch(error => {
      hideLoader();
      console.log("Error:", error);
    });
}

function renderUsers(users) {
  userGrid.innerHTML = "";

  users.forEach(user => {
    const userCard = document.createElement("div");
    userCard.classList.add("user-card");
    
    const avatar = document.createElement("img");
    avatar.src = user.avatar;
    avatar.alt = user.first_name;
    avatar.classList.add("user-avatar");

    const name = document.createElement("h3");
    name.classList.add("user-name");
    name.textContent = `${user.first_name} ${user.last_name}`;

    const email = document.createElement("p");
    email.classList.add("user-email");
    email.textContent = user.email;

    userCard.appendChild(avatar);
    userCard.appendChild(name);
    userCard.appendChild(email);

    userGrid.appendChild(userCard);
  });
}

function showLoader() {
  loader.style.display = "block";
}

function hideLoader() {
  loader.style.display = "none";
}