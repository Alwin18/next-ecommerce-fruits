import { CuratedCard } from "./curated-card"

const COLLECTIONS = [
  {
    id: 1,
    title: "Paket Isoman & Imunitas",
    description:
      "Jeruk, lemon, dan jambu biji untuk bantu menjaga daya tahan tubuh.",
    image: "/collections/immunity.png",
    href: "/products",
  },
  {
    id: 2,
    title: "Camilan Diet Sehat",
    description:
      "Pilihan buah rendah kalori untuk teman diet harian kamu.",
    image: "/collections/diet.png",
    href: "/products",
  },
  {
    id: 3,
    title: "Siap Saji tanpa Repot",
    description:
      "Buah potong segar yang praktis langsung disantap kapan saja.",
    image: "/collections/ready.png",
    href: "/products",
  },
]

export function CuratedSection() {
  return (
    <section className="w-full py-6">
      <div className="w-full">
        {/* HEADER */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold">
            Paket Sehat Pilihan
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Pilihan buah terbaik berdasarkan kebutuhan
            dan gaya hidup kamu.
          </p>
        </div>

        {/* LIST */}
        <div className="grid gap-4 lg:grid-cols-3">
          {COLLECTIONS.map((item) => (
            <CuratedCard
              key={item.id}
              {...item}
            />
          ))}
        </div>
      </div>
    </section>
  )
}