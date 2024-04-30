import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem
    addItem: (item: MenuItem) => void
}

export default function MenuItem({ item, addItem }: MenuItemProps) {
    return (
        <button className="border-2 w-full border-teal-400 hover:bg-teal-100 p-3 flex justify-between rounded"
            onClick={() => addItem(item)}>
            <p>{item.name}</p>
            <p className="font-bold">${item.price}</p>
        </button>
    )
}