import Image from 'next/image'
import { Molecule } from '@/components/molecule'

const tables = [
  {
    src: '/images/table-1.jpg',
    alt: 'Round live-edge wood table with a glowing teal epoxy river and illuminated edge, on dark metal legs',
    width: 2211,
    height: 1659,
    label: 'Table 01',
  },
  {
    src: '/images/table-2-v2.jpg',
    alt: 'Oval walnut slab table with turquoise pearlescent epoxy rivers, on black metal legs',
    width: 3264,
    height: 2448,
    label: 'Table 02',
  },
  {
    src: '/images/table-3-v2.jpg',
    alt: 'Rectangular wood slab top with sparkling red epoxy and a blue crystal-filled crack',
    width: 2888,
    height: 1066,
    label: 'Table 03',
  },
]

export function TableGallery() {
  return (
    <section id="tables" className="relative scroll-mt-20 overflow-hidden border-t border-border">
      <Molecule
        variant="benzene"
        className="pointer-events-none absolute -left-10 top-10 h-auto w-40 -rotate-12 text-primary opacity-[0.08] md:w-56"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">The work so far</p>
            <h2 className="mt-4 font-serif text-4xl font-medium text-balance md:text-5xl">
              Tables already built
            </h2>
          </div>
          <p className="max-w-sm text-lg leading-relaxed text-muted-foreground">
            Three epoxy-wood tables built by Tristan Chidley.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {tables.map((table, i) => (
            <li
              key={table.src}
              className={`group overflow-hidden border border-border bg-black ${i === 0 ? 'md:col-span-2' : ''}`}
            >
              <figure>
                <div className="relative overflow-hidden">
                  <Image
                    src={table.src || '/placeholder.svg'}
                    alt={table.alt}
                    width={table.width}
                    height={table.height}
                    sizes={i === 0 ? '(min-width: 1152px) 1104px, 100vw' : '(min-width: 768px) 50vw, 100vw'}
                    className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="flex items-center justify-between border-t border-border px-5 py-4 text-xs uppercase tracking-[0.25em]">
                  <span className="text-primary">{table.label}</span>
                  <span className="text-muted-foreground">Epoxy &amp; wood</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
