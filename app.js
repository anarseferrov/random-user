const btn = document.getElementById("generate");
btn.addEventListener("click", generate);

function generate() {
  let xhr = new XMLHttpRequest();
  let url = "https://randomuser.me/api/";
  xhr.open("GET", url, true);

  xhr.onload = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      display(this.responseText);
    } else {
      window.alert("Error: " + xhr.status);
    }
  };

  xhr.send();
}

function display(response) {
  const data = JSON.parse(response);
  const {
    name: { first },
    name: { last },
    name: { title },
    picture: { large },
    location: { state },
    dob: { age },
    phone,
    email,
    gender,
  } = data.results[0];
  document.getElementById("phone").textContent = phone;
  document.getElementById("email").textContent = email;
  document.getElementById("photo").src = large;
  document.getElementById("title").textContent = title;
  document.getElementById("first").textContent = first;
  document.getElementById("last").textContent = last;
  document.getElementById("gender").textContent = gender;
  document.getElementById("age").textContent = age;
  document.getElementById("location").textContent = state;
}
generate();
