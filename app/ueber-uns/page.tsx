import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Über uns | Senury",
  description: "Lernen Sie das Team hinter Senury kennen – drei Gründer mit einer gemeinsamen Vision für die Zukunft des Notariats.",
};

const teamMembers = [
  {
    name: "Jun Probst",
    role: "Co-Founder & Strategie",
    image: {
      avif: "/about/jun.avif",
      webp: "/about/jun.webp",
      fallback: "/about/jun.jpeg",
    },
    education: "Studiert Mathematik, Wirtschaft und Programmieren in Utrecht",
    bio: [
      "Für mich ist es ein großes Glück, mit Notaren zusammenzuarbeiten. Ich selbst komme aus einer Notarsfamilie in Blankenese. Daher ist dies ein Teil meiner Kindheit. Etwas, das damals fern und unverständlich war, ist jetzt Ambition und Interesse. Es bringt mich näher an meine Familie, an mein Team, aber auch an mich selbst. Und genau so hoffe ich, dass es mich näher an Sie bringt. An Notare, mit denen wir gemeinsam etwas verändern wollen.",
      "Was ist Senury für mich?",
      "Ein Restaurant mit guter Qualität, aber noch besseren Preisen; wo dir Leitungswasser kostenlos angeboten wird, wo die Bedienung Spaß am Job hat und dich herzlich empfängt. Das ist Senury für mich. Etwas Reales, Veränderndes. Etwas, das Notare entlastet und zufriedenstellt."
    ],
    number: "01",
  },
  {
    name: "Johan Kawamura",
    role: "Co-Founder & Softwareentwicklung",
    image: {
      avif: "/about/johan.avif",
      webp: "/about/johan.webp",
      fallback: "/about/johan.avif",
    },
    education: "Studiert Bioinformatik in Berlin",
    bio: [
      "Schon seit meiner Jugend begeistert mich das Programmieren. Als ich mit 14 mein erstes eigenes Videospiel entwickelte, spürte ich zum ersten Mal dieses besondere Adrenalin ein Gefühl, das mich bis heute bei jeder neuen Zeile Code begleitet. Heute arbeite ich gemeinsam mit zwei weiteren Personen an einer echten Software mit realem Nutzen. Besonders fasziniert mich Künstliche Intelligenz und zu sehen, wie unser Modell beginnt, Sprache zu verstehen und schließlich ganze Verträge zu verfassen. Mit Senury erfülle ich mir den Traum, eine eigene Software zu bauen, die Menschen wirklich hilft.",
      "Was ist Senury für mich?",
      "Senury ist für mich wie eine gut geschriebene Urkunde. Klar, reduziert und ohne Spielereien. Alles hat Gewicht, alles ist bewusst gesetzt. Sie schafft Sicherheit, ohne sich in den Vordergrund zu drängen genau so soll Senury Notare unterstützen: leise, verlässlich und mit Respekt vor ihrer Arbeit."
    ],
    number: "02",
  },
  {
    name: "Tom Pilgram",
    role: "Co-Founder & Systemdesign",
    image: {
      avif: "/about/tom.avif",
      webp: "/about/tom.webp",
      fallback: "/about/tom.webp",
    },
    education: "Studiert Mathematik in Hagen",
    bio: [
      "Ich komme aus der Technik und baue Dinge am liebsten dort, wo sie wirklich gebraucht werden. Die Arbeit mit Notaren hat mir schnell gezeigt, wie viel Verantwortung, Präzision und Konzentration dieser Beruf täglich verlangt und wie wenig Raum für unnötige Reibung bleibt.",
      "Was ist Senury für mich?",
      "Senury ist eine Kokosnuss. Außen robust und schützend, innen zeigt sie sich weich, anpassungsfähig und überraschend vielseitig. Jede Schicht hat ihren Sinn, nichts ist überflüssig. Alles ist nutzbar und auf das wesentliche reduziert."
    ],
    number: "03",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fdfcfb]">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-[#fdfcfb] to-white overflow-hidden">
        {/* Subtle decorative element - single arc suggesting connection */}
        <svg className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-[0.03] hidden lg:block" width="400" height="100" viewBox="0 0 400 100" fill="none">
          <path d="M0,100 Q200,0 400,100" stroke="#1a1a1a" strokeWidth="1"/>
        </svg>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            {/* Refined pill badge with copper accent */}
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-[#c9a66b]/40" />
              <span className="inline-flex items-center px-4 py-2 bg-white border border-[#e8e8e8] text-xs font-medium text-[#6b6b6b] rounded-full shadow-sm">
                Über uns
              </span>
              <div className="w-8 h-px bg-[#c9a66b]/40" />
            </div>

            <h1 className="font-serif font-medium text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] mb-6 tracking-tight">
              Das Team hinter Senury
            </h1>

            <p className="text-lg text-[#6b6b6b] leading-relaxed max-w-2xl mx-auto">
              Lernen Sie die drei Gründer kennen, die mit Leidenschaft für Präzision die Zukunft des Notariats gestalten.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-16 lg:space-y-24">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? "" : ""
                }`}
              >
                {/* Image */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className={`relative aspect-[4/5] max-w-sm mx-auto ${index % 2 === 1 ? "lg:ml-auto" : "lg:mr-auto"} rounded-xl overflow-hidden bg-[#faf8f7]`}>
                    <picture>
                      <source srcSet={member.image.avif} type="image/avif" />
                      <source srcSet={member.image.webp} type="image/webp" />
                      <Image
                        src={member.image.fallback}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </picture>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className={`space-y-4 ${index % 2 === 1 ? "lg:text-right lg:ml-auto" : ""} max-w-lg`}>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-widest text-[#c9a66b] mb-2 block">
                        {member.role}
                      </span>
                      <h2 className="font-serif text-3xl lg:text-4xl font-medium text-[#1a1a1a]">
                        {member.name}
                      </h2>
                      {"education" in member && member.education && (
                        <p className="mt-2 text-xs text-[#9a9a9a]">
                          {member.education}
                        </p>
                      )}
                    </div>
                    <div className={`w-12 h-px bg-[#e8e8e8] ${index % 2 === 1 ? "lg:ml-auto" : ""}`} />
                    <div className="space-y-4">
                      {Array.isArray(member.bio) ? (
                        <>
                          <p className="text-[#6b6b6b] leading-relaxed">
                            {member.bio[0]}
                          </p>
                          <h3 className="font-serif text-xl text-[#1a1a1a] mt-6 mb-2">
                            {member.bio[1]}
                          </h3>
                          <p className="text-[#6b6b6b] leading-relaxed">
                            {member.bio[2]}
                          </p>
                        </>
                      ) : (
                        <p className="text-[#6b6b6b] leading-relaxed">
                          {member.bio}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section - Full bleed with texture */}
      <section className="relative py-24 lg:py-40 bg-[#1a1a1a] overflow-hidden">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          {/* Large quote mark */}
          <span className="block font-serif text-[10rem] lg:text-[14rem] font-medium text-[#c9a66b]/20 leading-none -mb-20 lg:-mb-32">
            &ldquo;
          </span>

          <blockquote className="relative font-serif text-2xl sm:text-3xl lg:text-4xl text-white leading-relaxed">
            Wir glauben daran, dass Kundenzufriedenheit und Qualität der Schlüssel zum Erfolg ist.
          </blockquote>

          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-[#c9a66b]" />
            <span className="text-sm text-[#9a9a9a] uppercase tracking-[0.3em]">Das Gründerteam</span>
            <div className="w-12 h-px bg-[#c9a66b]" />
          </div>
        </div>
      </section>

      {/* Values - Minimal Grid with Hover Effects */}
      <section className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9a9a9a] mb-4 block">
              Unsere Grundsätze
            </span>
            <h2 className="font-serif text-3xl lg:text-5xl font-medium text-[#1a1a1a]">
              Was uns antreibt
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Präzision",
                description: "Wie die deutsche Rechtstradition legen wir höchsten Wert auf Genauigkeit und Zuverlässigkeit in jedem Detail.",
                icon: "◈",
              },
              {
                title: "Innovation",
                description: "Mit technologischem Innovationsgeist nutzen wir KI, um bewährte Prozesse zu optimieren, nicht zu ersetzen.",
                icon: "◉",
              },
              {
                title: "Vertrauen",
                description: "§203 StGB-konform von Grund auf – weil Vertraulichkeit im Notariat nicht verhandelbar ist.",
                icon: "◆",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="group relative p-8 lg:p-10 bg-white border border-[#e8e8e8] hover:border-[#c9a66b]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-elevated"
              >
                {/* Icon */}
                <span className="block font-serif text-4xl text-[#e8e8e8] group-hover:text-[#c9a66b] transition-colors duration-500 mb-6">
                  {value.icon}
                </span>

                <h3 className="font-serif text-2xl font-medium text-[#1a1a1a] mb-3 group-hover:text-[#c9a66b] transition-colors duration-500">
                  {value.title}
                </h3>

                <p className="text-[#6b6b6b] text-sm leading-relaxed">
                  {value.description}
                </p>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#c9a66b] group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Asymmetric Layout */}
      <section className="relative py-24 lg:py-32 bg-[#faf8f7] border-t border-[#e8e8e8] overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f5f5f5] -skew-x-12 translate-x-1/4" />
        <div className="absolute bottom-12 left-12 w-24 h-24 border border-[#c9a66b]/30 rounded-full" />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:max-w-xl">
              <h2 className="font-serif font-medium text-4xl lg:text-5xl xl:text-6xl text-[#1a1a1a] leading-tight">
                Lassen Sie uns gemeinsam die Zukunft gestalten
              </h2>
            </div>

            <div className="flex flex-col items-start gap-6">
              <p className="text-[#6b6b6b] max-w-sm">
                Haben Sie Fragen zu Senury oder möchten Sie mehr über unsere Vision erfahren?
              </p>
              <Link
                href="/kontakt/"
                className="group inline-flex items-center gap-3 h-14 px-8 bg-[#1a1a1a] text-white hover:bg-[#c9a66b] rounded-full text-base font-medium transition-all duration-300"
              >
                Kontakt aufnehmen
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
