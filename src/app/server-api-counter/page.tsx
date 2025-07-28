
"use client";
import { updateCounter } from "@/actions/counter.actions";
import { useActionState } from "react";


/**
 * TODO: LAB1
 * REFACTOR THE BELOW LOGIC AND PLEASE communicate with the next APIs via next server action instead of client communication below
 */

export default function ServerApiCounterPage() {
  ; const [count, formAction] = useActionState(updateCounter, 0);


  return (
    <div className="flex flex-col gap-4">
      <p>Count: {count}</p>
      <form action={formAction} className="flex flex-row items-center justify-center p-2 border border-black bg-red-200 rounded shadow-md">
        <input type="hidden" name="action" value="increment" />
        <button type="submit">Increment</button>
      </form>
      <form action={formAction} className="flex flex-row items-center justify-center p-2 border border-black bg-blue-200 rounded shadow-md">
        <input type="hidden" name="action" value="decrement" />
        <button type="submit">Decrement</button>
      </form>
    </div>
  );
}
