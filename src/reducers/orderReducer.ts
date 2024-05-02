import type { MenuItem, OrderItem } from "../types";

export type OrderActions =
  | { type: "add-item"; payload: { item: MenuItem } }
  | { type: "remove-item"; payload: { id: MenuItem["id"] } }
  | { type: "place-order" };

export type OrderState = {
  order: OrderItem[];
  tip: number;
};

export const initalState: OrderState = {
  order: [],
  tip: 0,
};

export const orderReducer = (
  state: OrderState = initalState,
  action: OrderActions
) => {
  if (action.type === "add-item") {
  }

  if (action.type === "remove-item") {
  }

  if (action.type === "place-order") {
  }

  return state;
};
