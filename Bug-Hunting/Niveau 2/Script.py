"""
Script de calcul de remise et TVA
2 bugs à corriger
--------------------------------------
Calculer le prix total d'un panier avec remises progressives et TVA

Résultat attendu : 
Sous-total: 106.0€
Après remise: 90.1€
Total TTC: 108.12€
"""

class ShoppingCart:
    def __init__(self, tax_rate=0.20):
        self.items = []
        self.tax_rate = tax_rate
        self.discount_rates = {
            100: 0.15,  # 15% si > 100€
            50: 0.10,   # 10% si > 50€
            0: 0.0      # Pas de remise
        }
    
    def add_item(self, price, category="normal"):
        item = {'price': price, 'category': category}
        self.items.append(item)
    
    def calculate_subtotal(self):
        total = 0
        for item in self.items:
            total += item['price']
        return total
    
    def apply_discount(self, subtotal):
        for threshold in self.discount_rates:
            if subtotal >= threshold:
                discount_rate = self.discount_rates[threshold]
                return subtotal * (1 - discount_rate)
        return subtotal
    
    def calculate_total(self):
        subtotal = self.calculate_subtotal()
        discounted_price = self.apply_discount(subtotal)
        total_with_tax = subtotal * (1 + self.tax_rate)
        return total_with_tax
    
    def get_cart_summary(self):
        subtotal = self.calculate_subtotal()
        discounted = self.apply_discount(subtotal)
        total = self.calculate_total()
        
        return {
            'subtotal': round(subtotal, 2),
            'after_discount': round(discounted, 2),
            'total_with_tax': round(total, 2)
        }



# Tests
cart = ShoppingCart()
cart.add_item(35.50)
cart.add_item(25.30)
cart.add_item(45.20)

summary = cart.get_cart_summary()
print(f"Sous-total: {summary['subtotal']}€")
print(f"Après remise: {summary['after_discount']}€")
print(f"Total TTC: {summary['total_with_tax']}€")


