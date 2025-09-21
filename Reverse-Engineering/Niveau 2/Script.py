"""
Reverse Engineering
---------------------------------------
MISSION : Analysez ce script et expliquez ce qu'il fait

Ce code traite des données selon certaines règles. Déterminez sa logique.
"""

def etape_a(texte):
    resultat = ""
    for char in texte:
        if char.isalpha():
            if char.islower():
                resultat += char.upper()
            else:
                resultat += char.lower()
        else:
            resultat += char
    return resultat

def etape_b(texte):
    mots = texte.split()
    nouveaux_mots = []
    for mot in mots:
        if len(mot) > 3:
            nouveau_mot = mot[-1] + mot[1:-1] + mot[0]
            nouveaux_mots.append(nouveau_mot)
        else:
            nouveaux_mots.append(mot)
    return " ".join(nouveaux_mots)

def etape_c(texte):
    voyelles = "aeiouAEIOU"
    compteur = 0
    for char in texte:
        if char in voyelles:
            compteur += 1
    return compteur

def processeur_principal(input_text):
    resultat1 = etape_a(input_text)
    resultat2 = etape_b(resultat1)
    nombre_final = etape_c(resultat2)
    return resultat2, nombre_final

# Données test
texte_original = "Hello World Programming"
texte_transforme, nombre = processeur_principal(texte_original)


# ============================================================
# VOTRE ANALYSE
# ============================================================
#
# QUE FAIT CE SCRIPT EN GÉNÉRAL ?
# 
# 
# RÉSULTAT FINAL ATTENDU POUR "Hello World Programming" :
# Texte transformé : 
# Nombre final : 
