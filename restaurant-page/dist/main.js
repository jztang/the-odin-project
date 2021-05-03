(()=>{"use strict";const e=e=>{const t=document.createElement("div");t.id="content";const n=document.createElement("div");return n.classList.add("content-title"),n.textContent=e,t.appendChild(n),t},t=()=>{const e=document.querySelectorAll(".crumb a");for(let t of e)t.classList.remove("yellow")},n=(e,t,n)=>{const o=document.createElement("div");o.classList.add("menu-item");const a=document.createElement("div");a.classList.add("item-name"),a.textContent=e,o.appendChild(a);const d=document.createElement("div");d.classList.add("item-desc"),d.textContent=t,o.appendChild(d);const i=document.createElement("div");return i.classList.add("item-price"),i.textContent=n,o.appendChild(i),o},o=()=>{t(),document.querySelector("#tab-about a").classList.add("yellow");const n=e("About Us"),o=document.createElement("div");o.id="content-about";const a=document.createElement("img");a.src="../img/ramen.jpeg",o.appendChild(a);const d=document.createElement("p");d.textContent="We make our own authentic noodles, using techniques straight from Japan. Our dream is to create a laid-back environment that satisfies everyone's ramen cravings.",o.appendChild(d);const i=document.createElement("br");o.appendChild(i);const c=document.createElement("p");c.textContent="Using only fresh ingredients, we make each bowl with love. Come indulge in the flavors of Japan, right in the heart of downtown New York!",o.appendChild(c),n.appendChild(o),document.querySelector("#container").appendChild(n)},a=()=>{t(),document.querySelector("#tab-menu a").classList.add("yellow");const o=e("Menu"),a=document.createElement("div");a.id="content-menu";const d=document.createElement("div");d.classList.add("menu-title"),d.textContent="- RAMEN -",a.appendChild(d);const i=document.createElement("div");i.classList.add("sub-menu"),i.appendChild(n("TONKOTSU RAMEN","Pork bone broth, shio tare, fatty pork belly, marinated egg, pickled shiitake, black garlic oil, scallion","14")),i.appendChild(n("SPICY MISO RAMEN","Pork bone broth, chili-miso tare, crispy pork belly, marinated bean sprouts, menma, chili oil, scallion","15")),i.appendChild(n("SHIO RAMEN","Chicken-dashi broth, shio tare, yuzu grilled chicken, marinated egg, fried shallot, chicken fat, katsuobushi, yuzu kosho, scallion","14")),i.appendChild(n("SHOYU RAMEN","Chicken-dashi broth, roasted shoyu tare, fatty pork belly, marinated egg, menma, chicken fat, katsuobushi, scallion, sesame seed","14")),i.appendChild(n("VEGGIE MISO RAMEN","Shiitake dashi, miso tare, grilled corn, pickled shiitake, seasonal vegetables, scallion","12")),i.appendChild(n("KID'S RAMEN","Choice of broth: pork bone, chicken-shio, chicken-shoyu, miso, or spicy miso","8")),a.appendChild(i);const c=document.createElement("div");c.classList.add("menu-title"),c.textContent="- DRINKS -",a.appendChild(c);const l=document.createElement("div");l.classList.add("sub-menu"),l.appendChild(n("LYCHEE MARTINI","Wodka Vodka, St. Elder, lychee syrup, lychee popping boba","8")),l.appendChild(n("KYOTO MULE","Japanese shochu, lime, lychee syrup, Fever Tree ginger beer","10")),l.appendChild(n("TOKI OLD FASHIONED","Suntory Toki Japanese whiskey, ginger, lemon bitters","10")),a.appendChild(l),o.appendChild(a),document.querySelector("#container").appendChild(o)},d=()=>{t(),document.querySelector("#tab-contact a").classList.add("yellow");const n=e("Contact"),o=document.createElement("div");o.id="content-contact",n.appendChild(o),document.querySelector("#container").appendChild(n)},i=document.querySelectorAll(".crumb a");for(let e of i)e.addEventListener("click",(()=>{document.querySelector("#content").remove(),"About"===e.textContent?o():"Menu"===e.textContent?a():"Contact"===e.textContent&&d()}));o()})();