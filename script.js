const achat = document.querySelector("#liste-achats");
const totalprix = document.querySelector("#Total-prix");
const produitfield = document.querySelector("#produit");
const prixField = document.querySelector("#prix");
const ajouterbtn = document.querySelector("#ajouter")
let total =0;

function ajouterProduit(event){
    event.preventDefault();
    console.log(event.target)
    let produit = produitfield.value;
    let prix = prixField.value;
    if(isNaN(prix)){
        alert("ce n'est pas un nombre")
        return;
    }
    if(produit && prix){
        const ligne = document.createElement("tr")
        ligne.innerHTML = `<td>${produit}</td><td>${prix}</td>`
        achat.appendChild(ligne)
        total +=+prix
        totalprix.innerHTML = total;
        produitfield.value = "";
        prixField.value = 0;
    }
}
ajouterbtn.addEventListener("click" ,  ajouterProduit)
