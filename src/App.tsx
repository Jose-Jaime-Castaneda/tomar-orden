import MenuItem from "./components/MenuItem";
import OrderContent from "./components/OrderContent";
import OrderTotal from "./components/OrderTotal";
import TipFrom from "./components/TipFrom";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

export default function App() {
  const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder();

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
                addItem={addItem}
              />
            ))}
          </div>
        </div>
        <div className="p-5 border border-dashed border-slate-300 rounded-lg space-y-10">
          {order.length > 0 ? (
            <>
              <OrderContent
                order={order}
                removeItem={removeItem}
              />

              <TipFrom
                setTip={setTip}
                tip={tip}
              />

              <OrderTotal
                order={order}
                tip={tip}
                placeOrder={placeOrder}
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