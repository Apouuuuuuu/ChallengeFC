"""
Script de calcul de panier avec remises et taxes
4 bugs à corriger
-----------------------------------------------
Script attendu:
- Remises progressives : 15% si >100€, 10% si >50€
- Bonus premium : 5% sur articles catégorie "premium"  
- Taxes régionales : FR=20%, DE=19%, US=8%, 20% si inconnu
- Calcul précis avec quantités et centimes

Résultats attendus : 
Sous-total: 145.0€
Remise volume: 21.75€
Bonus premium: 1.25€
Total final: 149.4€
Total UK: 60.0€
"""

class AdvancedCart:
    def __init__(self, region="FR"):
        self.items = []
        self.region = region
        self.tax_rates = {"FR": 0.20, "DE": 0.19, "US": 0.08}
        
    def add_item(self, price, quantity=1, category="normal"):
        item = {"price": price, "quantity": quantity, "category": category}
        self.items.append(item)
        
    def calculate_subtotal(self):
        total = 0
        for item in self.items:
            total += item["price"]
        return total
    
    def apply_volume_discount(self, subtotal):
        if subtotal >= 100:
            return subtotal * 0.15  # 15% de remise
        elif subtotal >= 50:
            return subtotal * 0.10  # 10% de remise
        return 0
    
    def apply_category_bonus(self, subtotal):
        premium_total = 0
        for item in self.items:
            if item["category"] == "premium":
                premium_total += item["price"] * item["quantity"]
        
        if premium_total > 0:
            return premium_total * 0.05  # 5% de bonus sur premium
        return 0
    
    def calculate_tax(self, amount):
        tax_rate = self.tax_rates[self.region]
        return amount * tax_rate
    
    def get_total(self):
        subtotal = self.calculate_subtotal()
        discount = self.apply_volume_discount(subtotal)
        bonus = self.apply_category_bonus(subtotal)
        
        after_discount = subtotal - discount + bonus
        tax = self.calculate_tax(after_discount)
        return round(after_discount + tax)

# Tests
cart = AdvancedCart(region="FR")
cart.add_item(30.0, quantity=2, category="normal") 
cart.add_item(25.0, quantity=1, category="premium")
cart.add_item(20.0, quantity=3, category="normal")

print("=== Calcul du panier ===")
print(f"Sous-total: {cart.calculate_subtotal()}€")
print(f"Remise volume: {cart.apply_volume_discount(cart.calculate_subtotal())}€")
print(f"Bonus premium: {cart.apply_category_bonus(cart.calculate_subtotal())}€")
print(f"Total final: {cart.get_total()}€")

# Test région inconnue
cart_uk = AdvancedCart(region="UK")
cart_uk.add_item(50.0)
print(f"Total UK: {cart_uk.get_total()}€")