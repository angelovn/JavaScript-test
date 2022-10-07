class Contact {
  constructor(firstName, lasName, phone, email) {
    this.firstName = firstName;
    this.lasName = lasName;
    this.phone = phone;
    this.email = email;
    this._online = false;
  }
  get online() {
    return this._online;
  }

  set online(v) {
    this._online = v;

    if (this.onlineDiv) {
      this.onlineDiv.className = this.online ? "title online" : "title";
    }
  }
  render(id) {
    this.template = document.createElement("article");
    this.onlineDiv = document.createElement("div");
    this.onlineDiv.classList.add("title");
    this.onlineDiv.innerHTML = `${this.firstName} ${this.lasName}`;
    this.onlineDiv.className = this.online ? "title online" : "title";
    this.infoBtn = document.createElement("button");
    this.infoBtn.innerHTML = "&#8505";
    this.infoDiv = document.createElement("div");
    this.infoDiv.classList.add("info");
    this.infoDiv.style.display = "none";
    this.infoDiv.innerHTML = `
    <span>&phone; ${this.phone}</span>
    <span>&#9993; ${this.email}</span>
    `;
    this.onlineDiv.appendChild(this.infoBtn);
    this.template.appendChild(this.onlineDiv);
    this.template.appendChild(this.infoDiv);
    let parent = document.getElementById(id);
    parent.appendChild(this.template);
    if (this.online) {
      this.onlineDiv.classList.add("online");
    } else {
      this.onlineDiv.classList.remove("online");
    }
    this.infoBtn.addEventListener("click", (e) => {
      if (this.infoDiv.style.display === "none") {
        this.infoDiv.style.display = "block";
      } else {
        this.infoDiv.style.display = "none";
      }
    });
  }
}
let contacts = [
  new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
  new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
  new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com"),
];
contacts.forEach((c) => c.render("main"));

// After 1 second, change the online status to true
setTimeout(() => (contacts[0].online = true), 2000);

// class Contact {
//   constructor(f, l, p, e) {
//     this.firstName = f;
//     this.lastName = l;
//     this.phone = p;
//     this.email = e;
//     this._online = false;
//   }

//   get online() {
//     return this._online;
//   }

//   set online(v) {
//     this._online = v;

//     if (this.onlineDiv) {
//       this.onlineDiv.className = this._online ? "title online" : "title";
//     }
//   }

//   eFactory(tag, content = "") {
//     const e = document.createElement(tag);
//     e.innerHTML = content;

//     return e;
//   }

//   render(id) {
//     this.template = this.eFactory("article");
//     this.onlineDiv = this.eFactory("div", `${this.firstName} ${this.lastName}`);
//     this.infoBtn = this.eFactory("button", "&#8505;");
//     this.infoDiv = this.eFactory(
//       "div",
//       `<span>&phone; ${this.phone}</span><span>&#9993; ${this.email}</span>`
//     );

//     this.onlineDiv.className = this.online ? "title online" : "title";
//     this.infoDiv.className = "info";
//     this.infoDiv.style.display = "none";

//     this.onlineDiv.appendChild(this.infoBtn);
//     this.template.appendChild(this.onlineDiv);
//     this.template.appendChild(this.infoDiv);

//     document.getElementById(id).appendChild(this.template);

//     this.infoBtn.addEventListener("click", () => {
//       this.infoDiv.style.display =
//         this.infoDiv.style.display === "none" ? "block" : "none";
//     });
//   }
// }
