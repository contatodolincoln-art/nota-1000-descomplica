import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/CountdownTimer";
import { TestimonialCard } from "@/components/TestimonialCard";
import { FeatureCard } from "@/components/FeatureCard";
import {
  CheckCircle2,
  Award,
  Users,
  BookOpen,
  Lightbulb,
  Target,
  TrendingUp,
  Sparkles,
  Clock,
  DollarSign,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import teacherImg from "@/assets/teacher-marcela.jpg";

const Index = () => {
  const scrollToCheckout = () => {
    const element = document.getElementById("checkout");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <div className="flex gap-4 justify-center flex-wrap">
              <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-yellow">
                19 anos de experiência
              </span>
              <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-cyan">
                +2.000 alunos impactados
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Sim, é possível conquistar uma{" "}
              <span className="text-secondary">redação nota 1000</span> no Enem.
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Descubra, em uma única aula, o método que já fez milhares de alunos passarem dos 900
              pontos — e que acertou o tema do Enem 3 vezes.
            </p>

            {/* Video Placeholder */}
            <div className="bg-accent/20 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto border-2 border-primary/30 animate-scale-in">
              <div className="aspect-video bg-accent/40 rounded-lg flex items-center justify-center">
                <div className="text-center space-y-3">
                  <div className="w-20 h-20 rounded-full bg-primary/80 flex items-center justify-center mx-auto hover:scale-110 transition-transform cursor-pointer shadow-cyan">
                    <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                  </div>
                  <p className="text-white text-lg font-medium">
                    Um recado da professora Marcela para você
                  </p>
                </div>
              </div>
            </div>

            <CountdownTimer />

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button onClick={scrollToCheckout} variant="hero" size="lg" className="text-lg px-12 py-7">
                Garantir minha vaga por R$ 39,90
              </Button>
              <Button
                onClick={() => document.getElementById("content")?.scrollIntoView({ behavior: "smooth" })}
                variant="outline"
                size="lg"
                className="text-lg px-8 py-7 bg-white/10 text-white border-white/30 hover:bg-white hover:text-foreground"
              >
                Ver o que você vai aprender
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre a Professora */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <img
                  src={teacherImg}
                  alt="Professora Marcela"
                  className="rounded-2xl shadow-cyan w-full max-w-md mx-auto"
                />
              </div>
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-4xl md:text-5xl font-bold">
                  Conheça a Professora <span className="text-primary">Marcela</span>
                </h2>
                <blockquote className="text-xl italic text-muted-foreground border-l-4 border-primary pl-4">
                  "Amar ensinar é o que me move. Ajudar alunos a vencerem o Enem é o que me
                  realiza."
                </blockquote>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold">19 anos</p>
                      <p className="text-sm text-muted-foreground">de experiência</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold">3 vezes</p>
                      <p className="text-sm text-muted-foreground">acertando o tema</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold">+2.000 alunos</p>
                      <p className="text-sm text-muted-foreground">impactados</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold">Método</p>
                      <p className="text-sm text-muted-foreground">prático e direto</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que você vai aprender */}
      <section id="content" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold">
                O que você vai <span className="text-primary">aprender</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Dois dias intensivos com tudo que você precisa para alcançar a nota máxima
              </p>
            </div>

            {/* Sexta-feira */}
            <div className="bg-primary/5 rounded-3xl p-8 md:p-12 border-2 border-primary/20 animate-fade-in-up">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold text-lg shadow-cyan">
                  Sexta - 31/10
                </div>
                <span className="text-muted-foreground font-medium">4 horas de conteúdo</span>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <FeatureCard
                  icon={BookOpen}
                  title="Estrutura dos parágrafos"
                  description="Aprenda a montar cada parágrafo de forma estratégica e convincente"
                />
                <FeatureCard
                  icon={Target}
                  title="Projeto de texto"
                  description="Planeje sua redação antes de escrever e economize tempo valioso"
                />
                <FeatureCard
                  icon={CheckCircle2}
                  title="Elementos obrigatórios"
                  description="Domine todos os requisitos que os corretores buscam na sua redação"
                />
                <FeatureCard
                  icon={Sparkles}
                  title="Gramática nota máxima"
                  description="Os segredos gramaticais que separam uma boa nota de uma nota 1000"
                />
                <FeatureCard
                  icon={Lightbulb}
                  title="Repertórios socioculturais"
                  description="Como usar referências de forma inteligente e impactante"
                />
                <FeatureCard
                  icon={TrendingUp}
                  title="Técnicas avançadas"
                  description="Métodos exclusivos que fazem sua redação se destacar"
                />
              </div>
            </div>

            {/* Sábado */}
            <div className="bg-secondary/5 rounded-3xl p-8 md:p-12 border-2 border-secondary/20 animate-fade-in-up">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-secondary text-secondary-foreground px-6 py-3 rounded-xl font-bold text-lg shadow-yellow">
                  Sábado - 01/11
                </div>
                <span className="text-muted-foreground font-medium">5 horas de correção ao vivo</span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <FeatureCard
                  icon={CheckCircle2}
                  title="Correção de 5 textos reais"
                  description="Veja na prática como aplicar tudo que aprendeu na sexta-feira"
                />
                <FeatureCard
                  icon={Target}
                  title="Possíveis temas e eixos"
                  description="Análise dos temas mais prováveis para o Enem 2025"
                />
                <FeatureCard
                  icon={Users}
                  title="Direitos humanos e minorias"
                  description="Como abordar temas sensíveis de forma apropriada"
                />
                <FeatureCard
                  icon={Sparkles}
                  title="Estratégias de repertório"
                  description="Técnicas avançadas para enriquecer sua argumentação"
                />
              </div>
            </div>

            <div className="text-center animate-fade-in">
              <Button onClick={scrollToCheckout} variant="cta" size="lg" className="text-lg px-12 py-7">
                Quero participar dos dois dias com desconto especial
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados Reais */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold">
                Eles conseguiram — e <span className="text-primary">você também pode</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Veja os resultados de quem confiou no método
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <TestimonialCard
                name="Ana Clara"
                score={980}
                text="O método da professora Marcela mudou completamente minha forma de escrever. Consegui 980 na redação e passei em Medicina!"
                year="Enem 2024"
              />
              <TestimonialCard
                name="Pedro Henrique"
                score={1000}
                text="Nota 1000! Não acreditei quando vi o resultado. A aula foi o divisor de águas na minha preparação."
                year="Enem 2023"
              />
              <TestimonialCard
                name="Julia Santos"
                score={960}
                text="Simples, direto e eficiente. Aprendi em 4 horas o que não aprendi em um ano de cursinho. Muito obrigada!"
                year="Enem 2024"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comparativo */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Aprenda em <span className="text-primary">4h</span> o que não se aprende em{" "}
              <span className="text-muted-foreground line-through">1 ano de cursinho</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sem enrolação, sem promessas vazias. Apenas o que realmente importa para alcançar a
              nota máxima.
            </p>

            <div className="grid md:grid-cols-4 gap-6 pt-8">
              <div className="bg-card rounded-xl p-6 shadow-soft border border-border animate-scale-in">
                <Clock className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Tempo</h3>
                <p className="text-sm text-muted-foreground">Apenas 4 horas focadas vs 1 ano inteiro</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-soft border border-border animate-scale-in">
                <Target className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Foco</h3>
                <p className="text-sm text-muted-foreground">Direto ao ponto, sem enrolação</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-soft border border-border animate-scale-in">
                <Sparkles className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Clareza</h3>
                <p className="text-sm text-muted-foreground">Método simples e comprovado</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-soft border border-border animate-scale-in">
                <TrendingUp className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Resultados</h3>
                <p className="text-sm text-muted-foreground">+2.000 alunos aprovados</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investimento */}
      <section id="checkout" className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center space-y-4 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold">
                Um investimento que <span className="text-primary">muda seu futuro</span>
              </h2>
            </div>

            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-cyan border-2 border-primary/20 animate-scale-in">
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <span className="text-lg">Aulão Completo (4h)</span>
                  <span className="text-lg font-bold line-through text-muted-foreground">
                    R$ 497,00
                  </span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <span className="text-lg">Bônus #1: PDF Repertórios</span>
                  <span className="text-lg font-bold line-through text-muted-foreground">
                    R$ 47,00
                  </span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <span className="text-lg">Bônus #2: Checklist Redação Perfeita</span>
                  <span className="text-lg font-bold line-through text-muted-foreground">
                    R$ 27,00
                  </span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <span className="text-lg">Bônus #3: Gravação vitalícia</span>
                  <span className="text-lg font-bold line-through text-muted-foreground">
                    R$ 97,00
                  </span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <span className="text-lg">Bônus #4: Surpresa especial</span>
                  <span className="text-lg font-bold text-primary">Incluso</span>
                </div>

                <div className="flex justify-between items-center pt-4">
                  <span className="text-xl font-bold">Valor Total:</span>
                  <span className="text-xl font-bold line-through text-muted-foreground">
                    R$ 668,00+
                  </span>
                </div>

                <div className="bg-secondary/10 rounded-2xl p-8 text-center space-y-4 border-2 border-secondary/30">
                  <p className="text-lg text-muted-foreground">Você paga hoje apenas</p>
                  <div className="space-y-2">
                    <p className="text-6xl font-bold text-primary">R$ 39,90</p>
                    <p className="text-sm text-muted-foreground">em até 12x sem juros</p>
                  </div>
                  <p className="text-base text-muted-foreground max-w-md mx-auto">
                    Menos que dois lanches. Menos que uma ida ao cinema.
                    <br />
                    <span className="font-bold text-foreground">
                      Para um conteúdo que pode mudar seu futuro.
                    </span>
                  </p>
                </div>

                <Button variant="cta" size="lg" className="w-full text-xl py-8">
                  <DollarSign className="w-6 h-6" />
                  Garantir minha vaga agora por R$ 39,90
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgência Final */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-pulse-soft">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              As vagas estão se esgotando
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Garanta seu acesso antes que o preço suba ou as vagas acabem
            </p>
            <div className="pt-4">
              <CountdownTimer />
            </div>
            <Button
              onClick={scrollToCheckout}
              variant="cta"
              size="lg"
              className="text-xl px-12 py-8 hover:scale-110"
            >
              Não perder essa oportunidade
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Redação Nota 1000 - Todos os direitos reservados
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
