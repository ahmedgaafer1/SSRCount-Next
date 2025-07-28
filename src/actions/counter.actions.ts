// "use server";


// export async function incrementCounter(prevState:any,formData: FormData):Promise<number> {
//     return new Promise((resolve, reject) => {
//         try {
//             const counter = Number(formData.get("counter")) + 1;
//             resolve(counter);
//         } catch (error: unknown) {
//             if (error instanceof Error) {
//                 reject(error.message);
//             } else {
//                 reject("Something went wrong");
//             }
//         }
//     })
// }

// export async function decrementCounter(prevState:any,formData: FormData):Promise<number> {
//     return new Promise((resolve, reject) => {
//         try {
//             const counter = Number(formData.get("counter")) - 1;
//             resolve(counter);
//         } catch (error: unknown) {
//             if (error instanceof Error) {
//                 reject(error.message);
//             } else {
//                 reject("Something went wrong");
//             }
//         }
//     })

// }


"use server";

export async function updateCounter(prevState: number, formData: FormData) {
  const action = formData.get("action") as "increment" | "decrement";
  const strategy = await updateCounterStrategy(action);
  const results = await strategy(prevState);
  console.log(results);
  return results?.counter;
}


async function updateCounterStrategy(action: "increment" | "decrement") {
  const route = action === "increment" ? "http://localhost:3000/api/increment" : "http://localhost:3000/api/decrement";
  const strategy = {
    increment: async (prevState: number): Promise<{ counter: number }> => {
      const response = await fetch(route, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          counter: prevState,
        }),
      });
      return await response.json();
    },
    decrement: async (prevState: number): Promise<{ counter: number }> => {
      const response = await fetch(route, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          counter: prevState,
        }),
      });
      return await response.json();
    },
  };
  return strategy[action];
}
