"use client";

import { updateCounter } from "@/actions/counter.actions";
import { useActionState } from "react";

  // communication way between rendered compoenent and next server
  const [count, action, isPending] = useActionState(updateCounter, 0);


export default function ServerCounterPage() {

  return (
    <div className="flex flex-col gap-4">
      <p>Count: {count}</p>
      <form action={action} className="flex flex-row items-center justify-center p-2 border border-black bg-red-200 rounded shadow-md">
        <input type="number" name="counter" hidden value={count}/>
        <input type="hidden" name="action" value="increment" />
        <button type="submit">Increment</button>
      </form>
      <form action={action} className="flex flex-row items-center justify-center p-2 border border-black bg-blue-200 rounded shadow-md">
        <input type="number" name="counter" hidden value={count}/>
        <input type="hidden" name="action" value="decrement" />
        <button type="submit">Decrement</button>
      </form>
    </div>
  );
  }
  
