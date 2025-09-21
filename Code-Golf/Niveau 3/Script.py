"""
Code Golf - Niveau 3
Réduire à maximum 6 lignes
---------------------------
Fonction qui analyse les scores de jeux vidéo et trouve les meilleurs joueurs par catégorie

Code actuel : 20 lignes
Objectif : 6 lignes maximum

Résultat attendu :
=== Top joueurs par catégorie ===
Action:
  1. Alice (950 pts)
  2. Bob (920 pts)
  3. Charlie (800 pts)

Puzzle:
  1. Diana (880 pts)
  2. Frank (750 pts)

RPG:
  1. Eve (990 pts)

Meilleur joueur global: Eve (990 pts)
"""

def analyser_scores(joueurs):
    # Regrouper par catégorie
    categories = {}
    for joueur in joueurs:
        nom = joueur['nom']
        categorie = joueur['categorie']
        score = joueur['score']
        
        if categorie not in categories:
            categories[categorie] = []
        
        categories[categorie].append({'nom': nom, 'score': score})
    
    print("=== Top joueurs par catégorie ===")
    meilleur_global = {'nom': '', 'score': 0}
    
    # Afficher les tops par catégorie
    for categorie, liste_joueurs in categories.items():
        # Trier par score décroissant
        liste_joueurs.sort(key=lambda x: x['score'], reverse=True)
        
        print(f"{categorie}:")
        for i, joueur in enumerate(liste_joueurs, 1):
            print(f"  {i}. {joueur['nom']} ({joueur['score']} pts)")
            
            # Chercher le meilleur global
            if joueur['score'] > meilleur_global['score']:
                meilleur_global = joueur
        
        print()
    
    print(f"Meilleur joueur global: {meilleur_global['nom']} ({meilleur_global['score']} pts)")


# Tests
joueurs = [
    {'nom': 'Alice', 'categorie': 'Action', 'score': 950},
    {'nom': 'Bob', 'categorie': 'Action', 'score': 920},
    {'nom': 'Charlie', 'categorie': 'Action', 'score': 800},
    {'nom': 'Diana', 'categorie': 'Puzzle', 'score': 880},
    {'nom': 'Eve', 'categorie': 'RPG', 'score': 990},
    {'nom': 'Frank', 'categorie': 'Puzzle', 'score': 750}
]

analyser_scores(joueurs)