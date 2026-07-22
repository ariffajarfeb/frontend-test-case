import Link from "next/link";
import { useRouter } from "next/router";
import navigasiSoal from "../../lib/data/navigasiSoal";

export default function NavigasiSoal() {
  const router = useRouter();

  function sedangAktif(tautan) {
    if (tautan.href === "/") {
      return router.pathname === "/" || router.pathname.startsWith(tautan.path);
    }

    return router.pathname.startsWith(tautan.path);
  }

  return (
    <nav
      className="sticky top-0 z-20 ml-[calc((100%_-_100vw)/2)] w-screen border-b border-zinc-200 bg-zinc-50/95"
      aria-label="Navigasi soal"
    >
      <div className="mx-auto flex w-[min(1080px,calc(100%_-_40px))] flex-wrap items-center justify-between gap-4 py-4">
        <Link
          className="text-sm font-semibold tracking-[-0.02em] text-zinc-950"
          href="/"
        >
          Test Case Frontend
        </Link>
        <div className="flex flex-wrap items-center gap-5 text-sm text-zinc-500">
          {navigasiSoal.map((tautan) => {
            const aktif = sedangAktif(tautan);

            return (
              <Link
                aria-current={aktif ? "page" : undefined}
                className={
                  aktif
                    ? "border-b border-zinc-950 pb-1 font-medium text-zinc-950"
                    : "pb-1 hover:text-zinc-950"
                }
                href={tautan.href}
                key={tautan.href}
              >
                {tautan.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
