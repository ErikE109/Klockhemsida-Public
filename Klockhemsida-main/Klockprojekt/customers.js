const companyDiv = document.getElementById("intro-customers");

function getData(url, cb) {
  fetch(url)
    .then((response) => response.json())
    .then((result) => cb(result));
}

getData("https://jsonplaceholder.typicode.com/users", (data) =>
  
  {
    for (let i = 0; i < data.length; i++) {
      const div = document.createElement("div");
      const h2 = document.createElement("h2");
      const p = document.createElement("p");
      const q = document.createElement("q");
      h2.textContent = data[i].company.name;
      q.textContent = data[i].company.catchPhrase;
      div.className = "company-div";
      h2.className = "company-title";
      q.className ="company-catchPhrase";
      div.appendChild(h2);
      div.appendChild(p);
      div.appendChild(q);
      companyDiv.appendChild(div);
    }
  }
);
