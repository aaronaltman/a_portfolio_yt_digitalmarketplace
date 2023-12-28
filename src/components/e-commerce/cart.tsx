import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { ShoppingCart } from "lucide-react";

export default function Cart() {
  return (
    <Sheet>
      <SheetTrigger>
        <ShoppingCart />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
        </SheetHeader>
        <SheetDescription>
          You do not have any items in your cart.
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
