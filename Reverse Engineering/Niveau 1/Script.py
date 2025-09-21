"""
Reverse Engineering
---------------------------------------
MISSION : Analysez ce script et expliquez ce qu'il fait

Décrivez le but général et le résultat final.
"""

def traiter_nombres(liste):
    resultat = []
    for num in liste:
        if num > 10:
            nouveau = num * 2
        else:
            nouveau = num + 5
        resultat.append(nouveau)
    return resultat

def filtrer_pairs(liste):
    nouveaux = []
    for element in liste:
        if element % 2 == 0:
            nouveaux.append(element)
    return nouveaux

def calculer_final(liste):
    total = 0
    for val in liste:
        total += val
    return total / len(liste) if len(liste) > 0 else 0

# Execution principale
donnees = [3, 7, 12, 15, 8, 20, 1, 9]
etape1 = traiter_nombres(donnees)
etape2 = filtrer_pairs(etape1)
resultat_final = calculer_final(etape2)

print(f"Données initiales: {donnees}")
print(f"Après traitement: {etape1}")
print(f"Après filtrage: {etape2}")
print(f"Résultat final: {resultat_final}")

# ============================================================
# VOTRE ANALYSE
# ============================================================
#
# QUE FAIT CE SCRIPT EN GÉNÉRAL ?
# 
# 
# RÉSULTAT FINAL ATTENDU :
#