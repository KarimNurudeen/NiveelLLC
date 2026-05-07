import Image from "next/image";
import ScrollReveal from "@/components/animations/ScrollReveal";

const CARDS = [
  {
    project: "OnnOn",
    category: "VIDEO CONFERENCING",
    img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80",
    color: "#6366F1",
    position: "object-center",
  },
  {
    project: "Cafa AI",
    category: "AI CHAT PLATFORM",
    img: "/screenshots/cafa-ai-chat.jpg",
    color: "#0EA5E9",
    position: "object-top",
  },
  {
    project: "Cafa Tickets",
    category: "EVENTS PLATFORM",
    img: "/screenshots/cafa-tickets-home.png",
    color: "#EF4444",
    position: "object-top",
  },
  {
    project: "Cafa AI",
    category: "AI CHAT PLATFORM",
    img: "/screenshots/cafa-ai-models.jpg",
    color: "#0EA5E9",
    position: "object-top",
  },
  {
    project: "Cafa Tickets",
    category: "EVENTS PLATFORM",
    img: "/screenshots/cafa-tickets-payments.png",
    color: "#EF4444",
    position: "object-top",
  },
  {
    project: "Cafa AI",
    category: "AI CHAT PLATFORM",
    img: "/screenshots/cafa-ai-history.jpg",
    color: "#0EA5E9",
    position: "object-top",
  },
  {
    project: "OnnOn",
    category: "VIDEO CONFERENCING",
    img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
    color: "#6366F1",
    position: "object-center",
  },
];

const ROW_1 = [CARDS[0], CARDS[1], CARDS[2], CARDS[3], CARDS[4]];
const ROW_2 = [CARDS[5], CARDS[6], CARDS[0], CARDS[2], CARDS[1]];
const ROW_3 = [CARDS[3], CARDS[4], CARDS[6], CARDS[5], CARDS[0]];

type CardData = (typeof CARDS)[0];

function Card({ project, category, img, color, position }: CardData) {
  return (
    <div className="relative w-[280px] h-[176px] shrink-0 rounded-xl overflow-hidden border border-white/10 mr-3 group">
      <Image
        src={img}
        alt={project}
        fill
        sizes="280px"
        className={`object-cover ${position} transition-transform duration-700 group-hover:scale-105`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
        <div>
          <p className="text-white font-serif text-sm leading-tight">{project}</p>
          <p className="text-white/50 font-mono text-[9px] tracking-widest mt-0.5">{category}</p>
        </div>
        <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: color }} />
      </div>
    </div>
  );
}

function MarqueeRow({
  cards,
  animClass,
}: {
  cards: CardData[];
  animClass: string;
}) {
  return (
    <div className="flex overflow-hidden">
      <div className={`flex ${animClass} min-w-max`}>
        {[...cards, ...cards].map((card, i) => (
          <Card key={i} {...card} />
        ))}
      </div>
    </div>
  );
}

export default function ProductsMarquee() {
  return (
    <section className="py-24 md:py-36 overflow-hidden bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-16 items-center">
          {/* ── Left text ── */}
          <div className="relative z-10 shrink-0">
            <ScrollReveal type="fadeUp">
              <span className="font-mono text-xs tracking-widest text-[var(--accent)] mb-4 block">
                OUR PRODUCTS
              </span>
            </ScrollReveal>
            <ScrollReveal type="clipBottom" className="mb-6">
              <h2 className="font-serif text-[clamp(2rem,4vw,4.5rem)] leading-tight text-white">
                BUILT FOR<br />THE WORLD
              </h2>
            </ScrollReveal>
            <ScrollReveal type="fadeUp" delay={0.1}>
              <p className="text-[#999] leading-relaxed">
                Three products — one mission. OnnOn connects people, Cafa AI empowers them, and Cafa Tickets brings them together.
              </p>
            </ScrollReveal>
          </div>

          {/* ── Right: rotating marquee rows ── */}
          <div className="relative h-[440px] overflow-hidden">
            {/*
              Expand the rotated container past its clip boundary so the
              rotated edges never show as empty corners.
            */}
            <div
              className="absolute flex flex-col gap-3 justify-center"
              style={{
                top: "-25%",
                left: "-15%",
                right: "-15%",
                bottom: "-25%",
                transform: "rotate(-12deg)",
              }}
            >
              <MarqueeRow cards={ROW_1} animClass="animate-marquee-slow" />
              <MarqueeRow cards={ROW_2} animClass="animate-marquee-reverse" />
              <MarqueeRow cards={ROW_3} animClass="animate-marquee-fast" />
            </div>

            {/* Left + right fade masks */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#111111] to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#111111] to-transparent pointer-events-none z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
