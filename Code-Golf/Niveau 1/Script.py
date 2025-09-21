"""
Code Golf - Niveau 1
Réduire à maximum 2 lignes une fonction qui calcule la somme des nombres pairs dans une liste

---------------------------

Code actuel : 6 lignes
Objectif : 3 lignes maximum

Résultat attendu : 
12
0
20
0
"""

def somme_nombres_pairs(liste):
    total = 0
    for nombre in liste:
        if nombre % 2 == 0:
            total = total + nombre
    return total


# Tests
print(somme_nombres_pairs([1, 2, 3, 4, 5, 6]))
print(somme_nombres_pairs([1, 3, 5]))
print(somme_nombres_pairs([2, 4, 6, 8]))
print(somme_nombres_pairs([]))