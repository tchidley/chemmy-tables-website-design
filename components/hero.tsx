import Image from 'next/image'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh items-center justify-center overflow-hidden px-6 pt-24 pb-16"
    >
      <Image
        src="/images/background.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-bottom"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />

      <div className="relative flex max-w-3xl flex-col items-center text-center">
        <Image
          src="/images/logo.png"
          alt="Chemmy Tables logo"
          width={800}
          height={856}
          priority
          className="h-40 w-auto drop-shadow-[0_0_40px_rgba(234,179,8,0.35)] md:h-52"
        />
        <p className="mt-10 text-xs uppercase tracking-[0.4em] text-primary">Epoxy-Wood Tables</p>
        <h1 className="mt-4 font-serif text-6xl font-medium text-balance text-foreground md:text-8xl">
          Chemmy Tables
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground">
          A new company by Tristan Chidley, built to sell epoxy-wood tables.
        </p>
        <a
          href="#about"
          className="mt-10 inline-flex items-center rounded-sm border border-primary bg-primary px-8 py-3 text-xs font-medium uppercase tracking-[0.25em] text-primary-foreground transition-colors hover:bg-transparent hover:text-primary"
        >
          Learn more
        </a>
      </div>
    </section>
  )
}
