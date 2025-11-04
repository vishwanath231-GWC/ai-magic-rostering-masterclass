import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sparkles,
  Users,
  Target,
  Gift,
  Hospital,
  Factory,
  Store,
  Hotel,
  Laptop,
  CheckCircle2,
  Quote,
  Calendar,
  ArrowRight,
  Linkedin,
  Globe,
} from "lucide-react";
import hostSubash from "@/assets/host-subash.jpg";
import hostMamtha from "@/assets/host-mamtha.jpg";
import heroBackground from "@/assets/hero-background.jpg";
import QuoteBox from "./QuoteBox";

const Index = () => {
  const scrollToRegister = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-secondary to-accent py-24 md:py-32"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 to-accent/90" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/50 px-4 py-2 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                Free Masterclass • Limited Seats
              </span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              AI Magic Rostering Masterclass
            </h1>
            <p className="mb-4 text-xl text-foreground/80 md:text-2xl">
              Learn how to build your first AI Agent for free
            </p>
            <p className="mb-8 text-base text-foreground/70 md:text-lg">
              Conducted by <span className="font-semibold">Subash (CTO)</span>{" "}
              and{" "}
              <span className="font-semibold">Mamtha (Assistant Director)</span>
            </p>
            <Button
              size="lg"
              onClick={scrollToRegister}
              className="group h-14 gap-2 px-8 text-lg font-semibold shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              Reserve Your Spot Now
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Video Teaser Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Get a glimpse of what's coming
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Watch our teaser to see what you'll learn in the masterclass
            </p>
            <div className="aspect-video overflow-hidden rounded-xl border border-border shadow-lg">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Masterclass Teaser"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
              About the Masterclass
            </h2>
            <p className="text-lg leading-relaxed text-foreground/80">
              This masterclass introduces the concept of AI-powered rostering
              and how it transforms workforce planning, scheduling, and
              productivity. Participants will gain hands-on experience building
              their first AI agent completely free of cost.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
              Benefits of Joining
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Sparkles,
                  title: "Build Your First AI Agent",
                  description:
                    "Create a functional AI agent at no cost with expert guidance",
                },
                {
                  icon: Target,
                  title: "Practical Techniques",
                  description:
                    "Learn rostering strategies powered by cutting-edge AI",
                },
                {
                  icon: Users,
                  title: "Real-World Use Cases",
                  description:
                    "Understand applications across multiple industries",
                },
                {
                  icon: Gift,
                  title: "Three Pre-Built Agents",
                  description: "Get instant access to ready-to-use AI agents",
                },
                {
                  icon: Laptop,
                  title: "Test Environment",
                  description:
                    "Experiment and learn in a secure sandbox environment",
                },
                {
                  icon: CheckCircle2,
                  title: "Certificate",
                  description: "Receive a digital certificate of participation",
                },
              ].map((benefit, index) => (
                <Card
                  key={index}
                  className="group border-border transition-all hover:border-primary hover:shadow-lg"
                >
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div className="mb-4 rounded-full bg-accent/50 p-3 transition-colors group-hover:bg-primary/10">
                      <benefit.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applicable Sectors */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
              Applicable Across Industries
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
              {[
                {
                  icon: Hospital,
                  title: "Healthcare",
                  description: "Nurse and staff scheduling",
                },
                {
                  icon: Factory,
                  title: "Manufacturing",
                  description: "Shift planning and labor optimization",
                },
                {
                  icon: Store,
                  title: "Retail",
                  description: "Demand-based workforce planning",
                },
                {
                  icon: Hotel,
                  title: "Hospitality",
                  description: "Event and staff roster management",
                },
                {
                  icon: Laptop,
                  title: "IT Services",
                  description: "Project resource allocation",
                },
              ].map((sector, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center text-center transition-transform hover:scale-105"
                >
                  <div className="mb-4 rounded-2xl border border-border bg-background p-6 shadow-sm transition-all group-hover:border-primary group-hover:shadow-md">
                    <sector.icon className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {sector.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {sector.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Hosts */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
              Meet Your Hosts
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="overflow-hidden border-border transition-all hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="mb-6 flex justify-center">
                    <div className="overflow-hidden rounded-2xl border-4 border-accent">
                      <img
                        src={hostSubash}
                        alt="Subash - CTO"
                        className="h-48 w-48 object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="mb-2 text-center text-2xl font-bold text-foreground">
                    Subash
                  </h3>
                  <p className="mb-4 text-center text-lg font-medium text-primary">
                    Chief Technology Officer, GWC DATA.AI
                  </p>
                  <p className="text-center italic text-muted-foreground">
                    "I help enterprises evolve from being data-aware to truly
                    AI-driven—turning information into a real competitive edge.
                    With over 200 successful implementations across DOMO,
                    Snowflake, and GCP, I’ve seen how clarity replaces
                    complexity when data becomes actionable. My goal is to
                    simplify technology so teams can focus on impact, not
                    infrastructure. When technology is built right, it doesn’t
                    just move data—it moves people and businesses forward. The
                    future belongs to those who see smarter, decide faster, and
                    act with confidence."
                  </p>
                  <div className="flex justify-center items-center mt-3 gap-4">
                    <a href="https://www.linkedin.com/in/subash-ramu-92553784/" target="_blank" rel="noopener noreferrer">
                      <Linkedin />
                    </a>
                    <a href="https://www.gwcdata.ai/" target="_blank" rel="noopener noreferrer">
                      <Globe />
                    </a>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-border transition-all hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="mb-6 flex justify-center">
                    <div className="overflow-hidden rounded-2xl border-4 border-accent">
                      <img
                        src={hostMamtha}
                        alt="Mamtha - Assistant Director"
                        className="h-48 w-48 object-cover object-top"
                      />
                    </div>
                  </div>
                  <h3 className="mb-2 text-center text-2xl font-bold text-foreground">
                    Mamtha
                  </h3>
                  <p className="mb-4 text-center text-lg font-medium text-primary">
                    Associate Director, GWC DATA.AI
                  </p>
                  <p className="text-center italic text-muted-foreground">
                    "As an Associate Director, I bridge strategy and execution
                    helping enterprises turn data into decisions and AI into
                    advantage. I believe data and AI aren’t just tools, they’re
                    storytellers of business truth. My mission is to make AI
                    ethical, practical, and empowering, enabling organizations
                    to see smarter, decide faster, and grow confidently. Because
                    the future of transformation isn’t about replacing people,
                    it’s about amplifying human intelligence to move businesses
                    forward with clarity and purpose."
                  </p>
                  <div className="flex justify-center items-center mt-3 gap-4">
                    <a href="https://www.linkedin.com/in/mamtha-shanmugam-43ba8016a/" target="_blank" rel="noopener noreferrer">
                      <Linkedin />
                    </a>
                    <a href="https://www.gwcdata.ai/" target="_blank" rel="noopener noreferrer">
                      <Globe />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Access */}
      <section className="bg-gradient-to-br from-accent to-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2">
              <Gift className="h-5 w-5 text-primary-foreground" />
              <span className="font-semibold text-primary-foreground">
                Exclusive Bonus
              </span>
            </div>
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
              Post-Session Access
            </h2>
            <p className="text-lg text-foreground/80">
              All participants will receive exclusive access to three pre-built
              AI agents and a secure test environment for continued
              experimentation and learning. Put your new skills to work
              immediately after the session!
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
              What Participants Say
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  role: "Director of Tata group",
                  quote:
                    "Hi Team, Greetings, and thank you for your mail. We acknowledge receipt of the AI-powered analytical reports, source code, and comprehensive project documentation. As discussed, please schedule the Knowledge Transfer (KT) session for system restoration at your earliest convenience. Additionally, we would like to confirm the sign-off on the Tool Management, Environmental Applications, and Intelligent Rostering Solutions modules. We appreciate your team’s ongoing support in fine-tuning and optimizing these AI-driven insights to ensure complete accuracy and reliability. We would also like to express our sincere gratitude to you, your team, and GWC management for the valuable support extended throughout this project. Your team’s deep understanding of our requirements, proactive communication, and commitment to delivering quality outcomes have been commendable. A special appreciation to the GWC team members for their professionalism and collaborative spirit, ensuring that every milestone was met as expected. Thank you once again, we look forward to our continued collaboration and many more successful engagements together.",
                },
                {
                  role: "MD, Head of Retail",
                  quote:
                    "I wanted to take a moment to express my heartfelt appreciation for the exceptional support provided by the GWC team. Hi Team, I wanted to take a moment to express my heartfelt appreciation for the exceptional support provided by the GWC team. This evening, your team went above and beyond to help us address a business-critical issue for one of our key customers. Despite the challenging circumstances, the team demonstrated outstanding professionalism, commitment, and teamwork, qualities that truly set GWC apart. It isn’t always the case that partners invest this much effort and ownership, especially during critical moments. The GWC team has once again proven to be a trusted and dependable partner, and I’m sincerely grateful for your continued support. Thank you once again to the entire team, your responsiveness, expertise, and commitment make a real difference to our business.",
                },
                {
                  role: "AVP of Toyota",
                  quote:
                    "Hi Team, I would like to extend my sincere appreciation to the GWC team for the successful development and deployment of the AI Rostering Solution, seamlessly integrated with our Automation Sustaining Dashboard. Your collective efforts in understanding the business needs, designing intelligent scheduling logic, and ensuring a seamless transition from manual rostering to an AI-driven, automated platform are truly commendable. Great work, team — this marks another important step toward smarter, data-driven operations!",
                },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className="border-border transition-all hover:shadow-lg"
                >
                  <CardContent className="p-6">
                    <Quote className="mb-4 h-10 w-10 text-accent" />
                    <div className="mb-6">
                      <p className="text-foreground/80 h-[100px] overflow-hidden text-ellipsis line-clamp-4">
                        {testimonial.quote}
                      </p>
                      <QuoteBox content={testimonial.quote} title={testimonial.role} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="item-1"
                className="rounded-lg border border-border bg-background px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Do I need technical skills to use AI rostering?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  No, it’s designed for HR and operations teams without coding knowledge.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="rounded-lg border border-border bg-background px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Can this work for my industry?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, AI rostering works for any industry it can easily fit your team’s scheduling needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="rounded-lg border border-border bg-background px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Will I get a recording of the webinar?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, you will get access to all the recordings.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="rounded-lg border border-border bg-background px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Is there a cost for the AI rostering tool?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, for that you need to get in touch with our team.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="rounded-lg border border-border bg-background px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  How quickly can AI rostering be implemented?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  AI rostering can be implemented and start delivering results within a few weeks.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-12 text-center shadow-2xl">
            <Calendar className="mx-auto mb-6 h-16 w-16 text-primary-foreground" />
            <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
              Ready to Build Your First AI Agent?
            </h2>
            <p className="mb-8 text-xl text-primary-foreground/90">
              Join the AI Magic Rostering Masterclass and transform your
              workforce planning today
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={scrollToRegister}
              className="group h-14 gap-2 px-8 text-lg font-semibold shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              Register Now – Limited Seats Available
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            {/* <p className="mt-6 text-sm text-primary-foreground/70">
              No credit card required • Completely free • Certificate included
            </p> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
