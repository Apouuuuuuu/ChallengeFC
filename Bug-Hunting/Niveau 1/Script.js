/*
Script de calcul de panier avec remise
2 bugs à corriger
-------------------------------------
Calculer le prix total d'un panier avec une remise de 10% si le total dépasse 50€


Résultats attendus :
Panier 1: 47.74
Panier 2: 50
Panier 3: 25.73 
*/

function calculerPrixTotal(prixArticles) {
  let total = 0;

  for (let i = 0; i < prixArticles.length; i++) {
    total += prixArticles[i];
  }

  if (total >= 50) {
    total = total - 0.1;
  }

  return Math.round(total * 100) / 100;
}

// Tests
const panier1 = [25.5, 15.2, 12.34]; // 53.04
const panier2 = [20, 25, 5]; // 50
const panier3 = [10.33, 15.4]; // 25.73

console.log("Panier 1:", calculerPrixTotal(panier1));
console.log("Panier 2:", calculerPrixTotal(panier2));
console.log("Panier 3:", calculerPrixTotal(panier3));
