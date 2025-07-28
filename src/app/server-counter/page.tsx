"use client";

import { updateCounter } from "@/actions/counter.actions";
import { useActionState } from "react";

export default function ServerCounterPage() {
  const [count, action, isPending] = useActionState(updateCounter, 0);

  return (
    <div className="flex flex-col gap-4">
      <p>Count: {count}</p>

      <form
        action={action}
        className="flex flex-row items-center justify-center p-2 border border-black bg-red-200 rounded shadow-md"
      >
        <input type="hidden" name="counter" value={count ?? 0} readOnly />
        <input type="hidden" name="action" value="increment" />
        <button type="submit">Increment</button>
      </form>

      <form
        action={action}
        className="flex flex-row items-center justify-center p-2 border border-black bg-blue-200 rounded shadow-md"
      >
        <input type="hidden" name="counter" value={count ?? 0} readOnly />
        <input type="hidden" name="action" value="decrement" />
        <button type="submit">Decrement</button>
      </form>
    </div>
  );
}
