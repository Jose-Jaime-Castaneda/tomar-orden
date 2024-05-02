import { useMemo } from "react"
import { OrderItem } from "../types"
import formatCurrency from "../helpers"
import { OrderActions } from "../reducers/orderReducer"

type OrderTotalProps = {
    order: OrderItem[],
    tip: number,
    dispatch: React.Dispatch<OrderActions>
}

export default function OrderTotal({ order, tip, dispatch }: OrderTotalProps) {

    const subTotal = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])

    const tipAmount = useMemo(() => subTotal * tip, [tip, order])

    const totalAmount = useMemo(() => subTotal + tipAmount, [order, tip])

    return (
        <>
            <div className="space-y-3">
                <h2 className="text-2xl font-bold">Totales y Propina:</h2>
                <p>Subtotal a pagar: {''}
                    <span className="font-bold">{formatCurrency(subTotal)}</span>
                </p>
                <p>Propina: {''}
                    <span className="font-bold">{formatCurrency(tipAmount)}</span>
                </p>
                <p>Total a pagar: {''}
                    <span className="font-bold">{formatCurrency(totalAmount)}</span>
                </p>
            </div>

            <button
                className="w-full bg-black text-white uppercase font-bold p-3 disabled:opacity-10"
                disabled={totalAmount === 0}
                onClick={() => dispatch({ type: 'place-order' })}>
                Guardar Orden
            </button>
        </>
    )
}