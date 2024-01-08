const root = document.createElement("root");
document.body.appendChild(root);
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((users) => {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const trHead=document.createElement("tr")
    table.append(thead)
    thead.append(trHead)
    const keys = Object.keys(users[0]);
    keys.forEach(el=>{
      const th1= document.createElement("th");
      th1.textContent=el
      trHead.append(th1)
    });

    users.forEach((users) => {
      const tr = document.createElement("tr");
      const id = document.createElement("td");
      const name = document.createElement("td");
      const username = document.createElement("td");
      const tel = document.createElement("td");
      const address= document.createElement("td");
      const email = document.createElement("td");
      const website = document.createElement("td");
      const company = document.createElement("td");

      id.textContent = users.id;
      name.textContent = users.name;
      username.textContent = users.username;
      tel.textContent = users.phone;
      address.textContent = users.address.city;
      email.textContent = users.email;
      website.textContent = users.website;
      company.textContent = users.company.name;
      tr.append(id,name,username,tel,address,email,website,company)
      table.append(tr);
    });
    root.append(table);
  });


