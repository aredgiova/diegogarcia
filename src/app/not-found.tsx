import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Página no encontrada",
  description: "Esta página no existe o fue movida.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center justify-center py-24">
      <Container>
        <div className="mx-auto max-w-md text-center">
          <p className="text-sm font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-widest">
            Error 404
          </p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Página no encontrada
          </h1>
          <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400">
            Lo sentimos, la página que buscas no existe o fue movida.
          </p>
          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-brand-600 px-6 font-medium text-white hover:bg-brand-700 transition-colors"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
