import { OrderActions } from "../reducers/orderReducer"
import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem
    dispatch: React.Dispatch<OrderActions>
}

export default function MenuItem({ item, dispatch }: MenuItemProps) {
    return (
        <button className="border-2 w-full border-teal-400 hover:bg-teal-100 p-3 flex justify-between rounded"
            onClick={() => dispatch({ type: 'add-item', payload: { item } })}>
            <p>{item.name}</p>
            <p className="font-bold">${item.price}</p>
        </button>
    )
}