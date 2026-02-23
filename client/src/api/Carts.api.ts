import { z } from "zod";
import { validateResponse } from "./validateResponse";

const CartSchema = z.object({
  id: z.number(),
  userId: z.number(),
  products: z.array(
    z.object({
      productId: z.number(),
      quantity: z.number(),
    }),
  ),
});

export const CartListSchema = z.array(CartSchema);

export type CartT = z.infer<typeof CartSchema>;
export type CartListT = z.infer<typeof CartListSchema>;

export function addToCart(
  userId: number,
  productId: number,
  quantity: number,
): Promise<CartT> {
  const cart = {
    userId,
    products: [{ productId, quantity }],
  };
  return fetch("https://fakestoreapi.com/carts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cart),
  }).then(validateResponse).then(res => res.json()).then(data => CartSchema.parse(data));
}


export  function fetchUserCart(userId: number): Promise<CartT> {
    return fetch(`https://fakestoreapi.com/carts/user/${userId}`).then(validateResponse).then(res => res.json()).then(data => CartSchema.parse(data));
}