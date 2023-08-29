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

//Affiche le contenu des var dans la console
console.log(tabPara, btAjouter);

//Ecoute le click sur btAjouter

btAjouter.addEventListener("click", function ajouter(){
    console.log("Ajouter");
});