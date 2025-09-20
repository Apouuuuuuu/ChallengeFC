'''
Script de calcul de remise
2 bugs à corriger
--------------------------------------
Calculer le prix total d'un panier avec une remise de 10% si le total dépasse 50€
'''

def calculer_prix_total(prix_articles):
    total = 0
    
    for i in range(len(prix_articles)):
        total += prix_articles[i]
    
    # Appliquer remise de 10% si total > 50€
    if total >= 50:
        total = total - 0.1
    
    return round(total)

# Tests
panier1 = [25.50, 15.20, 12.34,]  # Panier avec remise
panier2 = [10.33, 15.40]  # Panier sans remise

print("Panier 1:", calculer_prix_total(panier1))
print("Panier 2:", calculer_prix_total(panier2))