import { fishList } from "./fishList.js";
import { tipList } from "./tipList.js";
import { locationList } from "./locationList.js";

// Generate the fish list
const fishHTML = fishList();

// Generate the care tips
const tipHTML = tipList();

// Generate the location list
const locationHTML = locationList();

// Render each HTML string to the correct DOM element
//renderFishToHTML(fishHTML);
const theFishList = document.querySelector("#fishList");
theFishList.innerHTML = fishHTML;

const theTipList = document.querySelector("#tipList");
theTipList.innerHTML = tipHTML;

const theLocationList = document.querySelector("#locationList");
theLocationList.innerHTML = locationHTML;
