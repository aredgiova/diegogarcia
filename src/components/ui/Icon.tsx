import type { SVGProps } from "react";
type IconName = "arrow" | "download" | "instagram" | "facebook" | "tiktok" | "message" | "play" | "agriculture" | "energy" | "region";
const paths: Record<IconName, React.ReactNode> = {
  arrow: <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
  play: <path d="m8 5 11 7-11 7z" />,
  download: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5M12 15V3" /></>,
  instagram: <><rect width="20" height="20" x="2" y="2" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><path d="M17.5 6.5h.01" /></>,
  facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  tiktok: <path d="M14 3h3a5 5 0 0 0 5 5v3a8 8 0 0 1-5-1.75V16a6 6 0 1 1-6-6v3a3 3 0 1 0 3 3V3z" />,
  agriculture: <><path d="M12 15V9M12 10C7 10 5 7 5 3c5 0 7 3 7 7ZM12 12c0-5 2-7 7-7 0 5-2 7-7 7Z" /><path d="M3 18c6-3 12-3 18 0M3 22c6-3 12-3 18 0" /></>,
  energy: <path d="m13 2-9 12h7l-1 8L20 9h-8l1-7Z" />,
  region: <><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6ZM9 3v15M15 6v15" /><path d="m6 14 5-4 3 2 4-5M15 7h3v3" /></>,
  message: <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />,
};
export function Icon({ name = "arrow", ...props }: SVGProps<SVGSVGElement> & { name?: IconName }) {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>;
}

