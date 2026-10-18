"use server";

import { orderSchema } from "@/lib/schemas";
import { revalidatePath } from "next/cache";

export async function placeOrder(prevState, formData) {
  const rawQuantity = formData.get("quantity");

  const rawData = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    dishId: formData.get("dishId") || undefined,
    quantity: rawQuantity ? Number(rawQuantity) : undefined,
    notes: formData.get("notes") || undefined,
  };

  const parsed = orderSchema.safeParse(rawData);

  if (!parsed.success) {
    return {
      success: false,
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }


  revalidatePath("/menu");

  return {
    success: true,
    fieldErrors: {},
  };
}