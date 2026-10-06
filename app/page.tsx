import { Hero } from '@/components/hero'
import { InfoSection } from '@/components/info-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { TableGallery } from '@/components/table-gallery'

const SAMPLE_URL = 'https://01a00f36-aa20-7386-b245-6edc4e38f5c0.arena.site'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />

        <InfoSection id="about" index="01" eyebrow="What it is" title="Epoxy-wood tables">
          <p>
            Chemmy Tables started with a logo and a set of epoxy-wood tables that have already been
            made. Those first pieces are the foundation for the company.
          </p>
        </InfoSection>

        <TableGallery />

        <InfoSection id="why" index="02" eyebrow="Why it matters" title="Turning a craft into a company">
          <p>The goal is simple: to start a company that sells epoxy-wood tables.</p>
        </InfoSection>

        <InfoSection id="maker" index="03" eyebrow="Who made it" title="Tristan Chidley">
          <p>Chemmy Tables is founded and made by Tristan Chidley.</p>
          <a
            href={SAMPLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 border-b border-primary pb-1 text-sm uppercase tracking-[0.2em] text-primary transition-opacity hover:opacity-80"
          >
            See more
            <span aria-hidden="true">{'→'}</span>
          </a>
        </InfoSection>
      </main>
      <SiteFooter />
    </>
  )
}
