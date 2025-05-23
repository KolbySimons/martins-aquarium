import { database } from "./aquariumData.js";


export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = ""

    for (const) {
        holyFishL += `
          <article class="fish">
             <img src="${fish.image}" alt="${fish.species} image" class="fish_image">
              <div class="fish_details">
                  <h2 class="fish_name">${fish.name}</h2>
                  <p class="fish_species">Is a ${fish.species} that is ${fish.length} inches long</p>
                  
                  
              </div>
          </article>
          `;
    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
}

export const regularFish = () => {
    // Any fish not a multiple of 3 or 5
}