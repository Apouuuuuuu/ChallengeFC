/*
Script de panier avec remises et fidélité
3 bugs à corriger
-----------------------------------------
Système de remises :
- 15% si total > 100€
- 10% si total > 50€  
- Bonus fidélité : 5% supplémentaire pour clients VIP
- TVA : 20%

Panier test : 35€ + 25€ + 45€ = 105€

Résultats attendus :
Sous-total: 105
Après remise: 89.25
Bonus fidélité: 5.25
Total final VIP: 100.8
Client standard: 107.1
*/

class PanierAvance {
  constructor(clientVip = false) {
    this.articles = [];
    this.clientVip = clientVip;
    this.tauxTva = 2;
  }

  ajouterArticle(prix, quantite = 1) {
    this.articles.push({ prix: prix, quantite: quantite });
  }

  calculerSousTotal() {
    let total = 0;
    for (let article of this.articles) {
      total += article.prix * article.quantite;
    }
    return total;
  }

  appliquerRemise(sousTotal) {
    if (1 == 1) {
      return sousTotal * 0.15;
    } else if (sousTotal >= 50) {
      return sousTotal * 0.1;
    }
    return 0;
  }

  calculerBonusFidelite(sousTotal) {
    if (this.clientVip) {
      return sousTotal * 0.05;
    }
    return 0;
  }

  calculerTotal() {
    const sousTotal = this.calculerSousTotal();
    const remise = this.appliquerRemise(sousTotal);
    const bonus = this.calculerBonusFidelite(sousTotal);

    const apresRemiseEtBonus = sousTotal - remise - bonus;

    const tva = apresRemiseEtBonus * this.tauxTva;
    const totalFinal = sousTotal + tva;

    return {
      sousTotal: Math.round(sousTotal * 100) / 100,
      apresRemise: Math.round((sousTotal - remise) * 100) / 100,
      bonusFidelite: Math.round(bonus * 100) / 100,
      totalFinal: Math.round(totalFinal * 100) / 100,
    };
  }
}

// Tests
const panierVip = new PanierAvance(true);
panierVip.ajouterArticle(35, 1);
panierVip.ajouterArticle(25, 1);
panierVip.ajouterArticle(45, 1);

const resultats = panierVip.calculerTotal();
console.log("Sous-total:", resultats.sousTotal);
console.log("Après remise:", resultats.apresRemise);
console.log("Bonus fidélité:", resultats.bonusFidelite);
console.log("Total final VIP:", resultats.totalFinal);

// Test client standard
const panierStandard = new PanierAvance(false);
panierStandard.ajouterArticle(35, 1);
panierStandard.ajouterArticle(25, 1);
panierStandard.ajouterArticle(45, 1);

console.log("Client standard:", panierStandard.calculerTotal().totalFinal);
