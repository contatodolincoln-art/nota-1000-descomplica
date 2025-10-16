import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/CountdownTimer";
import { TestimonialCard } from "@/components/TestimonialCard";
import { FeatureCard } from "@/components/FeatureCard";
import { StudentTestimonialCard } from "@/components/StudentTestimonialCard";
import { VideoTestimonialCarousel } from "@/components/VideoTestimonialCarousel";
import { FloatingCTA } from "@/components/FloatingCTA";
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
import studentBeatriz from "@/assets/student-beatriz.jpg";
import studentLucas from "@/assets/student-lucas.jpg";
import studentCamila from "@/assets/student-camila.jpg";

const Index = () => {
  const scrollToCheckout = () => {
    const element = document.getElementById("checkout");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-background">
      <FloatingCTA onClick={scrollToCheckout} />
      
      {/* Hero Section - Redesigned Premium */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-muted/20">
        {/* Subtle animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Badges */}
            <div className="flex gap-3 justify-center flex-wrap mb-12 animate-fade-in">
              <span className="bg-secondary text-secondary-foreground px-5 py-2.5 rounded-full text-sm font-bold shadow-yellow-sm hover:scale-105 transition-transform">
                ✨ 19 anos de experiência
              </span>
              <span className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-bold shadow-cyan-sm hover:scale-105 transition-transform">
                🎯 +2.000 alunos impactados
              </span>
            </div>

            {/* Main Grid Layout */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Video */}
              <div className="order-2 lg:order-1 animate-slide-in-left">
                <div className="bg-gradient-to-br from-white to-muted/30 backdrop-blur-sm rounded-3xl p-6 shadow-premium border border-border/50">
                  <div className="aspect-video bg-gradient-to-br from-muted/80 to-muted/40 rounded-2xl flex items-center justify-center relative overflow-hidden group">
                    {/* Play button with glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10 text-center space-y-4">
                      <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center mx-auto hover:scale-110 transition-all duration-300 cursor-pointer shadow-cyan animate-pulse-glow">
                        <div className="w-0 h-0 border-l-[24px] border-l-white border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent ml-2"></div>
                      </div>
                      <p className="text-foreground text-lg font-semibold px-4">
                        🎬 Um recado da professora Jéssica para você
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-muted-foreground">⏱️ Assista agora e descubra o método</p>
                  </div>
                </div>
              </div>

              {/* Right Side - Text & CTA */}
              <div className="order-1 lg:order-2 space-y-8 animate-slide-in-right">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
                  Conquiste uma{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-secondary to-secondary/80 animate-shimmer bg-[length:200%_auto]">
                    redação nota 1000
                  </span>{" "}
                  no Enem
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                  Descubra o método que já transformou{" "}
                  <span className="font-semibold text-foreground">milhares de alunos</span> em{" "}
                  <span className="font-semibold text-foreground">aprovados</span> — e que acertou o tema do Enem{" "}
                  <span className="font-semibold text-primary">3 vezes</span>.
                </p>

                <CountdownTimer />

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    onClick={scrollToCheckout} 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-7 shadow-cyan hover:shadow-cyan-sm hover:scale-105 transition-all duration-300 animate-pulse-soft"
                  >
                    💎 Garantir vaga por R$ 39,90
                  </Button>
                  <Button
                    onClick={() => document.getElementById("content")?.scrollIntoView({ behavior: "smooth" })}
                    variant="outline"
                    className="text-lg px-8 py-7 border-2 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                  >
                    📚 Ver conteúdo completo
                  </Button>
                </div>

                {/* Trust indicators */}
                <div className="flex flex-wrap gap-6 pt-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>Acesso imediato</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>Gravação vitalícia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>Bônus inclusos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre a Professora */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
        {/* Parallax background effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="animate-slide-in-left">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-30"></div>
                  <img
                    src={teacherImg}
                    alt="Professora Jéssica"
                    className="relative rounded-3xl shadow-premium w-full max-w-md mx-auto hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>
              
              <div className="space-y-8 animate-fade-in-delayed">
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Conheça a Professora{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
                      Jéssica
                    </span>
                  </h2>
                  <blockquote className="text-xl md:text-2xl text-muted-foreground border-l-4 border-primary pl-6 py-2 italic leading-relaxed">
                    "Transformar sonhos em aprovações é o que me move. Cada aluno que alcança nota 1000 é uma vitória que celebro."
                  </blockquote>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-5 hover:shadow-cyan-sm transition-all duration-300 group">
                    <Award className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                    <p className="font-bold text-xl mb-1">19 anos</p>
                    <p className="text-sm text-muted-foreground">de experiência</p>
                  </div>
                  <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-2xl p-5 hover:shadow-yellow-sm transition-all duration-300 group">
                    <Target className="w-8 h-8 text-secondary mb-3 group-hover:scale-110 transition-transform" />
                    <p className="font-bold text-xl mb-1">3 vezes</p>
                    <p className="text-sm text-muted-foreground">acertou o tema</p>
                  </div>
                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-5 hover:shadow-cyan-sm transition-all duration-300 group">
                    <Users className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                    <p className="font-bold text-xl mb-1">+2.000</p>
                    <p className="text-sm text-muted-foreground">alunos aprovados</p>
                  </div>
                  <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-2xl p-5 hover:shadow-yellow-sm transition-all duration-300 group">
                    <Lightbulb className="w-8 h-8 text-secondary mb-3 group-hover:scale-110 transition-transform" />
                    <p className="font-bold text-xl mb-1">Método único</p>
                    <p className="text-sm text-muted-foreground">comprovado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que você vai aprender */}
      <section id="content" className="py-24 md:py-32 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto space-y-20">
            <div className="text-center space-y-6 animate-fade-in max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                O que você vai <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">aprender</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Dois dias intensivos com <span className="font-semibold text-foreground">tudo que você precisa</span> para alcançar a nota máxima
              </p>
            </div>

            {/* Sexta-feira */}
            <div className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-3xl p-8 md:p-12 border-2 border-primary/20 shadow-cyan-sm hover:shadow-cyan transition-all duration-500 animate-fade-in-up">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10">
                <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-8 py-4 rounded-2xl font-bold text-xl shadow-cyan-sm">
                  📅 Sexta - 31/10
                </div>
                <span className="text-muted-foreground font-semibold text-lg">⏱️ 4 horas de conteúdo</span>
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
            <div className="bg-gradient-to-br from-secondary/5 via-secondary/10 to-secondary/5 rounded-3xl p-8 md:p-12 border-2 border-secondary/20 shadow-yellow-sm hover:shadow-yellow transition-all duration-500 animate-fade-in-up">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10">
                <div className="bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground px-8 py-4 rounded-2xl font-bold text-xl shadow-yellow-sm">
                  📅 Sábado - 01/11
                </div>
                <span className="text-muted-foreground font-semibold text-lg">⏱️ 5 horas de correção ao vivo</span>
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

            <div className="text-center animate-fade-in pt-8">
              <Button 
                onClick={scrollToCheckout} 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg md:text-xl px-12 py-7 shadow-yellow hover:shadow-yellow-sm hover:scale-105 transition-all duration-300"
              >
                🎓 Quero participar dos dois dias completos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados Reais */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-6 animate-fade-in max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Eles conseguiram — e{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
                  você também pode
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Veja os resultados de quem confiou no método
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
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

      {/* Relatos com Foto - Seção 1 */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-6 animate-fade-in max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Histórias de{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
                  Sucesso
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Conheça quem transformou o sonho em realidade com o método da professora Jéssica
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              <StudentTestimonialCard
                photo={studentBeatriz}
                name="Beatriz Oliveira"
                year="Turma de 2024"
                score={980}
                testimonial="A professora Marcela me ensinou a escrever com clareza e objetividade. Passei em Direito na USP!"
              />
              <StudentTestimonialCard
                photo={studentLucas}
                name="Lucas Mendes"
                year="Turma de 2023"
                score={1000}
                testimonial="Nota máxima! O método é simples e eficiente. Aprendi em 4 horas o que não aprendi em anos."
              />
              <StudentTestimonialCard
                photo={studentCamila}
                name="Camila Rodrigues"
                year="Turma de 2024"
                score={960}
                testimonial="A aula mudou minha forma de escrever. Consegui 960 pontos e realizei o sonho de cursar Medicina."
              />
              <StudentTestimonialCard
                photo="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
                name="Rafael Silva"
                year="Turma de 2023"
                score={940}
                testimonial="Método prático e direto ao ponto. A professora realmente domina o que ensina. Recomendo demais!"
              />
              <StudentTestimonialCard
                photo="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop"
                name="Mariana Costa"
                year="Turma de 2024"
                score={970}
                testimonial="Aprendi os segredos da redação nota mil. Consegui 970 pontos e hoje estudo Engenharia na UFRJ."
              />
              <StudentTestimonialCard
                photo="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
                name="Gabriel Ferreira"
                year="Turma de 2023"
                score={990}
                testimonial="Incrível! A professora simplifica o complexo. Minha nota foi 990 e hoje estou na federal dos meus sonhos."
              />
              <StudentTestimonialCard
                photo="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop"
                name="Fernanda Lima"
                year="Turma de 2024"
                score={950}
                testimonial="Método transformador! Minha redação evoluiu muito e consegui a nota que precisava."
              />
              <StudentTestimonialCard
                photo="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=400&fit=crop"
                name="Diego Souza"
                year="Turma de 2023"
                score={920}
                testimonial="Aula objetiva e eficiente. Aprendi técnicas que realmente fazem diferença na nota."
              />
              <StudentTestimonialCard
                photo="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop"
                name="Juliana Pereira"
                year="Turma de 2024"
                score={975}
                testimonial="975 pontos! A professora ensina com clareza e domínio total do conteúdo."
              />
              <StudentTestimonialCard
                photo="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop"
                name="Rodrigo Almeida"
                year="Turma de 2023"
                score={965}
                testimonial="Resultado incrível! O método funciona e os repertórios fizeram toda diferença."
              />
              <StudentTestimonialCard
                photo="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop"
                name="Paula Martins"
                year="Turma de 2024"
                score={935}
                testimonial="Aprendi em poucas horas o essencial para tirar uma ótima nota. Muito obrigada!"
              />
              <StudentTestimonialCard
                photo="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop"
                name="Vinicius Costa"
                year="Turma de 2023"
                score={955}
                testimonial="Professora incrível! Método simples e eficaz que me levou à aprovação."
              />
              <StudentTestimonialCard
                photo="https://images.unsplash.com/photo-1557053910-d9eadeed1c58?w=400&h=400&fit=crop"
                name="Letícia Ramos"
                year="Turma de 2024"
                score={945}
                testimonial="A melhor decisão que tomei! Consegui 945 e passei no curso dos meus sonhos."
              />
              <StudentTestimonialCard
                photo="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop"
                name="Matheus Rocha"
                year="Turma de 2023"
                score={985}
                testimonial="985 pontos! O aulão realmente cumpre o que promete. Método excepcional!"
              />
              <StudentTestimonialCard
                photo="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop"
                name="Bruna Carvalho"
                year="Turma de 2024"
                score={930}
                testimonial="Conteúdo direto e prático. Exatamente o que eu precisava para melhorar minha nota."
              />
            </div>

            <div className="text-center animate-fade-in pt-8">
              <button className="text-primary font-bold text-lg hover:text-primary/80 inline-flex items-center gap-3 hover:gap-4 transition-all duration-300 group">
                <span>✨ Ver mais histórias de sucesso</span>
                <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Vídeos de Depoimentos - Seção 2 */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-6 animate-fade-in max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Eles chegaram lá — e{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary/70">
                  você também pode!
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground">
                🎬 Assista aos depoimentos de quem viveu essa transformação
              </p>
            </div>

            <VideoTestimonialCarousel
              videos={[
                {
                  thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=450&fit=crop",
                  name: "Amanda Silva",
                  year: "Turma 2024",
                  subtitle: "De 720 para 980 pontos em 3 meses",
                },
                {
                  thumbnail: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=450&fit=crop",
                  name: "Thiago Santos",
                  year: "Turma 2023",
                  subtitle: "Nota 1000 e aprovação em Medicina",
                },
                {
                  thumbnail: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=450&fit=crop",
                  name: "Carolina Alves",
                  year: "Turma 2024",
                  subtitle: "970 pontos - Aprovada em Direito USP",
                },
                {
                  thumbnail: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=800&h=450&fit=crop",
                  name: "Felipe Oliveira",
                  year: "Turma 2023",
                  subtitle: "De 650 para 940 - Método que funciona",
                },
                {
                  thumbnail: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?w=800&h=450&fit=crop",
                  name: "Isabela Martins",
                  year: "Turma 2024",
                  subtitle: "990 pontos e vaga na federal",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Comparativo */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center space-y-12 animate-fade-in">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Aprenda em <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">4 horas</span> o que não se aprende em{" "}
                <span className="text-muted-foreground/60 line-through">1 ano de cursinho</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Sem enrolação, sem promessas vazias. Apenas o que <span className="font-semibold text-foreground">realmente importa</span> para alcançar a nota máxima.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              <div className="bg-gradient-to-br from-card to-muted/20 rounded-2xl p-8 shadow-soft border border-border hover:shadow-cyan-sm hover:border-primary/20 transition-all duration-300 animate-scale-in group">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-lg mb-3">⚡ Tempo</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Apenas 4 horas focadas vs 1 ano inteiro</p>
              </div>
              <div className="bg-gradient-to-br from-card to-muted/20 rounded-2xl p-8 shadow-soft border border-border hover:shadow-cyan-sm hover:border-primary/20 transition-all duration-300 animate-scale-in group">
                <Target className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-lg mb-3">🎯 Foco</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Direto ao ponto, sem enrolação</p>
              </div>
              <div className="bg-gradient-to-br from-card to-muted/20 rounded-2xl p-8 shadow-soft border border-border hover:shadow-yellow-sm hover:border-secondary/20 transition-all duration-300 animate-scale-in group">
                <Sparkles className="w-12 h-12 text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-lg mb-3">✨ Clareza</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Método simples e comprovado</p>
              </div>
              <div className="bg-gradient-to-br from-card to-muted/20 rounded-2xl p-8 shadow-soft border border-border hover:shadow-cyan-sm hover:border-primary/20 transition-all duration-300 animate-scale-in group">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-lg mb-3">📈 Resultados</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">+2.000 alunos aprovados</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investimento */}
      <section id="checkout" className="py-24 md:py-32 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Um investimento que{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
                  muda seu futuro
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Acesso completo + bônus exclusivos por um valor único
              </p>
            </div>

            <div className="bg-gradient-to-br from-card via-card to-primary/5 rounded-3xl p-8 md:p-14 shadow-premium border-2 border-primary/30 animate-scale-in backdrop-blur-sm">
              <div className="space-y-8">
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

                <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-3xl p-10 text-center space-y-6 border-2 border-secondary/40 shadow-yellow-sm">
                  <p className="text-lg md:text-xl text-muted-foreground font-medium">💰 Você paga hoje apenas</p>
                  <div className="space-y-3">
                    <p className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-primary/80">
                      R$ 39,90
                    </p>
                    <p className="text-base text-muted-foreground">ou 12x de R$ 3,99 sem juros</p>
                  </div>
                  <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 max-w-lg mx-auto">
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      Menos que <span className="font-bold text-foreground">dois lanches</span>. Menos que uma <span className="font-bold text-foreground">ida ao cinema</span>.
                      <br />
                      <span className="text-lg font-bold text-primary mt-2 block">
                        Para um conteúdo que pode mudar seu futuro.
                      </span>
                    </p>
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground font-bold text-xl md:text-2xl py-8 md:py-10 shadow-cyan hover:shadow-premium hover:scale-[1.02] transition-all duration-300 animate-pulse-soft"
                >
                  <DollarSign className="w-7 h-7" />
                  💎 Garantir minha vaga agora por R$ 39,90
                </Button>

                <div className="text-center space-y-3 pt-4">
                  <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground flex-wrap">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>🔒 Pagamento seguro</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>⚡ Acesso imediato</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>♾️ Vitalício</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgência Final */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-accent via-accent to-accent/90 text-accent-foreground relative overflow-hidden">
        {/* Animated glow effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-soft"></div>
          <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                ⏰ As vagas estão se esgotando
              </h2>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Garanta seu acesso antes que o preço suba ou as vagas acabem
              </p>
            </div>
            
            <div className="pt-4 animate-scale-in">
              <CountdownTimer />
            </div>
            
            <Button
              onClick={scrollToCheckout}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-xl md:text-2xl px-14 py-8 shadow-yellow-sm hover:shadow-yellow hover:scale-110 transition-all duration-300 animate-pulse-soft"
            >
              🚀 Não perder essa oportunidade
            </Button>

            <p className="text-white/80 text-sm md:text-base pt-4">
              ✅ Mais de <span className="font-bold text-white">500 vagas</span> já foram preenchidas
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gradient-to-b from-background to-muted/20 border-t border-border">
        <div className="container mx-auto px-4 text-center space-y-4">
          <p className="text-muted-foreground text-sm md:text-base">
            © 2025 Redação Nota 1000 com Professora Jéssica - Todos os direitos reservados
          </p>
          <p className="text-muted-foreground/70 text-xs">
            CNPJ: 00.000.000/0001-00 | Contato: contato@redacaonota1000.com
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
