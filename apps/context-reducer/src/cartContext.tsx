import {
  createContext,
  useContext,
  useReducer,
  type Dispatch,
  type ReactNode,
} from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
}

interface CartState {
  items: CartItem[];
}

type CartAction =
  | { type: "add"; item: CartItem }
  | { type: "remove"; id: string }
  | { type: "clear" };

const initialState: CartState = { items: [] };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "add":
      return { items: [...state.items, action.item] };
    case "remove":
      return { items: state.items.filter((item) => item.id !== action.id) };
    case "clear":
      return { items: [] };
    default:
      return state;
  }
}

interface CartContextValue {
  state: CartState;
  dispatch: Dispatch<CartAction>;
}

const CartContext = createContext<CartContextValue | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const value = useContext(CartContext);
  if (!value) throw new Error("useCart must be used inside CartProvider");
  return value;
}
