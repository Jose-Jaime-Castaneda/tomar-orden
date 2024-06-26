import formatCurrency from "../helpers"
import { OrderActions } from "../reducers/orderReducer"
import { OrderItem } from "../types"

type OrderContentProps = {
    order: OrderItem[],
    dispatch: React.Dispatch<OrderActions>
}

export default function OrderContent({ order, dispatch }: OrderContentProps) {
    return (
        <div>
            <h2 className="font-bold text-4xl">Consumo</h2>

            <div className="space-y-3 mt-5">
                {order.map(item => (
                    <div key={item.id}
                        className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b">
                        <div>
                            <p className="text-lg">{item.name} - {formatCurrency(item.price)}</p>
                            <p className="font-bold">Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}</p>
                        </div>
                        <button onClick={() => dispatch({ type: 'remove-item', payload: { id: item.id } })} className="bg-red-600 h-8 w-8 rounded-full text-white font-bold">X</button>
                    </div>
                ))}
            </div>
        </div>
    )
}