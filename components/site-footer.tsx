import Image from 'next/image'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="" width={24} height={26} className="h-6 w-auto" />
          <span className="font-serif text-lg text-primary">Chemmy Tables</span>
        </div>
        <p>
          {'© '}
          {new Date().getFullYear()} Chemmy Tables. Made by Tristan Chidley.
        </p>
      </div>
    </footer>
  )
}
