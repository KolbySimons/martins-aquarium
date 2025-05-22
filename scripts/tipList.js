import { database } from "./aquariumData.js";

export const tipList = () => {
  // Generate an HTML representation of each tip
  let tipHTML = "";

  for (const tip of database.tips) {
    tipHTML += `
          <ul="tips">
          <b class="tip">${tip.topic}:</b>
          <li class="text">${tip.text}</li>
          </ul>
          `;
  }
  return tipHTML;
};
