/* =====================================================================
   HOW TO ADD AN ITEM
   Copy one of the blocks below (from { to }, including the comma after it),
   paste it at the end of the list, and change the words.
   - id:    any short name with no spaces. Every item needs a different one.
   - note:  optional. Delete the whole line if you don't need it.
   - links: one line per store.
   ===================================================================== */

const ITEMS = [
  {
    id: "crossing-chasm",
    name: "Crossing the Chasm by Geoffrey A. Moore",
    note: "Paperback, 3rd edition",
    price: "$15",
    image: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T4/images/I/81jRhPA6SQL._SL1500_.jpg",
    links: [
      { store: "Amazon", url: "https://www.amazon.com/gp/product/0062292986/ref=ox_sc_act_title_8?smid=ATVPDKIKX0DER&th=1" }
    ]
  },
  {
    id: "vw-earrings",
    name: "Vivienne Westwood Lorelei Stud Earrings",
    price: "$120",
    image: "https://www.viviennewestwood.com/dw/image/v2/BJGV_PRD/on/demandware.static/-/Sites-viviennewestwood-master-catalog/default/dwaceba5f0/images/62010359-02R001-_GOLD_001_large.jpg?q=80",
    links: [
      { store: "Vivienne Westwood", url: "https://www.viviennewestwood.com/en-us/women/jewellery/earrings/lorelei-stud-earrings--gold/62010359-02R001--GOLD.html" }
    ]
  },
  {
    id: "bose-headphones",
    name: "Bose QuietComfort Bluetooth Wireless Noise Cancelling Headphones",
    note: "Color: Green",
    price: "$169",
    image: "https://target.scene7.com/is/image/Target/GUEST_e5769483-f322-4421-92f2-c62c0796f163?wid=750&qlt=80",
    links: [
      { store: "Target", url: "https://www.target.com/s?searchTerm=Bose+QuietComfort+headphones+green" }
    ]
  },
  {
    id: "vw-bracelet",
    name: "Vivienne Westwood Ondina Bracelet",
    price: "$170",
    image: "https://www.viviennewestwood.com/dw/image/v2/BJGV_PRD/on/demandware.static/-/Sites-viviennewestwood-master-catalog/default/dw50c2a5ed/images/6102026Q-02R604-_GOLD-PINK-WHITE-CZ_001_large.jpg?sw=570&sh=758&sm=fit&q=80",
    links: [
      { store: "Vivienne Westwood", url: "https://www.viviennewestwood.com/en-us/women/jewellery/bracelets/ondina-bracelet-gold-pink-white-cz/6102026Q-02R604--GOLD-PINK-WHITE-CZ.html" }
    ]
  },
  {
    id: "elegoo-kit",
    name: "Elegoo UNO R3 Project Most Complete Starter Kit (200 Components)",
    note: "For a reaction time experiment",
    price: "$60",
    image: "https://productimages.microcenter.com/704602_961201_01_front_comping.jpg",
    links: [
      { store: "Amazon", url: "https://www.amazon.com/clp/B01CZTLHGE" }
    ]
  },
  {
    id: "uno-starter-kit",
    name: "Uno-Compatible Starter Kit with LEDs, Switches, Resistors, Cables, Jumpers & Breadboard",
    price: "$10–15",
    image: "https://envistiamall.com/cdn/shop/products/atmega328p-microcontroller-starter-development-kit-arduino-compatible-592626.jpg?v=1668022940&width=713",
    links: [
      { store: "Envistia Mall", url: "https://envistiamall.com/search?q=uno+starter+kit" },
      { store: "eBay", url: "https://www.ebay.com/sch/i.html?_nkw=uno+compatible+starter+kit+breadboard" }
    ]
  },
  {
    id: "mpu6050",
    name: "ShillehTek MPU6050 GY-521 Accelerometer + Gyro",
    price: "$10–15",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR3GReKeWHOjdasnQHr5w1qWYkd65CbSH2XwaG6m9EFHberoizGWrndsS-U_J4GW1wnydil_mMj-BWToAJl9vmo9r5XywtlbhWjJ86ylZ78YGWLVb_50uv-B9A",
    links: [
      { store: "ShillehTek", url: "https://shillehtek.com/products/mpu-6050-pre-soldered-6-dof-accelerometer" }
    ]
  },
  {
    id: "m3-screws",
    name: "550-Piece M3 Hex Socket Cap Screws and Nuts Kit",
    note: "304 stainless steel, DIN912, with washers and wrenches",
    price: "$20",
    image: "https://images.thdstatic.com/productImages/1f0a65b7-d866-4d8e-a9a1-f5c8ab609cae/svn/mywish-hardware-kits-sf-tz00085-64_100.jpg",
    links: [
      { store: "Home Depot", url: "https://www.homedepot.com/s/550+piece+M3+hex+socket+cap+screws+nuts+kit" }
    ]
  },
  {
    id: "oyster-spawn",
    name: "Organic Blue Oyster Mushroom Grain Spawn",
    price: "$35",
    image: "https://northspore.com/cdn/shop/files/grain-spawn-organic-blue-oyster-mushroom-grain-spawn-1202763304.png?v=1762256567&width=1200",
    links: [
      { store: "Northspore", url: "https://northspore.com/search?q=blue+oyster+grain+spawn" }
    ]
  },
  {
    id: "grow-bags",
    name: "0.2 Micron Filter Patch Unicorn 3T Mushroom Grow Bags",
    note: "10 pack",
    price: "$9.99",
    image: "https://northspore.com/cdn/shop/files/cultivating-tools-0-2-micron-filter-patch-mushroom-grow-bags-31280380018790.jpg?v=1774466435&width=2048",
    links: [
      { store: "Northspore", url: "https://northspore.com/search?q=unicorn+3t+grow+bags" }
    ]
  }
];


const DATABASE_URL = "https://christmaslist26-77972-default-rtdb.firebaseio.com/";


/* ---------------------------------------------------------------------
   Everything below makes the page work. You shouldn't need to change it.
   --------------------------------------------------------------------- */

const grid = document.getElementById("grid");
const countText = document.getElementById("count");
const message = document.getElementById("message");

let bought = {};   // example: { "vw-earrings": true }

// Get the list of bought items
async function loadBought() {
  if (!DATABASE_URL) {
    return JSON.parse(localStorage.getItem("bought") || "{}");
  }
  const response = await fetch(DATABASE_URL + "/bought.json");
  return (await response.json()) || {};
}

// Mark one item as bought (true) or not bought (false)
async function saveBought(id, value) {
  if (!DATABASE_URL) {
    if (value) bought[id] = true; else delete bought[id];
    localStorage.setItem("bought", JSON.stringify(bought));
    return;
  }
  await fetch(DATABASE_URL + "/bought/" + id + ".json", {
    method: value ? "PUT" : "DELETE",
    body: value ? "true" : undefined
  });
}

// Build the HTML for one item
function makeCard(item) {
  const isBought = bought[item.id];

  const links = item.links
    .map(link => `<a href="${link.url}" target="_blank" rel="noopener">${link.store}</a>`)
    .join("");

  return `
    <li class="card ${isBought ? "bought" : ""}">
      <span class="tag">Already bought</span>
      <img src="${item.image}" alt="${item.name}" referrerpolicy="no-referrer">
      <div class="info">
        <h2 class="name">${item.name}</h2>
        ${item.note ? `<p class="note">${item.note}</p>` : ""}
        <p class="price">${item.price}</p>
        <div class="links">${links}</div>
        <button data-id="${item.id}">
          ${isBought ? "Oops, undo" : "Mark as bought"}
        </button>
      </div>
    </li>
  `;
}

// Draw everything on the page
function showItems() {
  grid.innerHTML = ITEMS.map(makeCard).join("");

  const left = ITEMS.filter(item => !bought[item.id]).length;
  countText.textContent = left + " of " + ITEMS.length + " gifts still on my list";
}

// When someone clicks a button
grid.addEventListener("click", async (event) => {
  const id = event.target.dataset.id;
  if (!id) return;

  const item = ITEMS.find(i => i.id === id);
  const makingBought = !bought[id];

  if (makingBought && !confirm("Mark “" + item.name + "” as bought?")) return;

  try {
    await saveBought(id, makingBought);
    if (makingBought) bought[id] = true; else delete bought[id];
    message.textContent = "";
    showItems();
  } catch (error) {
    message.textContent = "Couldn’t save that. Please try again.";
  }
});

// Load the saved list, then show the page
loadBought()
  .then(saved => { bought = saved; })
  .catch(() => { message.textContent = "Couldn’t load which items are bought."; })
  .finally(showItems);
  