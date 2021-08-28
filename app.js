//DOM elements
let newBtn = document.getElementById('add-New');
let addBtn = document.getElementById('submit');
let textBox = document.querySelector('.text-box');
let pinBoard = document.querySelector('.pin-board');


let showBox= () =>{
   //console.log("Working");
   textBox.style.display= "block";
}

let addThis= () =>{
   let name = document.getElementById('web-name');
   let url = document.getElementById('web-url');

   if (name.value === "" || url.value === ""){
      alert("Please Fill Out Fields");
   }else{
      //console.log("Nothing wrong.works");
   }

   let valueN= name.value;
   let valueU = url.value;

   //console.log(name.value);
   //console.log(url.value);

   name.value= "";
   url.value = " ";

   textBox.style.display = "none";

   create(valueN, valueU);
}

function create(name, url){
   console.log("Name is " + name);
   console.log("URL me is " + url);

   let pin= document.createElement("div");
   pin.className= 'pin';

   let namep = document.createElement("p");
   namep.id = 'name';

   let link= document.createElement("a");
   link.href = url;
   link.textContent= name;
   link.target = "_blank";

   let closeBtn= document.createElement("i");
   closeBtn.className = 'fas fa-times';
   closeBtn.id = 'close';
   closeBtn.setAttribute('onclick', "removeIt(this)");

   namep.appendChild(link);
   pin.appendChild(namep);
   pin.appendChild(closeBtn);   
   pinBoard.appendChild(pin);
}

function removeIt(el) {
   let valid= confirm("Are you sure you wann delete this?");
   if(valid===true){
      el.parentNode.remove();
   }else{
      console.log("Not valid");
   }
}

newBtn.addEventListener('click', showBox);
addBtn.addEventListener('click', addThis);