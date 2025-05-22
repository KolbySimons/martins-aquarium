import { database } from "./aquariumData.js";

export const fishList = () => {
  // Generate an HTML representation of each fish
  let fishHTML = "";

  for (const fish of database.fish) {
    fishHTML += `
          <article class="fish">
             <img src="${fish.image}" alt="${fish.species} image" class="fish_image">
              <div class="fish_details">
                  <h2 class="fish_name">${fish.name}</h2>
                  <p class="fish_species">Is a ${fish.species} that is ${fish.length} inches long</p>
                  
                  
              </div>
          </article>
          `;
  }
  return fishHTML;
};

/*export const renderFishToHTML = (fishHTML) => {
  const fishList = document.getElementById("fishList");

  if (fishList) {
    fishList.innerHTML = fishHTML;
  } else {
    console.error('Could not find element with id "fishList"');
  }
}; */
/*<p class="fish_location>${fish.location}</p>
                  <p class="fish_diet>${fish.diet}</p>
                  <p class="fish_length>${fish.length} inches long</p>
 */
