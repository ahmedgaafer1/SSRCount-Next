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
  const action = formData.get("action");
  if (action === "increment") return prevState + 1;
  if (action === "decrement") return prevState - 1;
  return prevState;
}