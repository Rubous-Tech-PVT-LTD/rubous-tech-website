import {
  MessageCircle,
  Workflow,
  Users,
  MessageSquare,
  Zap,
  TrendingUp,
} from "lucide-react";

export default function BrowseByExpertise() {
  const expertise = [
    { key: "chatbot", label: "AI Chatbots", icon: MessageCircle },
    { key: "workflow", label: "Workflow", icon: Workflow },
    { key: "crm", label: "CRM Systems", icon: Users },
    { key: "whatsapp", label: "WhatsApp", icon: MessageSquare },
    { key: "saas", label: "SaaS Growth", icon: Zap },
    { key: "productivity", label: "Productivity", icon: TrendingUp },
  ];

  return (
    <div className="bg-[#f8f9ff] py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-gray-800">
          Browse by Expertise
        </h2>
        <p className="mx-auto mt-5 max-w-md text-gray-500">
          Focused deep-dives into the pillars of modern digital architecture and automation.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {expertise.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              className="flex flex-col items-center gap-3 rounded-lg border border-gray-200 bg-white p-5 transition hover:border-blue-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Icon className="h-6 w-6 text-blue-600" />
              </div>
              <span className="text-center text-base font-bold leading-tight text-gray-800">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}