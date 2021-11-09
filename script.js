const APIURL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

async function getUser(user) {
  const resp = await fetch(APIURL + user);
  const respData = await resp.jeson();

  createUserCard(respData);
}

function createUserCard(user) {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardHTML = `
<div class="card">
  <div>
    <img class="avatar" src="${user.avatar_url}" alt="${user.name}" />
  </div>
  <div class="user-info">
    <h2>${user.name}</h2>
    <p>${user.bio}</p>
    <ul class="info">
      <li>${user.followers}<strong>Followers</strong></li>
      <li>${user.following}<strong>Following</strong></li>
      <li>${user.public_repos}<strong>Repos</strong></li>
    </ul>
    <div id="repos"></div>
  </div>
</div>
`;

main.innerHTML = cardHTML;
}
