type InfoSectionProps = {
  id: string
  index: string
  eyebrow: string
  title: string
  children: React.ReactNode
}

export function InfoSection({ id, index, eyebrow, title, children }: InfoSectionProps) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-24 md:grid-cols-[1fr_2fr] md:gap-16">
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
