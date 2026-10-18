import { z } from "zod";

export const orderSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(2, "Name must be at least 2 characters"),
  phone: z
    .string({ required_error: "Phone number is required" })
    .regex(
      /^(09|\+2519)\d{8}$/,
      "Use 09… or +2519… followed by 8 digits",
    ),
  notes: z.string().max(200, "Notes cannot exceed 200 characters").optional(),
  items: z
    .array(
      z.object({
        dishId: z.string(),
        quantity: z.number().int().min(1, "Quantity must be at least 1"),
      }),
    )
    .min(1, "Your cart is empty"),
});

export function errorShape(message, fieldErrors) {
  return fieldErrors
    ? { error: message, fieldErrors }
    : { error: message };
}
