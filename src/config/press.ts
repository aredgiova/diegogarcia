export interface PressBulletin {
  id: string;
  code: string;
  title: string;
  date: string;
  dateLabel: string;
  file: string;
  pages: number;
  bytes: number;
}

// Add new PDFs to public/documents/prensa and list them here, newest first.
// This first bulletin's date comes from the supplied PDF filename.
export const pressBulletins: readonly PressBulletin[] = [
  {
    id: "cp-0013dg",
    code: "0013DG",
    title: "¡Con lupa en mano! Diego García asume nueva responsabilidad de vigilancia desde el Congreso.",
    date: "2026-08-26",
    dateLabel: "26 de agosto de 2026",
    file: "/documents/prensa/cp-0013dg-comision-especial-2026-08-26.pdf",
    pages: 2,
    bytes: 170983,
  },
];
