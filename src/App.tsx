import { useReducer } from "react";
import MenuItem from "./components/MenuItem";
import OrderContent from "./components/OrderContent";
import OrderTotal from "./components/OrderTotal";
import TipFrom from "./components/TipFrom";
import { menuItems } from "./data/db";
import { initalState, orderReducer } from "./reducers/orderReducer";

export default function App() {
  const [state, dispatch] = useReducer(orderReducer, initalState)

  return (
    <>
      <header className="bg-teal-400 py-4">
        <h1 className="text-center text-4xl font-bold">
          {" "}
          Calculadora de Propinas y Consumo
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-16 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className=" text-4xl font-bold pb-5">Menú</h2>
          <div className="space-y-2">
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                dispatch={dispatch}
              />
            ))}
          </div>
        </div>
        <div className="p-5 border border-dashed border-slate-300 rounded-lg space-y-10">
          {state.order.length > 0 ? (
            <>
              <OrderContent
                order={state.order}
                dispatch={dispatch}
              />

              <TipFrom
                dispatch={dispatch}
                tip={state.tip}
              />

              <OrderTotal
                order={state.order}
                tip={state.tip}
                dispatch={dispatch}
              />
            </>
          ) : (
            <p className="text-center"> La orden esta vacia</p>
          )}
        </div>
      </main>
    </>
  );
}