import { Molecule, type MoleculeVariant } from '@/components/molecule'

type InfoSectionProps = {
  id: string
  index: string
  eyebrow: string
  title: string
  molecule?: MoleculeVariant
  children: React.ReactNode
}

export function InfoSection({ id, index, eyebrow, title, molecule, children }: InfoSectionProps) {
  return (
    <section id={id} className="relative scroll-mt-20 overflow-hidden border-t border-border">
      {molecule && (
        <Molecule
          variant={molecule}
          className="pointer-events-none absolute -right-12 top-1/2 h-auto w-64 -translate-y-1/2 rotate-12 text-primary opacity-[0.09] md:w-96"
        />
      )}
      <div className="relative mx-auto grid max-w-6xl gap-8 px-6 py-24 md:grid-cols-[1fr_2fr] md:gap-16">
        <div>
          <p className="font-serif text-5xl text-primary/40">{index}</p>
          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
        </div>
        <div>
          <h2 className="font-serif text-4xl font-medium text-balance md:text-5xl">{title}</h2>
          <div className="mt-6 text-lg leading-relaxed text-pretty text-muted-foreground">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
