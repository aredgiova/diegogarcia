"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Icon } from "@/components/ui/Icon";
export function NavMobile() {
  const menu = useRef<HTMLDetailsElement>(null);
  const closeMenu = () => { if (menu.current) menu.current.open = false; };
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menu.current?.open) { closeMenu(); menu.current?.querySelector("summary")?.focus(); }
    };
    const outside = (event: PointerEvent) => { if (event.target instanceof Node && !menu.current?.contains(event.target)) closeMenu(); };
    const breakpoint = window.matchMedia("(min-width: 1180px)");
    const resized = () => { if (breakpoint.matches) closeMenu(); };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    breakpoint.addEventListener("change", resized);
    return () => { document.removeEventListener("keydown", close); document.removeEventListener("pointerdown", outside); breakpoint.removeEventListener("change", resized); };
  }, []);
  return <details className="mobile-nav" ref={menu}><summary aria-controls="mobile-navigation"><span>Menú</span><span className="menu-lines" aria-hidden="true" /></summary><nav id="mobile-navigation" aria-label="Navegación móvil"><ul>{siteConfig.navigation.main.map(item => <li key={item.href}><Link onClick={closeMenu} href={item.href}>{item.label}<Icon /></Link></li>)}</ul><p>Diego García · Casanare, Colombia</p></nav></details>;
}

