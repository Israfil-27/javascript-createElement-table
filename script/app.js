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

    const theadId= document.createElement("th")
    const theadName= document.createElement("th")
    const theadUsername= document.createElement("th")
    const theadEmail= document.createElement("th")
    const theadTel= document.createElement("th")
    const keys = Object.keys(users[0]);

    theadId.textContent=keys[0]
    theadName.textContent=keys[1]
    theadUsername.textContent=keys[2]
    theadTel.textContent=keys[5]
    theadEmail.textContent=keys[3]


    trHead.append(theadId,theadName,theadUsername,theadTel,theadEmail)
    users.forEach((users) => {
      


      const tr = document.createElement("tr");
      const id = document.createElement("td");
      const name = document.createElement("td");
      const username = document.createElement("td");
      const tel = document.createElement("td");
      const email = document.createElement("td");

      id.textContent = users.id;
      name.textContent = users.name;
      username.textContent = users.username;
      tel.textContent = users.phone;
      email.textContent = users.email;

      tr.append(id);
      tr.append(name);
      tr.append(username);
      tr.append(tel);
      tr.append(email);
      table.append(tr);
    });
    root.append(table);
  });


