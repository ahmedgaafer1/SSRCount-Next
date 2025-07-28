
"use client";
import { BasicButton } from "@/components/BasicButton";
import Link from "next/link";
import { ThemeProvider, useTheme } from "../providers/theme.provider";


function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();
  return (
    <BasicButton btnColor={theme === 'light' ? 'gray' : 'black'}>
      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        style={{ width: '100%' }}
      >
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </BasicButton>
  );
}

export default function Home() {
  return (
    <ThemeProvider>
      <div className="flex flex-col gap-4">
        <ThemeToggleButton />
        <BasicButton btnColor="red">
          <Link href="/server-counter">Server Counter</Link>
        </BasicButton>
        <BasicButton btnColor="blue">
          <Link href="/server-api-counter">Server API Counter</Link>
        </BasicButton>
        <BasicButton btnColor="green">
          <Link href="/client-counter">Client Counter</Link>
        </BasicButton>
        <BasicButton btnColor="yellow">
          <Link href="/counter-provider-version">Counter Provider Version</Link>
        </BasicButton>
      </div>
    </ThemeProvider>
  );
}
