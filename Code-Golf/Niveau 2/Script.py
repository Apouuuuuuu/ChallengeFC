"""
Code Golf - Niveau 2
Réduire à maximum 5 lignes
---------------------------
Fonction qui classe les étudiants selon leur note, affiche leur mention et calcule la moyenne de classe

Code actuel : 26 lignes
Objectif : 8 lignes maximum

Résultat attendu :
Alice : Excellent : 18/20
Bob : Très bien : 14/20
Charlie : Assez bien : 10/20
Diana : Insuffisant : 6/20
Eve : Excellent : 16/20
Frank : Passable : 9/20
Apou : Parfait : 20/20
Moyenne de la classe : 13.29/20
"""

def noter_etudiants(etudiants):
    total_notes = 0
    nombre_etudiants = 0
    
    for etudiant in etudiants:
        nom = etudiant['nom']
        note = etudiant['note']
        
        # Additionner pour la moyenne
        total_notes += note
        nombre_etudiants += 1
        
        if note == 20:
            mention = "Parfait"
        elif note >= 16:
            mention = "Excellent"
        elif note >= 14:
            mention = "Très bien"
        elif note >= 12:
            mention = "Bien"
        elif note >= 10:
            mention = "Assez bien"
        elif note >= 8:
            mention = "Passable"
        else:
            mention = "Insuffisant"
        
        print(f"{nom} : {mention} : {note}/20")
    
    # Calculer et afficher la moyenne
    if nombre_etudiants > 0:
        moyenne = total_notes / nombre_etudiants
        print(f"Moyenne de la classe : {round(moyenne, 2)}/20")

# Tests
etudiants = [
    {'nom': 'Alice', 'note': 18},
    {'nom': 'Bob', 'note': 14},
    {'nom': 'Charlie', 'note': 10},
    {'nom': 'Diana', 'note': 6},
    {'nom': 'Eve', 'note': 16},
    {'nom': 'Frank', 'note': 9},
    {'nom': 'Apou', 'note': 20}
]

noter_etudiants(etudiants)
print("---")