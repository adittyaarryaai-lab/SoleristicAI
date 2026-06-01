import {
  Bot,
  MessageSquare,
  Workflow,
  Database,
  Code,
  Cpu
} from "lucide-react";

const services = [
  {
    title: "AI Automation",
    icon: Bot,
    description:
      "Automate repetitive business tasks using AI-powered systems."
  },
  {
    title: "WhatsApp Automation",
    icon: MessageSquare,
    description:
      "Capture, qualify and engage leads automatically."
  },
  {
    title: "Workflow Automation",
    icon: Workflow,
    description:
      "Reduce manual work across departments."
  },
  {
    title: "CRM & Lead Management",
    icon: Database,
    description:
      "Organize, track and convert leads efficiently."
  },
  {
    title: "SaaS Development",
    icon: Code,
    description:
      "Custom software solutions built for your business."
  },
  {
    title: "AI Solutions",
    icon: Cpu,
    description:
      "Practical AI products that solve real business problems."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-6">

      <h2 className="text-center text-5xl font-bold mb-16">
        Services
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.title}
              className="
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-3xl
              p-8
              hover:border-blue-500/50
              hover:scale-[1.02]
              transition
              "
            >
              <Icon size={42} />

              <h3 className="text-2xl font-semibold mt-6">
                {service.title}
              </h3>

              <p className="text-zinc-400 mt-4">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>

    </section>
  );
}