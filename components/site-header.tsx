import Image from 'next/image'

const links = [
  { href: '#about', label: 'About' },
  { href: '#why', label: 'Why' },
  { href: '#maker', label: 'Maker' },
]

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="" width={32} height={34} className="h-8 w-auto" />
          <span className="hidden font-serif text-xl tracking-wide text-primary sm:inline">Chemmy Tables</span>
        </a>
        <nav aria-label="Main">
          <ul className="flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-primary">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
