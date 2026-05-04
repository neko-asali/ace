import Image from "next/image";

export default function Home() {
  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "SERVICES", href: "#services" },
    { label: "PARTNERS", href: "#partners" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-white text-[#151515]">
      <header className="sticky top-0 z-30 border-b border-black/10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#" className="inline-flex items-center">
            <Image
              src="/images/brand/ace-logo.png"
              alt="Ace Creative Enterprise logo"
              width={180}
              height={58}
              priority
            />
          </a>
          <nav className="hidden items-center gap-8 text-sm font-bold tracking-wider md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-brand-red">
                {item.label}
              </a>
            ))}
          </nav>
          <details className="relative md:hidden">
            <summary className="list-none cursor-pointer rounded border border-black/20 px-3 py-2 text-sm font-bold">
              MENU
            </summary>
            <div className="absolute right-0 mt-2 w-44 rounded bg-black p-3 text-right text-xs font-bold tracking-widest text-white shadow-xl">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="block py-2 hover:text-brand-red">
                  {item.label}
                </a>
              ))}
            </div>
          </details>
        </div>
      </header>

      <main>
        <section
          id="home"
          className="relative isolate overflow-hidden bg-brand-black"
          style={{
            backgroundImage:
              "linear-gradient(rgba(46,63,95,.45), rgba(46,63,95,.45)), url('/images/home/hero-background-team.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto grid min-h-[58vh] max-w-6xl place-items-center px-5 py-16 md:px-8 md:py-20">
            <div className="max-w-4xl text-center text-white">
              <p className="mb-4 text-base font-semibold tracking-wide text-white md:text-4xl">
                Concept, Design, Manufacturing, Delivery
              </p>
              <h1 className="text-5xl font-medium leading-tight md:text-6xl">
                Kickstart your creative aspirations
              </h1>
              <p className="mt-3 text-5xl font-medium leading-tight md:text-6xl">
                Bring your ideas to life
              </p>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="relative isolate overflow-hidden bg-white py-16"
        >
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <h2 className="text-4xl font-black uppercase text-brand-red md:text-6xl">What We Do</h2>
            <p className="mt-5 max-w-4xl text-lg leading-relaxed text-[#151515] md:text-xl">
              We specialise in providing turn key design and manufacturing services for creators, artists, startups as
              well as for corporate entities. These include prototyping, packaging and production of various forms of
              plastics and metal to a final product that is a testament of our client&apos;s vision and goals.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8">
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            <article className="border border-black/10 bg-white p-8">
              <p className="text-4xl font-bold">Our forte</p>
              <p className="mt-5 text-2xl leading-relaxed text-muted">
                Ace Creative Enterprise provides custom design and manufacturing solutions for people who are
                passionate about collectibles and memorabilia.
              </p>
            </article>
            <article className="rounded-xl border border-black/10 bg-white p-8">
              <p className="text-4xl font-black leading-tight">Design and Concept Development</p>
              <p className="mt-5 text-2xl leading-relaxed text-muted">
                We work closely with our clients to bring creative concepts to life. Our design team is focused on
                providing clients with innovative and unique toy concept development services, ensuring attention to
                every detail for perfect toy products.
              </p>
            </article>
            <article className="rounded-xl border border-black/10 bg-white p-8">
              <p className="text-4xl font-black leading-tight">Customization and Branding</p>
              <p className="mt-5 text-2xl leading-relaxed text-muted">
                We offer professional customization services to help clients integrate their brand concepts into unique
                toy products, creating a personalized toy series.
              </p>
            </article>
          </div>
        </section>

        <section id="partners" className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <h2 className="text-4xl font-bold text-[#151515] md:text-5xl">Partners and Clients:</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="overflow-hidden rounded-lg border border-black/5 bg-[#f6f6f6] shadow-sm">
              <div className="relative aspect-[4/3] w-full bg-white">
                <Image
                  src="/images/partners/partner-caas-rws-singapore-airshow.png"
                  alt="Singapore Airlines model aircraft showcase"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold leading-snug text-[#2b2b2b] md:text-xl">
                  Civil Aviation Authority of Singapore (CAAS) and Resorts World Sentosa (RWS)
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  We have provided comprehensive toy solutions, including design, production, and logistics services,
                  for clients such as the Civil Aviation Authority of Singapore (CAAS) and Resorts World Sentosa (RWS),
                  ensuring efficient fulfillment of their needs.
                </p>
              </div>
            </article>
            <article className="overflow-hidden rounded-lg border border-black/5 bg-[#f6f6f6] shadow-sm">
              <div className="relative aspect-[4/3] w-full bg-[#0a0a12]">
                <Image
                  src="/images/partners/partner-toynami-robotech-blind-box.png"
                  alt="Robotech 30th anniversary blind box figurines"
                  fill
                  className="object-contain p-3"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold leading-snug text-[#2b2b2b] md:text-xl">
                  Partnership with TOYNAMI INC (USA) and TOYEAST LIMITED (Hong Kong)
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  We have closely partnered with TOYNAMI INC (USA) and TOYEAST LIMITED (Hong Kong). As their trusted
                  manufacturing partner, we produce high-standard toy products that ensure market competitiveness.
                </p>
              </div>
            </article>
            <article className="overflow-hidden rounded-lg border border-black/5 bg-[#f6f6f6] shadow-sm">
              <div className="grid grid-cols-3 gap-px bg-black/30">
                <div className="relative aspect-[3/4] min-h-[140px] bg-[#1a2332]">
                  <Image
                    src="/images/partners/ramen-toy-showcase-1.png"
                    alt="Ramen Toys collectible figure one"
                    fill
                    className="object-contain p-2 md:p-3"
                    sizes="(max-width: 768px) 34vw, 11vw"
                  />
                </div>
                <div className="relative aspect-[3/4] min-h-[140px] bg-[#1a2332]">
                  <Image
                    src="/images/partners/ramen-toy-showcase-2.png"
                    alt="Ramen Toys collectible figure two"
                    fill
                    className="object-contain p-2 md:p-3"
                    sizes="(max-width: 768px) 34vw, 11vw"
                  />
                </div>
                <div className="relative aspect-[3/4] min-h-[140px] bg-[#1a2332]">
                  <Image
                    src="/images/partners/ramen-toy-showcase-3.png"
                    alt="Ramen Toys collectible figure three"
                    fill
                    className="object-contain p-2 md:p-3"
                    sizes="(max-width: 768px) 34vw, 11vw"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold leading-snug text-[#2b2b2b] md:text-xl">Proud Manufacturer of Ramen Toys</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  We are the manufacturer of Ramen Toys, a brand established in 2021 that focuses on nostalgic and creative
                  toy products. We infuse every product with fine details, making them highly appealing and evoking fond
                  memories for collectors.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <p className="mb-4 text-sm uppercase tracking-[0.28em] text-brand-red">Ace Creative Enterprise</p>
          <div className="grid items-stretch gap-8 md:grid-cols-[1fr_1.8fr]">
            <div className="relative min-h-[300px] overflow-hidden border border-black/10 bg-[#f5f5f5]">
              <Image
                src="/images/about/about-founder-photo.png"
                alt="Founder profile and collectible display"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 36vw"
              />
            </div>
            <article className="border-2 border-black/40 bg-white p-6 md:p-10">
              <h2 className="text-3xl font-black uppercase leading-tight md:text-5xl">Founded In 2024</h2>
              <div className="mt-6 space-y-5 text-lg font-semibold uppercase leading-relaxed tracking-[0.08em] text-[#2b2b2b] md:text-2xl">
                <p>
                  Ace Creative Enterprise is a collector&apos;s brand focused on concept development, design and
                  manufacturing of quality collectibles that stand out from the competition.
                </p>
                <p>
                  We combine deep toy production know-how with practical execution to deliver products with strong
                  detailing, quality consistency and on-time fulfillment.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section id="capabilities" className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <h2 className="text-center text-4xl font-bold text-[#151515] md:text-5xl">Our Capabilities</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-start">
            <div className="relative min-h-[280px] w-full overflow-hidden rounded-lg border border-black/10 bg-[#eaeaea] md:min-h-[min(100%,560px)] md:self-stretch">
              <Image
                src="/images/capabilities/factory-workshop.png"
                alt="Factory workshop with production and quality checks"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col gap-4">
              <article className="flex gap-4 rounded-xl bg-[#f6f6f6] p-5 md:p-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-orange-500">
                  <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="5" r="2.5" fill="currentColor" />
                    <circle cx="6" cy="19" r="2.5" fill="currentColor" />
                    <circle cx="18" cy="19" r="2.5" fill="currentColor" />
                    <path
                      d="M12 7.5v4M12 11.5l-6 6M12 11.5l6 6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-[#151515] md:text-xl">Factory Production</h3>
                  <p className="mt-1 text-sm italic text-[#5b5b5b] md:text-base">
                    &quot;Reliable Manufacturing You Can Trust&quot;
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#333] md:text-base">
                    Ace Creative Enterprise&apos;s factory in China ensures high-quality manufacturing, planning and
                    control, delivering reliable, competitively priced products that stand out.
                  </p>
                </div>
              </article>
              <article className="flex gap-4 rounded-xl bg-[#f6f6f6] p-5 md:p-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-orange-500">
                  <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                    <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-[#151515] md:text-xl">Brand Sales</h3>
                  <p className="mt-1 text-sm italic text-[#5b5b5b] md:text-base">
                    &quot;Classic Brands with Timeless Appeal&quot;
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#333] md:text-base">
                    We partner with and create brands that combine nostalgia with quality, offering collectibles and
                    novelty items that resonate with global enthusiasts and collectors.
                  </p>
                </div>
              </article>
              <article className="flex gap-4 rounded-xl bg-[#f6f6f6] p-5 md:p-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-orange-500">
                  <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M1 3h15v13H1V3zm15 5h4l3 4v4h-7V8z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                    <circle cx="6.5" cy="18.5" r="2" fill="currentColor" />
                    <circle cx="17.5" cy="18.5" r="2" fill="currentColor" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-[#151515] md:text-xl">Quality Control</h3>
                  <p className="mt-1 text-sm italic text-[#5b5b5b] md:text-base">&quot;Excellence in Every Step&quot;</p>
                  <p className="mt-3 text-sm leading-relaxed text-[#333] md:text-base">
                    Ensuring rigorous checks across materials, assembly and finishing so each delivery meets agreed
                    specifications and reduces rework across the supply chain.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section
          className="relative isolate overflow-hidden bg-brand-black"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,.48), rgba(0,0,0,.58)), url('/images/home/cta-build-together-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto flex min-h-[280px] max-w-4xl flex-col items-center justify-center px-5 py-16 text-center md:min-h-[360px] md:py-24">
            <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">Let&apos;s Build Something Together</h2>
            <a
              href="mailto:ice@acece.co"
              className="mt-8 inline-flex rounded-md bg-[#f97316] px-8 py-3.5 text-sm font-bold tracking-wide text-white shadow-md transition hover:bg-[#ea580c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Reach out now
            </a>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t-4 border-brand-red bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 md:grid-cols-3 md:px-8">
          <div>
            <p className="text-2xl font-black uppercase text-brand-red">Ace Creative Enterprise</p>
            <p className="mt-2 text-sm text-muted">Your preferred production partner.</p>
            <p className="mt-2 text-sm text-muted">
              Environmental protection certification and safety standards compliant production.
            </p>
          </div>
          <div className="text-sm">
            <p className="font-bold uppercase">Contact</p>
            <p className="mt-2 text-muted">ice@acece.co</p>
            <p className="text-muted">RM12, 20/F, Ho King Commercial Centre, 2-16 Fa Yuen Street, Mong Kok, Hong Kong</p>
          </div>
          <div className="text-sm">
            <p className="font-bold uppercase">Important Links</p>
            <nav className="mt-2 flex flex-col gap-1 text-muted" aria-label="Footer">
              <a href="#home" className="transition hover:text-brand-red">
                HOME
              </a>
              <a href="#about" className="transition hover:text-brand-red">
                ABOUT
              </a>
              <a href="#services" className="transition hover:text-brand-red">
                SERVICES
              </a>
              <a href="#partners" className="transition hover:text-brand-red">
                PARTNERS
              </a>
              <a href="#contact" className="transition hover:text-brand-red">
                CONTACT
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
