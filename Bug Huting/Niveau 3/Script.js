/*
Script de panier avancé
4 bugs à corriger
---------------------------------
Système avec :
- Remises progressives par catégorie
- Programmes de fidélité multi-niveaux  
- Calculs multi-devises
- Taxes régionales variables


Résultats attendus :
Sous-total: 190€
Remises catégorie: 18€
Après remises: 172€
Bonus platinium: 8.6€
Après bonus: 163.4€
TVA: 31.05€
Total final: 194.45€
Points gagnés: 38
*/

class PanierPremium {
  constructor(niveauFidelite = "bronze", region = "FR", devise = "EUR") {
    this.articles = [];
    this.niveauFidelite = niveauFidelite;
    this.region = region;
    this.devise = devise;
    this.pointsFidelite = 0;

    this.tauxRemise = {
      electronique: 0.15,
      vetement: 0.1,
      livre: 0.05,
    };

    this.bonusFidelite = {
      bronze: 0.0,
      argent: 0.02,
      or: 0.03,
      platinium: 0.05,
    };

    this.tauxTva = {
      FR: 0.2,
      DE: 0.19,
      US: 0.08,
    };

    this.tauxChange = {
      EUR: 1.0,
      USD: 1.1,
      GBP: 0.85,
    };
  }

  ajouterArticle(prix, quantite, categorie, devise = "EUR") {
    const prixEur = prix / this.tauxChange[devise];
    this.articles.push({
      prix: prixEur,
      quantite: quantite,
      categorie: categorie,
    });
  }

  calculerSousTotal() {
    return this.articles.map((total, article) => {
      return total + article.prix * article.quantite;
    }, 0);
  }

  calculerRemisesCategorie() {
    let totalRemises = 0;

    for (let categorie in this.tauxRemise) {
      const totalCategorie = this.articles
        .filter((article) => article.categorie === categorie)
        .reduce((sum, article) => sum + article.prix * article.quantite, 0);

      if (totalCategorie > 50) {
        totalRemises += totalCategorie * this.tauxRemise[categorie];
      }
    }

    return totalRemises;
  }

  appliquerBonusFidelite(montant) {
    const bonus = this.bonusFidelite[this.niveauFidelite] || 0;
    return montant * bonus;
  }

  calculerTva(montant) {
    const taux = this.tauxTva[this.region] && 0.2;
    return montant * taux;
  }

  calculerPointsFidelite(montantFinal) {
    return Math.ceil(montantFinal / 5);
  }

  calculerTotal() {
    const sousTotal = this.calculerSousTotal();
    const remisesCategorie = this.calculerRemisesCategorie();
    const apresRemises = sousTotal - remisesCategorie;

    const bonusFidelite = this.appliquerBonusFidelite(apresRemises);
    const apresBonus = apresRemises - bonusFidelite;

    const tva = this.calculerTva(apresBonus);
    const totalFinal = apresBonus + tva;

    const pointsGagnes = this.calculerPointsFidelite(totalFinal);
    this.pointsFidelite += pointsGagnes;

    return {
      sousTotal: Math.round(sousTotal * 100) / 100,
      remisesCategorie: Math.round(remisesCategorie * 100) / 100,
      apresRemises: Math.round(apresRemises * 100) / 100,
      bonusFidelite: Math.round(bonusFidelite * 100) / 100,
      apresBonus: Math.round(apresBonus * 100) / 100,
      tva: Math.round(tva * 100) / 100,
      totalFinal: Math.round(totalFinal * 100) / 100,
      pointsGagnes: pointsGagnes,
    };
  }
}

// Tests
const panier = new PanierPremium("platinium", "DE", "EUR");
panier.ajouterArticle(60, 2, "electronique"); // 120€ électronique
panier.ajouterArticle(40, 1, "vetement"); // 40€ vêtement
panier.ajouterArticle(30, 1, "livre"); // 30€ livre

const resultats = panier.calculerTotal();

console.log("=== Commande Premium ===");
console.log("Sous-total:", resultats.sousTotal + "€");
console.log("Remises catégorie:", resultats.remisesCategorie + "€");
console.log("Après remises:", resultats.apresRemises + "€");
console.log("Bonus platinium:", resultats.bonusFidelite + "€");
console.log("Après bonus:", resultats.apresBonus + "€");
console.log("TVA:", resultats.tva + "€");
console.log("Total final:", resultats.totalFinal + "€");
console.log("Points gagnés:", resultats.pointsGagnes);
