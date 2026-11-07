"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"

const navigation = [
  { label: "Browse Jobs", href: "/jobs" },
  { label: "Company", href: "/companies" },
  { label: "Pricing", href: "/pricing" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
      }
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("pointerdown", handlePointerDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("pointerdown", handlePointerDown)
    }
  }, [open])

  return (
    <header className="relative z-50 px-4 pt-4 sm:px-6 sm:pt-5 lg:px-[60px] lg:pt-6">
      <nav
        ref={navRef}
        aria-label="Main navigation"
        className="relative mx-auto flex h-16 w-full max-w-[1320px] items-center justify-between gap-2 rounded-2xl bg-[#222222] pr-2 pl-4 sm:h-[68px] sm:pl-5 lg:h-[74px] lg:pl-6"
      >
        <Link href="/" aria-label="HireLoop home" className="shrink-0">
          <Image
            src="/hireloop-logo.png"
            alt="HireLoop"
            width={154}
            height={44}
            priority
            className="h-8 w-auto min-[360px]:h-9 sm:h-10 lg:h-[44px]"
          />
        </Link>

        <div className="flex h-full items-center">
          <div className="hidden items-center gap-10 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-sans text-base leading-[1.8] tracking-[-0.2px] text-white transition-colors hover:text-white/70"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <span
            aria-hidden="true"
            className="mx-6 hidden h-6 w-px bg-[#A8A8A8]/40 lg:block"
          />

          <div className="flex items-center gap-2 sm:gap-4">
            <button
              type="button"
              className="hidden h-[58px] w-[106px] cursor-pointer items-center justify-center rounded-xl font-manrope text-lg leading-[1.45] font-semibold text-[#5C53FE] shadow-[inset_0_3px_10px_rgba(255,255,255,0.2)] transition-colors hover:bg-white/5 lg:flex"
            >
              Sign In
            </button>

            <button
              type="button"
              className="hidden h-[52px] w-[143px] cursor-pointer items-center justify-center rounded-xl border border-[#090A15]/10 bg-[#5C53FE] font-instrument text-lg leading-[1.45] font-medium whitespace-nowrap text-white shadow-[inset_0_3px_10px_rgba(255,255,255,0.2)] transition-colors hover:bg-[#6A61FF] sm:flex"
            >
              Get Started
            </button>

            <button
              type="button"
              aria-label={
                open ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen((current) => !current)}
              className="flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-xl text-white transition-colors hover:bg-white/10 lg:hidden"
            >
              {open ? (
                <X aria-hidden="true" className="size-6" strokeWidth={1.75} />
              ) : (
                <Menu
                  aria-hidden="true"
                  className="size-6"
                  strokeWidth={1.75}
                />
              )}
            </button>
          </div>
        </div>

        <div
          id="mobile-navigation"
          aria-hidden={!open}
          className={cn(
            "absolute inset-x-0 top-[calc(100%+8px)] origin-top rounded-2xl border border-white/10 bg-[#1A1A1C] p-3 shadow-[0_24px_60px_rgba(0,0,0,0.55)] transition-all duration-200 lg:hidden",
            open
              ? "visible translate-y-0 scale-100 opacity-100"
              : "invisible -translate-y-1 scale-[0.98] opacity-0"
          )}
        >
          <div className="flex flex-col">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex h-12 items-center rounded-xl px-3 font-sans text-base text-white transition-colors hover:bg-white/5"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="my-2 h-px bg-white/10" />

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex h-12 w-full cursor-pointer items-center justify-center rounded-xl font-manrope text-lg leading-[1.45] font-semibold text-[#5C53FE] shadow-[inset_0_3px_10px_rgba(255,255,255,0.2)] transition-colors hover:bg-white/5"
          >
            Sign In
          </button>

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="mt-2 flex h-12 w-full cursor-pointer items-center justify-center rounded-xl border border-[#090A15]/10 bg-[#5C53FE] font-instrument text-lg leading-[1.45] font-medium whitespace-nowrap text-white shadow-[inset_0_3px_10px_rgba(255,255,255,0.2)] transition-colors hover:bg-[#6A61FF]"
          >
            Get Started
          </button>
        </div>
      </nav>
    </header>
  )
}
