// main body Creation
let headCr = document.createElement("Header");
let contCr = document.createElement("div");
let footCr = document.createElement("footer");
contCr.className = "content";
document.body.append(headCr);
document.body.append(contCr);
document.body.append(footCr);
document.body.style.cssText = "margin:0";

// Header work
let logoName = document.createElement("span");
logoName.classList.add("logo");
let navButtons = document.createElement("div");
let navHome = document.createElement("li");
navHome.classList.add("nav");
let navAbout = document.createElement("li");
navAbout.classList.add("nav");
let navService = document.createElement("li");
navService.classList.add("nav");
let navContact = document.createElement("li");
navContact.classList.add("nav");

logoName.innerText = "Ellogo";
navHome.innerText = "Home";
navAbout.innerText = "About";
navService.innerText = "Service";
navContact.innerText = "Contact";

navButtons.append(navHome);
navButtons.append(navAbout);
navButtons.append(navService);
navButtons.append(navContact);

headCr.append(logoName);
headCr.append(navButtons);

headCr.style.cssText =
  "display: flex; justify-content: space-between; padding: 15px 10px";
navButtons.style.cssText =
  "list-style: none; display: flex; justify-content: center; align-items: center; margin: 5px; margin-right: 10px";
logoName.style.cssText =
  "font-size: 20px ; margin:5px; margin-left: 10px; font-weight: Bold; color: darkGreen";
navHome.style.cssText = "margin-right: 10px";
navAbout.style.cssText = "margin-right: 10px";
navService.style.cssText = "margin-right: 10px";

// Content work

for (i = 0; i < 15; i++) {
  let productBox = document.createElement("div");
  let prodTitle = document.createElement("h3");
  let prodInfo = document.createElement("p");
  prodTitle.id = `product_${i + 1}`;
  prodInfo.id = `productinfo_${i + 1}`;
  productBox.classList.add(`product`);
  productBox.id = `product_${i + 1}`;
  prodTitle.innerText = `Product ${i + 1}`;
  prodInfo.innerText = `About Product ${i + 1}`;
  productBox.appendChild(prodTitle);
  productBox.appendChild(prodInfo);
  contCr.appendChild(productBox);
}
contCr.style.cssText =
  "display: grid; grid-template-columns: 1fr 1fr 1fr; text-align: center; background-color: hsl(0deg 0% 92.55%); gap: 10px; padding :20px 10px; margin:0";

let productBoxStyle = document.querySelectorAll(".product");
productBoxStyle.forEach((product) => {
  product.style.cssText =
    "border: 1.5px solid hsl(0deg 0% 90.2%) ;border-radius: 6px; background-color: white; ";
});

// footer work
footCr.classList.add("footer");
let copyPara = document.createElement("p");
copyPara.classList.add("copyrights");
copyPara.innerText = `Copyrights 2023`;
footCr.appendChild(copyPara);
footCr.style.cssText =
  "background-color: hsl(153.58deg 65.69% 40%); padding:px; text-align: center; font-weight: bold; font-size: 15px";
copyPara.style.cssText = "color: white; margin: 0 ; padding: 20px";
