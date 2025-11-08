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
  Clock,
  AlertCircle,
  Eye,
  Zap,
  Check,
} from "lucide-react";
import hostSubash from "@/assets/host-subash.png";
import hostMamtha from "@/assets/host-mamtha.png";
import hostThree from "@/assets/host-three.jpg";
import hostshashank from "@/assets/host-shashank.png";
import LOGO from "@/assets/logo.svg";
import heroBackground from "@/assets/hero-background.jpg";
import QuoteBox from "./QuoteBox";
import { useState } from "react";
import RegisterForm from "./RegisterForm";
import RegisterFormTwo from "./RegisterFormTwo";

const Index = () => {
  const scrollToRegister = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const [checkedItems, setCheckedItems] = useState({
    manual: false,
    compliance: false,
    dissatisfaction: false,
    visibility: false,
    stress: false,
    dashboard: false,
  });

  const challenges = [
    {
      id: "manual",
      label: "Time-consuming manual scheduling",
      icon: Clock,
      color: "text-blue-600",
    },
    {
      id: "compliance",
      label: "Risk of non-compliance with HR policies",
      icon: AlertCircle,
      color: "text-red-600",
    },
    {
      id: "dissatisfaction",
      label: "Employee dissatisfaction due to unfair shifts",
      icon: Users,
      color: "text-orange-600",
    },
    {
      id: "visibility",
      label: "No clear visibility into future workforce needs",
      icon: Eye,
      color: "text-purple-600",
    },
    {
      id: "stress",
      label: "Stress of last-minute changes",
      icon: Zap,
      color: "text-yellow-600",
    },
    {
      id: "dashboard",
      label: "Real-time visibility & control with AI dashboards",
      icon: Zap,
      color: "text-green-600",
    },
  ];

  const toggleCheck = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const selectedChallenges = Object.entries(checkedItems)
    .filter(([, checked]) => checked)
    .map(([id]) => challenges.find((c) => c.id === id)?.label)
    .join("; ");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-secondary to-accent pt-10 md:pb-32 md:pt-10 md:pb-32"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 to-accent/90" />
        <div className="container relative mx-auto px-4">
          <div className="flex justify-center items-center mb-10">
            <img src={LOGO} alt="LOGO" className="w-[250px]" />
          </div>
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
            <p className="mb-8 text-base text-foreground/70 md:text-lg whitespace-nowrap">
              Conducted by <span className="font-semibold">Subash (CTO)</span>,
              <span className="font-semibold">
                {" "}
                Mamtha (Assistant Director)
              </span>
              ,<span className="font-semibold">
                {" "}
                Prasanna Srinivasan (COO)
              </span>{" "}
              and
              <span className="font-semibold"> Shashank Ravikumar (CSO)</span>.
            </p>

            <RegisterForm selectedChallenges="" />
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
                src="https://www.youtube.com/embed/emuomQTY-pY?si=GxWI-rfjG3uH4zJZ"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
              {/* <iframe
                className="h-full w-full"
                src="https://youtu.be/emuomQTY-pY?si=gG8MSFXbbIqmcjCR"
                title="Masterclass Teaser"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              /> */}
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
              This masterclass introduces the concept of{" "}
              <span className="font-bold text-black">AI-Powered Rostering</span>{" "}
              and how it transforms Workforce Planning, Scheduling, and
              Productivity. Participants will gain hands-on experience building
              their first AI agent completely FREE OF COST.
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

      <section className="bg-gradient-to-br from-accent to-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
              Struggling with this outcome?
            </h2>
            <div className="grid gap-4 md:grid-cols-2 w-full">
              {challenges.map((item) => {
                const IconComponent = item.icon;
                const isChecked = checkedItems[item.id];

                return (
                  <label
                    key={item.id}
                    className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-200
                  border-[#8649ed] hover:border-slate-500
                `}
                  >
                    {/* Custom Checkbox */}
                    {/* <div
                  className={`flex items-center justify-center w-6 h-6 rounded-md border-2 mr-4 flex-shrink-0 transition-all ${
                    isChecked
                      ? 'bg-green-500 border-green-500 shadow-lg shadow-green-500/50'
                      : 'border-slate-300 bg-white hover:border-slate-300'
                  }`}
                >
                  {isChecked && (
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  )}
                </div> */}

                    {/* Icon and Text */}
                    <div className="flex items-center gap-3 flex-grow">
                      <IconComponent
                        className={`w-5 h-5 flex-shrink-0 ${item.color}`}
                      />
                      <span
                        className={`font-medium transition-colors ${
                          isChecked ? "text-black" : "text-black"
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>

                    {/* Hidden native checkbox */}
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleCheck(item.id)}
                      className="hidden"
                    />
                  </label>
                );
              })}
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
                  icon: Store,
                  title: "Retail",
                  description: "Demand-based workforce planning",
                },
                {
                  icon: Factory,
                  title: "Manufacturing",
                  description: "Shift planning and labor optimization",
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
                {
                  icon: Hospital,
                  title: "Healthcare",
                  description: "Nurse and staff scheduling",
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
              Meet Your Speakers
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="overflow-hidden border-border transition-all hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="mb-6 flex justify-center">
                    <div className="overflow-hidden rounded-2xl border-4 border-accent">
                      <img
                        src={hostSubash}
                        alt="Subash - CTO"
                        className="h-48 w-48 object-cover object-top"
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
                    "I help enterprises evolve from being data-aware to truly AI
                    driven turning information into a real competitive edge.
                    With over 200 successful implementations across DOMO,
                    Snowflake, and GCP, I’ve seen how clarity replaces
                    complexity when data becomes actionable. My goal is to
                    simplify technology so teams can focus on impact, not
                    infrastructure. When technology is built right, it doesn’t
                    just move data, it moves people and businesses forward. The
                    future belongs to those who see smarter, decide faster, and
                    act with confidence."
                  </p>
                  <div className="flex justify-center items-center mt-3 gap-4">
                    <a
                      href="https://www.linkedin.com/in/subash-ramu-92553784/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin />
                    </a>
                    <a
                      href="https://www.gwcdata.ai/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
                    <a
                      href="https://www.linkedin.com/in/mamtha-shanmugam-43ba8016a/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin />
                    </a>
                    <a
                      href="https://www.gwcdata.ai/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
                        src={hostThree}
                        alt="Prasanna - Operating Officer"
                        className="h-48 w-48 object-cover object-top"
                      />
                    </div>
                  </div>
                  <h3 className="mb-2 text-center text-2xl font-bold text-foreground">
                    Prasanna Srinivasan
                  </h3>
                  <p className="mb-4 text-center text-lg font-medium text-primary">
                    Chief Operating Officer, GWC DATA.AI
                  </p>
                  <p className="text-center italic text-muted-foreground">
                    "I help enterprises turn ambitious strategies into tangible
                    outcomes, ensuring every boardroom promise is flawlessly
                    delivered. At GWC DATA.AI, I lead operations and execution
                    across analytics, AI, and digital transformation, driving
                    precision and pace. My focus is on building scalable systems
                    and teams without losing the human touch. Operational
                    excellence means enabling teams to execute with clarity,
                    deliver confidently, and create enduring value. When
                    execution aligns with vision, transformation becomes
                    inevitable."
                  </p>
                  <div className="flex justify-center items-center mt-3 gap-4">
                    <a
                      href="https://www.linkedin.com/in/prasanna-srinivasan-a533b062/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin />
                    </a>
                    <a
                      href="https://www.gwcdata.ai/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
                        src={hostshashank}
                        alt="Mamtha - Assistant Director"
                        className="h-48 w-48 object-cover object-center"
                      />
                    </div>
                  </div>
                  <h3 className="mb-2 text-center text-2xl font-bold text-foreground">
                    Shashank Ravikumar
                  </h3>

                  <p className="mb-4 text-center text-lg font-medium text-primary">
                    Chief Strategy Officer, GWC DATA.AI
                  </p>
                  <p className="text-center italic text-muted-foreground">
                    "In an era obsessed with AI fantasy, I focus on what works.
                    As Chief Strategy Officer at GWC DATA.AI, I lead with a
                    simple principle: strategy must serve scale, speed, and
                    trust. My work centers on building Trustable AI systems that
                    are not only intelligent, but ethical, transparent, and
                    grounded in reality. I bridge vision with execution,
                    ensuring our solutions don’t just dazzle - they deliver. By
                    aligning deep tech with deep purpose, I help enterprises
                    move fast, stay focused, and lead with confidence in a world
                    where efficiency is the ultimate innovation."
                  </p>
                  <div className="flex justify-center items-center mt-3 gap-4">
                    <a
                      href="https://www.linkedin.com/in/shashank-ravikumar-780649125/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin />
                    </a>
                    <a
                      href="https://www.gwcdata.ai/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
                    "Hi Team, thank you for sharing the AI reports, source code, and documentation. Please schedule the KT session for system restoration soon. We confirm sign-off on the Tool Management, Environmental Applications, and Intelligent Rostering modules. Your team’s professionalism, accuracy, and collaboration have been exemplary. We truly appreciate the continued support and look forward to more successful engagements together.",
                },
                {
                  role: "MD, Head of Retail",
                  quote:
                    "Hi Team, sincere thanks for your exceptional support in resolving a critical customer issue. Your professionalism, ownership, and teamwork truly stand out, especially under pressure. GWC continues to be a trusted and dependable partner. We deeply appreciate your responsiveness, expertise, and commitment. They make a real difference to our business success.",
                },
                {
                  role: "AVP of Toyota",
                  quote:
                    "Hi Team, heartfelt appreciation for successfully developing and deploying the AI Rostering Solution integrated with our Automation Dashboard. Your understanding of business needs and intelligent automation design ensured a smooth transition from manual to AI driven operations. Excellent work, a great step toward smarter, data-driven efficiency.",
                },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className="border-border transition-all hover:shadow-lg"
                >
                  <CardContent className="p-6">
                    <Quote className="mb-4 h-10 w-10 text-accent" />
                    <div className="mb-6">
                      <p className="text-foreground/80">{testimonial.quote}</p>
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
                <AccordionContent className="text-[#f68b63] font-semibold">
                  No, it’s designed for HR and operations teams without coding
                  knowledge.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="rounded-lg border border-border bg-background px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Can this work for my industry?
                </AccordionTrigger>
                <AccordionContent className="text-[#f68b63] font-semibold">
                  Yes, AI rostering works for any industry it can easily fit
                  your team’s scheduling needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="rounded-lg border border-border bg-background px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Will I get a recording of the webinar?
                </AccordionTrigger>
                <AccordionContent className="text-[#f68b63] font-semibold">
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
                <AccordionContent className="text-[#f68b63] font-semibold">
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
                <AccordionContent className="text-[#f68b63] font-semibold">
                  AI rostering can be implemented and start delivering results
                  within a few weeks.
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

            <RegisterFormTwo selectedChallenges="" />
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
