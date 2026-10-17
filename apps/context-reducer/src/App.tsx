import { CartProvider, useCart, type CartItem } from "./cartContext";

const catalog: Omit<CartItem, "id">[] = [
  { name: "Notebook", price: 12 },
  { name: "Pen set", price: 8 },
  { name: "Sticker pack", price: 4 },
];

const Shop = () => {
  const { state, dispatch } = useCart();
  const total = state.items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <section className="rounded border border-slate-200 bg-white p-5">
        <h2 className="font-medium">Catalog</h2>
        <ul className="mt-4 space-y-3">
          {catalog.map((product) => (
            <li
              key={product.name}
              className="flex items-center justify-between gap-3"
            >
              <span>
                {product.name}{" "}
                <span className="text-slate-500">${product.price}</span>
              </span>
              <button
                type="button"
                className="bg-slate-900 px-3 py-1 text-sm text-white"
                onClick={() =>
                  dispatch({
                    type: "add",
                    item: { ...product, id: crypto.randomUUID() },
                  })
                }
              >
                Add
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded border border-slate-200 bg-white p-5">
        <div className="flex items-center justify-between">
          <h2 className="font-medium">Cart</h2>
          <button
            type="button"
            className="text-sm text-red-700"
            onClick={() => dispatch({ type: "clear" })}
          >
            Clear
          </button>
        </div>
        {state.items.length === 0 ? (
          <p className="mt-4 text-slate-500">Cart is empty.</p>
        ) : (
          <ul className="mt-4 space-y-2">
            {state.items.map((item) => (
              <li key={item.id} className="flex justify-between gap-2">
                <span>
                  {item.name} (${item.price})
                </span>
                <button
                  type="button"
                  className="text-sm text-slate-600 underline"
                  onClick={() => dispatch({ type: "remove", id: item.id })}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <p className="mt-4 border-t border-slate-100 pt-3 font-medium">
          Total: ${total}
        </p>
      </section>
    </div>
  );
};

export const App = () => (
  <CartProvider>
    <main className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-3xl font-semibold">Context + useReducer</h1>
      <p className="mt-2 text-slate-600">
        One reducer owns cart updates; Context shares state and dispatch.
      </p>
      <div className="mt-8">
        <Shop />
      </div>
    </main>
  </CartProvider>
);
