/**
 * Mon premier js
 * @author  Paula
 * @version 0.0.1
 * @since   2023-08-29
 */

"use strict";

//récup tous les paragraphes du document
let tabPara = document.querySelectorAll("p");
let btAjouter = document.querySelector("button.ajouter");
let nomItem = document.querySelector("#item");
let ulItems = document.querySelector("ul.items");

//Affiche le contenu des var dans la console
console.log(tabPara, btAjouter, ulItems);

//Ecoute le click sur btAjouter
btAjouter.addEventListener("click", () => {
    ulItems.innerHTML += "<li>" + nomItem.value + "</li>";
    console.log(nomItem.value);
    //vide le champ de texte
    nomItem.value = "";
});