export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export const useCart = () => {
  const cart = useState<CartItem[]>('aurelle-cart', () => []);

  const addToCart = (product: Omit<CartItem, 'quantity'>) => {
    const existing = cart.value.find((item) => item.id === product.id);

    if (existing) {
      existing.quantity++;
    } else {
      cart.value.push({ ...product, quantity: 1 });
    }
  };

  const removeFromCart = (id: number) => {
    cart.value = cart.value.filter((item) => item.id !== id);
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    const item = cart.value.find((item) => item.id === id);

    if (item) item.quantity = quantity;
  };

  const cartCount = computed(() =>
    cart.value.reduce((total, item) => total + item.quantity, 0)
  );

  const cartTotal = computed(() =>
    cart.value.reduce((total, item) => total + item.price * item.quantity, 0)
  );

  return {
    cart,
    cartCount,
    cartTotal,
    addToCart,
    removeFromCart,
    updateQuantity,
  };
};
