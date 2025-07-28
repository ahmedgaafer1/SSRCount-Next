# SSRCount-Next

A modern and educational **Next.js 14** application demonstrating multiple ways to implement a counter using different rendering and communication strategies.

## 🔍 Overview

This project showcases various counter implementations in a Next.js app with a focus on **Server-Side Rendering (SSR)**, **API communication**, and **state management techniques** using React's latest features.

### 🧠 Implemented Counter Variants:

1. **Server Counter**  
   Using `useActionState` + Server Actions to handle counter logic entirely on the server.

2. **Server API Counter**  
   Communicates with API routes (via POST requests) to increment/decrement the count.

3. **Client Counter**  
   Pure client-side state management using React `useState`.

4. **Counter Provider Version**  
   Uses a custom EventBus context provider to broadcast events (`increment`, `decrement`) to a shared counter component.

5. **Theme Switcher**  
   Toggle between light and dark themes using custom context.

---

## 📁 Folder Structure

```bash
/app
  ├── client-counter/page.tsx
  ├── server-counter/page.tsx
  ├── server-api-counter/page.tsx
  ├── counter-provider-version/page.tsx
  ├── layout.tsx
  ├── page.tsx         # Home page with navigation and theme toggle
  ├── api/
  │   ├── increment/route.ts
  │   └── decrement/route.ts
