"use client";

import type { FocusEvent, ReactNode } from "react";

export function CommunityVideoList({ children }: { children: ReactNode }) {
  const revealFocusedVideo = (event: FocusEvent<HTMLUListElement>) => {
    const list = event.currentTarget;
    const target = event.target;
    if (list.scrollWidth <= list.clientWidth || !(target instanceof HTMLAnchorElement)) return;
    if (target.matches(":focus-visible")) {
      target.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "instant" });
    }
  };

  return (
    <ul className="territory-stories" aria-label="Videos de nuestra comunidad" onFocus={revealFocusedVideo}>
      {children}
    </ul>
  );
}
