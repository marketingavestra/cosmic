import { createFileRoute } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";
import heroBgMobile from "@/assets/hero-bg-mobile.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import { Starfield, Particles } from "@/components/Starfield";
import { Sparkles, Eye, Infinity as InfinityIcon, Compass, Flame, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { useCtaUrl } from "@/hooks/use-cta-url";

export const Route = createFileRoute("/comunidade")({
  component: Comunidade,
  head: () => ({
    meta: [
      { title: "Comunidade dos Despertos" },
      {
        name: "description",
        content:
          "Uma comunidade de reconexão interna para desbloquear abundância emocional, energética e material.",
      },
      { property: "og:title", content: "Comunidade dos Despertos" },
      {
        property: "og:description",
        content: "Acesse a comunidade que nasceu para prosperar.",
      },
    ],
  }),
});

const pillars = [
  {
    icon: Eye,
    title: "Despertar",
    text: "Perceba os padrões invisíveis que mantêm você em escassez. As crenças. O medo de crescer. A culpa de receber. A necessidade constante de sobreviver.",
    quote: "Quem vive tentando sobreviver não consegue sustentar prosperidade.",
  },
  {
    icon: Flame,
    title: "Identidade",
    text: "Reconheça quem você precisou se tornar para ser aceito, amado, protegido. E perceba o quanto isso afastou você da sua verdadeira potência.",
    quote: "Você não nasceu para se diminuir para caber.",
  },
  {
    icon: InfinityIcon,
    title: "Expansão",
    text: "Ative o arquétipo interno da prosperidade. A abundância deixa de ser apenas um desejo externo e passa a existir na forma como você pensa, sente, decide e se posiciona.",
    quote: "Prosperidade também é conseguir existir sem se abandonar.",
  },
  {
    icon: Compass,
    title: "Materialização",
    text: "Transforme reconexão em realidade. Relacionamentos. Dinheiro. Trabalho. Presença. Valor pessoal. Porque sua realidade sempre acompanha sua identidade.",
    quote: "A vida muda quando você para de ocupar o mundo como alguém pequeno.",
  },
];

function Comunidade() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const ctaUrl = useCtaUrl("https://pay.kiwify.com.br/v6LsCcM");

  useEffect(() => {
    const onScroll = () => setShowStickyCTA(window.scrollY > window.innerHeight * 0.6);
    const onMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setParallax({ x, y });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouse, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <main className="relative overflow-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Starfield count={140} />
        <Particles count={14} />
      </div>

      {/* HERO */}
      <section className="relative min-h-[100svh] overflow-hidden flex items-center justify-center pt-20 pb-12 px-5">
        <picture>
          <source media="(max-width: 767px)" srcSet={heroBgMobile} />
          <img
            src={heroBg}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            style={{
              transform: `translate3d(${parallax.x * -20}px, ${parallax.y * -20}px, 0) scale(1.08)`,
              transition: "transform 0.4s cubic-bezier(0.2,0.8,0.2,1)",
            }}
            width={1920}
            height={1080}
            fetchPriority="high"
          />
        </picture>
      </section>

      {/* HEADLINE */}
      <section className="relative py-20 sm:py-32 px-5">
        <Starfield count={25} />
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="mb-24">
            <h1 className="font-display text-[2rem] sm:text-6xl md:text-7xl font-light mb-6 text-foreground leading-[1.15] sm:leading-[1.1] tracking-tight">
              COMUNIDADE DOS DESPERTOS <br className="hidden sm:block" />
              <span className="text-gradient">UMA COMUNIDADE</span>
            </h1>
            <p className="text-base sm:text-2xl text-muted-foreground font-light mb-10 max-w-2xl mx-auto leading-relaxed">
              A comunidade de reconexão interna para desbloquear abundância emocional, energética e material.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-12 text-sm sm:text-base text-muted-foreground/80">
              <div className="flex items-center gap-2">
                <span className="text-gold">✅</span> Sem fórmulas rasas de manifestação
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gold">✅</span> Sem precisar fingir positividade
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gold">✅</span> Sem espiritualidade superficial
              </div>
            </div>

            <a
              href={ctaUrl}
              className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-gradient-gold text-background font-semibold tracking-wide active:scale-95 transition-all duration-300 sm:hover:scale-105 glow-gold text-lg"
            >
              Quero entrar na Comunidade dos Despertos
            </a>
          </div>

          <hr className="border-gold/10 mb-24 max-w-xs mx-auto" />

          <span className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-gold mb-5 block">
            ✦ A Diferença ✦
          </span>
          <h2 className="font-display text-[1.75rem] sm:text-5xl md:text-6xl font-light mb-16 text-gradient leading-[1.2] sm:leading-[1.15]">
            Existe uma diferença entre buscar dinheiro… <br className="hidden sm:block" />
            E se sentir próspero por dentro.
          </h2>

          <div className="relative glass rounded-3xl p-8 sm:p-12 border border-gold/10 max-w-4xl mx-auto">
            <div className="absolute -top-1 -left-1 h-3 w-3 border-t border-l border-gold/40" />
            <div className="absolute -top-1 -right-1 h-3 w-3 border-t border-r border-gold/40" />
            <div className="absolute -bottom-1 -left-1 h-3 w-3 border-b border-l border-gold/40" />
            <div className="absolute -bottom-1 -right-1 h-3 w-3 border-b border-r border-gold/40" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              <div className="space-y-6">
                <p className="text-lg sm:text-2xl text-foreground/90 font-light font-display italic border-l-2 border-gold/30 pl-4">Muitas pessoas passam anos:</p>
                <ul className="space-y-4 text-muted-foreground font-light text-base sm:text-lg">
                  {["tentando crescer","produzir mais","manifestar abundância","atrair prosperidade"].map((item) => (
                    <li key={item} className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-gold/50" />{item}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <p className="text-lg sm:text-2xl text-foreground/90 font-light font-display italic border-l-2 border-red-500/30 pl-4">Mas continuam:</p>
                <ul className="space-y-4 text-muted-foreground font-light text-base sm:text-lg">
                  {["emocionalmente cansadas","vivendo em escassez","se sabotando","desconectadas da própria potência"].map((item) => (
                    <li key={item} className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-red-500/30" />{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 sm:mt-20 space-y-6 sm:space-y-8 text-lg sm:text-2xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
            <p>Porque prosperidade não começa no dinheiro. Ela começa na forma como você se enxerga, no quanto se permite receber, no espaço que acredita merecer ocupar.</p>
          </div>
        </div>
      </section>

      {/* O QUE É */}
      <section className="relative py-20 sm:py-32 px-5 bg-cosmic/5">
        <div className="relative max-w-3xl mx-auto text-center">
          <span className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-gold mb-5 block">✦ A Comunidade ✦</span>
          <h2 className="font-display text-[1.75rem] sm:text-5xl font-light mb-8 sm:mb-10 text-gradient leading-[1.2] sm:leading-[1.15]">
            COMUNIDADE DOS DESPERTOS É UMA COMUNIDADE DE RECONEXÃO INTERNA
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed mb-10">
            Uma experiência criada para pessoas que:
          </p>
          <ul className="space-y-4 text-left max-w-xl mx-auto text-muted-foreground font-light text-lg">
            <li className="flex items-center gap-3"><span className="text-gold">✦</span> cansaram de sobreviver emocionalmente</li>
            <li className="flex items-center gap-3"><span className="text-gold">✦</span> sentem medo de crescer</li>
            <li className="flex items-center gap-3"><span className="text-gold">✦</span> vivem em ciclos de escassez</li>
            <li className="flex items-center gap-3"><span className="text-gold">✦</span> e sabem que existe algo maior dentro delas tentando emergir</li>
          </ul>
          <div className="mt-16 p-8 rounded-3xl glass border-gold/10">
            <p className="text-xl text-foreground/90 font-light mb-6">Aqui, prosperidade não é só dinheiro.</p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-gold/80 font-display italic text-lg sm:text-xl">
              <span>presença</span><span>•</span><span>merecimento</span><span>•</span>
              <span>expansão</span><span>•</span><span>identidade</span><span>•</span><span>valor pessoal</span>
            </div>
          </div>
        </div>
      </section>

      {/* POTÊNCIA */}
      <section className="relative py-20 sm:py-32 px-5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,oklch(0.5_0.15_300_/_0.15),transparent_60%)] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="font-display text-[1.75rem] sm:text-5xl font-light mb-12 text-foreground leading-[1.2]">
            O QUE ACONTECE QUANDO VOCÊ <br className="hidden sm:block" />
            <span className="text-red-400/80">SE DESCONECTA DA SUA POTÊNCIA?</span>
          </h2>
          <div className="relative glass rounded-3xl p-8 sm:p-12 border border-red-500/10 max-w-2xl mx-auto text-left">
            <div className="absolute -top-1 -left-1 h-3 w-3 border-t border-l border-red-500/40" />
            <div className="absolute -top-1 -right-1 h-3 w-3 border-t border-r border-red-500/40" />
            <div className="absolute -bottom-1 -left-1 h-3 w-3 border-b border-l border-red-500/40" />
            <div className="absolute -bottom-1 -right-1 h-3 w-3 border-b border-r border-red-500/40" />
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Você: <br />
              <span className="block mt-4 space-y-3 text-lg">
                • trava decisões <br />
                • sente culpa ao receber <br />
                • diminui a própria luz <br />
                • aceita menos do que merece <br />
                • vive em exaustão emocional <br />
                • tenta crescer… mas algo sempre bloqueia
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* OS 4 PILARES */}
      <section className="relative py-20 sm:py-32 px-5">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cosmic/10 to-transparent" />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-14 sm:mb-20">
            <span className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-gold mb-5 block">✦ A Estrutura ✦</span>
            <h2 className="font-display text-[1.75rem] sm:text-5xl md:text-6xl font-light text-gradient leading-[1.2] sm:leading-[1.15]">
              O QUE VOCÊ VAI VIVER NA COMUNIDADE
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {pillars.map((p) => (
              <div key={p.title} className="group relative glass rounded-2xl p-6 sm:p-8 transition-all duration-500 active:scale-[0.98] sm:hover:-translate-y-2 sm:hover:glow-aurora">
                <div className="absolute inset-0 rounded-2xl bg-gradient-aurora opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                <div className="relative flex sm:block items-start gap-4">
                  <div className="inline-flex shrink-0 items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gradient-aurora/20 sm:mb-6 group-hover:scale-110 transition-transform duration-500">
                    <p.icon className="h-5 w-5 sm:h-6 sm:w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl mb-2 sm:mb-3 text-foreground">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-light">{p.text}</p>
                    <blockquote className="mt-4 pl-3 border-l border-gold/40 text-xs sm:text-sm italic text-foreground/80 leading-relaxed">"{p.quote}"</blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIA */}
      <section className="relative py-20 sm:py-32 px-5 bg-gold/5">
        <div className="relative max-w-3xl mx-auto text-center">
          <span className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-gold mb-5 block">✦ A Experiência ✦</span>
          <h2 className="font-display text-[2rem] sm:text-5xl font-light mb-10 text-gradient leading-[1.15]">UMA EXPERIÊNCIA PROFUNDA DE EXPANSÃO</h2>
          <p className="text-xl text-muted-foreground font-light mb-8">Você vai trabalhar:</p>
          <div className="border border-gold/30 rounded-2xl bg-gold/5 p-8 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {["Reconexão emocional","Merecimento","Desbloqueios internos","Expansão de identidade","Prosperidade energética","Fortalecimento pessoal","Alinhamento com abundância"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-lg text-foreground/90 font-light"><span>✅</span> {item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="relative py-20 sm:py-32 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 sm:mb-20">
            <span className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-gold mb-5 block">✦ Experiências da comunidade ✦</span>
            <h2 className="font-display text-[2rem] sm:text-5xl md:text-6xl font-light text-gradient leading-[1.15]">Atravesse a versão sua que vive em medo.</h2>
            <p className="mt-6 text-[15px] sm:text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-[1.7]">E acesse a que nasceu para expandir.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {[gallery1, gallery2, gallery3].map((src, i) => {
              const titles = ["Reconexão", "O Portal", "Corpo Próspero"];
              const captions = ["Voltar a sentir merecimento.","Atravessar a versão sua que vive em medo e acessar a que nasceu para expandir.","Sustentar abundância emocional, energética e material."];
              return (
                <div key={i} className="group relative aspect-[4/5] overflow-hidden rounded-2xl glass">
                  <img src={src} alt={titles[i]} loading="lazy" width={1024} height={1280} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <Star className="h-4 w-4 text-gold mb-2" />
                    <p className="font-display text-lg italic text-foreground/95">{titles[i]}</p>
                    <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">{captions[i]}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="relative py-20 sm:py-32 px-5">
        <div className="relative max-w-3xl mx-auto text-center">
          <span className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-gold mb-5 block">✦ Público ✦</span>
          <h2 className="font-display text-[1.75rem] sm:text-5xl font-light mb-8 sm:mb-10 text-gradient leading-[1.2] sm:leading-[1.15]">ESSA COMUNIDADE É PARA VOCÊ QUE…</h2>
          <ul className="space-y-4 text-left max-w-xl mx-auto text-muted-foreground font-light text-lg">
            {["Vive cansado emocionalmente","Sente que trava a própria vida","Tem medo de crescer","Sente culpa ao receber","Já buscou espiritualidade e autoconhecimento","Mas continua desconectado da própria potência"].map((item) => (
              <li key={item} className="flex items-center gap-3"><span className="text-gold text-xl">✔</span> {item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* O CHAMADO */}
      <section className="relative py-20 sm:py-32 px-5">
        <Starfield count={30} />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-gold mb-5 block">✦ O Chamado ✦</span>
          <h2 className="font-display text-[1.75rem] sm:text-5xl md:text-6xl font-light mb-10 text-gradient leading-[1.2] sm:leading-[1.15]">
            EXISTE UMA VIDA TENTANDO <br className="hidden sm:block" />ACONTECER ATRAVÉS DE VOCÊ.
          </h2>
          <div className="space-y-6 text-xl sm:text-2xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
            <p>Mas primeiro… você precisa parar de sobreviver como alguém pequeno.</p>
            <p className="text-foreground/90 italic">Prosperidade não é apenas conquistar mais. <br />É conseguir ocupar o próprio valor sem culpa.</p>
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ RECEBERÁ */}
      <section className="relative py-20 sm:py-32 px-5 bg-cosmic/10">
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-gold mb-5 block">✦ Conteúdo ✦</span>
            <h2 className="font-display text-[2rem] sm:text-5xl font-light text-gradient leading-[1.15]">O QUE VOCÊ RECEBERÁ</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20">
            <div className="glass p-6 sm:p-8 rounded-3xl border-gold/5">
              <ul className="space-y-4 text-muted-foreground font-light text-lg">
                {["Acesso completo à Comunidade dos Despertos","Os 4 Pilares de Expansão","Exercícios profundos de reconexão","Ativações emocionais e energéticas"].map((item) => (
                  <li key={item} className="flex items-start gap-3"><span className="text-gold mt-1">✅</span><span>{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="glass p-8 rounded-3xl border-gold/5">
              <ul className="space-y-4 text-muted-foreground font-light text-lg">
                {["Reflexões guiadas","Material digital complementar","Acesso à comunidade dos Despertos","Atualizações futuras"].map((item) => (
                  <li key={item} className="flex items-start gap-3"><span className="text-gold mt-1">✅</span><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center mb-12">
            <h3 className="font-display text-2xl sm:text-4xl font-light text-foreground/90">✦ BÔNUS EXCLUSIVOS ✦</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "BÔNUS 1 — Ritual de Reconexão", desc: "Uma prática guiada para desbloquear sensação de escassez emocional e fortalecer merecimento." },
              { title: "BÔNUS 2 — Diário da Expansão", desc: "Exercícios e perguntas profundas para reconstruir sua relação com dinheiro, identidade e valor pessoal." },
              { title: "SUPER BÔNUS — Leitura Arquétipa", desc: "Uma análise simbólica para ajudar você a compreender padrões internos e caminhos de expansão." },
            ].map((b) => (
              <div key={b.title} className="glass p-8 rounded-3xl border-gold/20 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-6 text-gold">🎁</div>
                <h4 className="font-display text-lg mb-4 text-foreground">{b.title}</h4>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="relative py-16 sm:py-32 px-5">
        <div className="relative max-w-3xl mx-auto text-center glass rounded-3xl p-6 sm:p-14 border-gold/10">
          <span className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-gold mb-5 block">✦ Segurança ✦</span>
          <h2 className="font-display text-[2rem] sm:text-5xl font-light mb-6 text-foreground">GARANTIA</h2>
          <h3 className="text-xl sm:text-2xl font-light text-muted-foreground mb-8">Você terá 7 dias de garantia.</h3>
          <p className="text-lg text-muted-foreground/80 font-light leading-relaxed max-w-2xl mx-auto">
            Se durante esse período sentir que essa comunidade não é para você, basta solicitar o reembolso. Sem burocracia.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-20 sm:py-32 px-5 bg-cosmic/5">
        <div className="relative max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-gold mb-5 block">✦ FAQ ✦</span>
            <h2 className="font-display text-[2rem] sm:text-5xl font-light text-gradient leading-[1.15]">PERGUNTAS FREQUENTES</h2>
          </div>
          <div className="space-y-6">
            {[
              { q: "Isso é apenas sobre dinheiro?", a: "Não. A prosperidade trabalhada aqui envolve identidade, merecimento, expansão emocional, abundância interna e a forma como você ocupa a própria vida." },
              { q: "Preciso entender de espiritualidade?", a: "Não. A comunidade foi criada para qualquer pessoa que sente desconexão, escassez, bloqueios internos ou medo de crescer." },
              { q: "A comunidade substitui terapia?", a: "Não. Ela funciona como uma experiência complementar de reconexão interna e expansão pessoal." },
              { q: "Como vou acessar?", a: "O acesso é 100% online e digital. Você poderá participar no seu tempo, de onde quiser." },
            ].map((item, i) => (
              <div key={i} className="glass p-6 sm:p-8 rounded-2xl border-gold/5">
                <h4 className="text-lg sm:text-xl font-display mb-4 text-foreground/90">{item.q}</h4>
                <p className="text-muted-foreground font-light leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="cta" className="relative py-24 sm:py-40 px-5 scroll-mt-20">
        <Starfield count={50} />
        <Particles count={12} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.4_0.18_290_/_0.3),transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <Sparkles className="h-7 w-7 text-gold mx-auto mb-6 animate-pulse" />
          <div className="relative glass rounded-[2.5rem] p-8 sm:p-14 border-gold/10 max-w-2xl mx-auto overflow-hidden">
            <div className="absolute top-0 left-0 h-4 w-4 border-t border-l border-gold/30" />
            <div className="absolute top-0 right-0 h-4 w-4 border-t border-r border-gold/30" />
            <div className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-gold/30" />
            <div className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-gold/30" />
            <h3 className="font-display text-xl sm:text-2xl mb-8 text-foreground/90 text-center">VEJA TUDO O QUE VOCÊ RECEBERÁ:</h3>
            <ul className="text-left space-y-3 text-sm sm:text-base text-muted-foreground font-light mb-12">
              {["Acesso à Comunidade dos Despertos","Os 4 Pilares de Expansão","Exercícios de reconexão emocional","Ativações energéticas","Ritual guiado de prosperidade","Diário da Expansão","Comunidade exclusiva","Leitura arquétipa bônus","Acesso digital vitalício"].map((item) => (
                <li key={item} className="flex items-center gap-3">✔ {item}</li>
              ))}
            </ul>
            <div className="space-y-8">
              <h2 className="font-display text-[2.5rem] sm:text-5xl font-light leading-[1.1] text-center">
                <span className="text-gradient">Sua expansão</span><br /><span className="italic">começa aqui.</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed max-w-md mx-auto text-center">
                Não para virar outra pessoa. Mas para acessar a versão sua que sempre existiu por baixo da escassez.
              </p>
              <div className="py-6 text-center">
                <span className="text-muted-foreground text-sm uppercase tracking-widest block mb-1">Acesso Imediato por apenas</span>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl text-gold/60 font-light">R$</span>
                  <span className="text-6xl sm:text-7xl font-display text-gold font-light tracking-tight">29,90</span>
                </div>
              </div>
              <a
                href={ctaUrl}
                className="w-full px-8 py-4 rounded-full bg-gradient-gold text-background font-medium tracking-wide active:scale-95 transition-all duration-300 sm:hover:scale-105 glow-gold inline-flex items-center justify-center text-lg uppercase max-w-sm mx-auto"
              >
                Quero entrar na Comunidade dos Despertos
              </a>
              <p className="text-[11px] sm:text-sm italic text-muted-foreground/80 max-w-md mx-auto leading-relaxed text-center">
                "A vida que você deseja talvez comece na identidade que você ainda não permitiu existir."
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative py-10 px-5 border-t border-border/30 pb-24 sm:pb-10">
        <div className="max-w-6xl mx-auto text-center text-[10px] sm:text-xs tracking-[0.3em] uppercase text-muted-foreground/60">
          Comunidade dos Despertos · Uma Comunidade · 2026
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className={`fixed bottom-0 left-0 right-0 z-50 sm:hidden px-4 pb-4 pt-6 bg-gradient-to-t from-background via-background/95 to-transparent transition-all duration-500 ${showStickyCTA ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"}`}>
        <a
          href={ctaUrl}
          className="flex items-center justify-center w-full px-8 py-4 rounded-full bg-gradient-gold text-background font-medium tracking-wide active:scale-95 transition glow-gold"
        >
          Quero entrar na Comunidade dos Despertos
        </a>
      </div>
    </main>
  );
}
