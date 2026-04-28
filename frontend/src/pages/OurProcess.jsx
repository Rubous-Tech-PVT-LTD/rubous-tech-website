import {
  LayoutGrid, Zap, MessageSquare, ArrowUpToLine,
  SunMedium, ArrowLeftRight, Users, List, Cloud, Database,
} from "lucide-react";
import Footer from "../components/Footer";
 
// ─── Data ───────────────────────────────────────────────────────────────────
 
const processFeatures = [
  {
    icon: <LayoutGrid size={28} strokeWidth={1.75} />,
    title: "Custom Solutions",
    desc: "Tailored architectures built specifically for your unique operational workflows.",
  },
  {
    icon: <Zap size={28} strokeWidth={1.75} />,
    title: "Fast Delivery",
    desc: "Agile methodologies that prioritize rapid deployment without compromising quality.",
  },
  {
    icon: <MessageSquare size={28} strokeWidth={1.75} />,
    title: "Transparency",
    desc: "Real-time communication and clear reporting at every stage of the build.",
  },
  {
    icon: <ArrowUpToLine size={28} strokeWidth={1.75} />,
    title: "Scalable Systems",
    desc: "Future-proof designs that grow alongside your business complexity.",
  },
];
 
const techPills = [
  { icon: <SunMedium size={15} strokeWidth={2} />, label: "AI Tools" },
  { icon: <ArrowLeftRight size={15} strokeWidth={2} />, label: "APIs" },
  { icon: <Users size={15} strokeWidth={2} />, label: "CRM Systems" },
  { icon: <List size={15} strokeWidth={2} />, label: "Automation Platforms" },
  { icon: <Cloud size={15} strokeWidth={2} />, label: "Cloud Infrastructure" },
  { icon: <Database size={15} strokeWidth={2} />, label: "Data Lakes" },
];
 
const roadSteps = [
  { num: "01", title: "Discovery",   desc: "We understand your business needs and goals." },
  { num: "02", title: "Planning",    desc: "We create a clear automation strategy." },
  { num: "03", title: "Design",      desc: "We design workflows and system architecture." },
  { num: "04", title: "Development", desc: "We build and integrate automation systems." },
  { num: "05", title: "Testing",     desc: "We test everything to ensure reliability." },
  { num: "06", title: "Deployment",  desc: "We launch and provide ongoing support." },
];
 
const faqs = [
  {
    question: "What is the typical timeline for a project?",
    answer: "Most automation integrations take between 4 to 12 weeks, depending on complexity and the depth of existing system integration.",
  },
  {
    question: "Which tools and platforms do you support?",
    answer: "We are platform-agnostic but specialize in industry leaders like Zapier, Make, Salesforce, and custom-built API connectors.",
  },
  {
    question: "What kind of post-deployment support do you provide?",
    answer: "We offer 24/7 monitoring, performance optimization, and dedicated support channels to ensure your systems never skip a beat.",
  },
];
 
// ─── Sub-components ──────────────────────────────────────────────────────────
 
/** Futuristic room illustration (SVG/div based, no external image needed) */
const RoomIllustration = () => (
  <div className="w-full h-full bg-gradient-to-br from-[#0a1628] via-[#0d2348] to-[#0f1f3d] relative flex items-center justify-center overflow-hidden">
    {/* Ceiling light strip */}
    <div className="absolute top-[10%] left-[20%] right-[20%] h-[2px] bg-white/90 shadow-[0_0_20px_4px_rgba(200,230,255,0.7),0_0_40px_8px_rgba(150,200,255,0.4)]" />
    {/* Corner light lines */}
    <div className="absolute top-[8%] left-[8%] w-[2px] h-[40%] bg-white/70 rotate-[-10deg]" />
    <div className="absolute top-[8%] right-[8%] w-[2px] h-[40%] bg-white/70 rotate-[10deg]" />
 
    {/* Left panel */}
    <div className="absolute left-0 top-[15%] bottom-[15%] w-[18%] bg-gradient-to-b from-blue-700/15 to-blue-400/8 border border-blue-400/20 rounded-r-lg flex flex-col gap-1.5 p-3">
      {[1, 0.5, 1, 0.3, 1].map((o, i) => (
        <div key={i} className="h-[2px] rounded-sm bg-cyan-400/30" style={{ opacity: o }} />
      ))}
    </div>
 
    {/* Right panel */}
    <div className="absolute right-0 top-[15%] bottom-[15%] w-[18%] bg-gradient-to-b from-blue-700/15 to-blue-400/8 border border-blue-400/20 rounded-l-lg flex flex-col gap-1.5 p-3">
      {[1, 0.5, 1, 0.3, 1].map((o, i) => (
        <div key={i} className="h-[2px] rounded-sm bg-cyan-400/30" style={{ opacity: o }} />
      ))}
    </div>
 
    {/* Center screen */}
    <div className="absolute bottom-[28%] left-1/2 -translate-x-1/2 w-40 h-20 bg-[rgba(0,30,80,0.8)] border border-cyan-400/40 rounded-md flex items-center justify-center shadow-[0_0_30px_rgba(0,150,255,0.3),inset_0_0_20px_rgba(0,100,200,0.2)]">
      <p className="text-[10px] font-bold text-blue-200/90 tracking-widest text-center leading-relaxed">
        SMART<br />AUTOMATION<br />SYSTEMS
      </p>
    </div>
 
    {/* Floor rings */}
    {[
      { w: 280, h: 60, bottom: "8%" },
      { w: 200, h: 44, bottom: "10%" },
      { w: 120, h: 28, bottom: "12%" },
    ].map((r, i) => (
      <div
        key={i}
        className="absolute left-1/2 -translate-x-1/2 rounded-full border border-cyan-400/30 shadow-[0_0_12px_rgba(0,180,255,0.2)]"
        style={{ width: r.w, height: r.h, bottom: r.bottom }}
      />
    ))}
 
    {/* Floor ambient glow */}
    <div className="absolute bottom-0 left-[10%] right-[10%] h-[35%] bg-[radial-gradient(ellipse_at_50%_100%,rgba(0,150,255,0.12),transparent_70%)] pointer-events-none" />
  </div>
);
 
/** Hero / Our Process section */
const OurProcessHero = () => (
  <section className="bg-[#f0f2f7] min-h-screen flex items-center justify-center px-5 font-['DM_Sans',sans-serif]">
    <div className="w-full max-w-[1100px] py-20 px-15 flex flex-col md:flex-row items-center justify-between gap-16">
      {/* Left: text */}
      <div className="flex-1 max-w-[420px]">
        <p className="text-[11px] font-semibold tracking-[0.14em] text-[#1a4fd8] uppercase mb-5 animate-[fadeUp_0.5s_ease_forwards] opacity-0">
          Workflow Excellence
        </p>
        <h1 className="font-['Sora',sans-serif] text-[clamp(44px,5vw,60px)] font-extrabold text-[#0d1b3e] leading-none mb-5 tracking-[-0.02em] animate-[fadeUp_0.6s_0.1s_ease_forwards] opacity-0">
          Our Process
        </h1>
        <p className="text-[15px] text-[#4a5568] leading-[1.7] mb-8 max-w-[360px] animate-[fadeUp_0.6s_0.2s_ease_forwards] opacity-0">
          A simple and effective way we build and deliver automation solutions.
          From idea to execution — we handle everything.
        </p>
        <button className="flex items-center gap-3 text-[14px] font-medium text-[#1a4fd8] bg-transparent border-none cursor-pointer animate-[fadeUp_0.6s_0.3s_ease_forwards] opacity-0">
          <span className="w-9 h-[2px] bg-[#1a4fd8] flex-shrink-0" />
          Full-cycle orchestration
        </button>
      </div>
 
      {/* Right: illustration */}
      <div className="flex-shrink-0 w-full md:w-[420px] h-[360px] rounded-[22px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] animate-[fadeUp_0.7s_0.15s_ease_forwards] opacity-0">
        <RoomIllustration />
      </div>
    </div>
 
    <style>{`
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(24px); }
        to   { opacity: 1; transform: translateY(0); }
      }
    `}</style>
  </section>
);
 
/** Road to Automation section */
const RoadToAutomation = () => (
  <section className="bg-[#eef2f9] min-h-screen flex items-center justify-center px-5 font-['DM_Sans',sans-serif]">
    <div className="w-full max-w-[1100px] py-20 px-15 text-center">
      <h2 className="font-['Sora',sans-serif] text-[clamp(32px,4vw,46px)] font-bold text-[#0d1b3e] mb-4 tracking-[-0.02em]">
        The Road to Automation
      </h2>
      <p className="text-[15px] text-[#5a6a85] leading-[1.7] max-w-[560px] mx-auto mb-16">
        Our proven methodology ensures that every project transitions seamlessly from concept
        to high-performance reality.
      </p>
 
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 text-left">
        {roadSteps.map((s, i) => (
          <div
            key={s.num}
            className="flex flex-col gap-3.5 opacity-0"
            style={{ animation: `fadeUp 0.5s ${0.05 + i * 0.07}s ease forwards` }}
          >
            <div className="w-[52px] h-[52px] rounded-full bg-[#2b3fd4] text-white text-[13px] font-semibold flex items-center justify-center tracking-wide flex-shrink-0">
              {s.num}
            </div>
            <p className="font-['Sora',sans-serif] text-[16px] font-semibold text-[#0d1b3e] leading-snug">
              {s.title}
            </p>
            <p className="text-[13.5px] text-[#5a6a85] leading-[1.6]">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
 
    <style>{`
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(20px); }
        to   { opacity: 1; transform: translateY(0); }
      }
    `}</style>
  </section>
);
 
/** Feature cards + Powering the Future section */
const FeaturesSection = () => (
  <div className="bg-[#eef0f8] font-['Inter',sans-serif]">
    {/* Feature Cards */}
    <div className="px-12 pt-12 pb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
        {processFeatures.map(({ icon, title, desc }) => (
          <div key={title} className="bg-white rounded-2xl px-6 pt-7 pb-8 shadow-[0_1px_4px_rgba(0,0,0,0.05)]">
            <div className="text-[#3d52d5] mb-4">{icon}</div>
            <p className="text-[15px] font-bold text-[#0f1117] mb-2.5 tracking-[-0.1px]">{title}</p>
            <p className="text-[13px] text-[#6b7280] leading-[1.65]">{desc}</p>
          </div>
        ))}
      </div>
    </div>
 
    {/* Divider */}
    <div className="h-[60px] bg-[#eef0f8]" />
 
    {/* Powering the Future */}
    <div className="bg-[#f5f6fb] py-16 px-12 text-center">
      <h2 className="text-[30px] font-bold text-[#0f1117] mb-9 tracking-[-0.5px]">
        Powering the Future
      </h2>
 
      {/* Row 1 — first 4 */}
      <div className="flex flex-wrap justify-center gap-3 mb-3">
        {techPills.slice(0, 4).map(({ icon, label }) => (
          <div
            key={label}
            className="inline-flex items-center gap-[7px] bg-white border-[1.5px] border-[#e2e4ef] rounded-full px-5 py-[9px] text-[13.5px] font-medium text-[#374151] whitespace-nowrap"
          >
            <span className="text-[#3d52d5] flex">{icon}</span>
            {label}
          </div>
        ))}
      </div>
 
      {/* Row 2 — last 2 */}
      <div className="flex flex-wrap justify-center gap-3">
        {techPills.slice(4).map(({ icon, label }) => (
          <div
            key={label}
            className="inline-flex items-center gap-[7px] bg-white border-[1.5px] border-[#e2e4ef] rounded-full px-5 py-[9px] text-[13.5px] font-medium text-[#374151] whitespace-nowrap"
          >
            <span className="text-[#3d52d5] flex">{icon}</span>
            {label}
          </div>
        ))}
      </div>
    </div>
  </div>
);
 
/** CTA banner + FAQ section */
const CTAAndFAQ = () => (
  <div className="bg-[#eef0f8] font-['Inter',sans-serif]">
    {/* CTA Banner */}
      <div className="w-full bg-[#f8f9ff] md:py-24 sm:py-16 py-12 px-6 ">
      <div className="max-w-5xl mx-auto bg-linear-to-r from-blue-700 to-blue-500 rounded-3xl px-6 py-10 md:px-12 md:py-14 text-center text-white shadow-lg">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-semibold mb-4">
          Ready to automate your business?
        </h2>

        {/* Subtext */}
        <p className="text-sm md:text-base text-blue-100 max-w-2xl mx-auto mb-8">
          Join hundreds of industry-leading companies that are saving
          thousands of hours every month with Rubous Tech.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          
          {/* Primary Button */}
          <button className="bg-white text-blue-600 font-medium px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition">
            Get Started
          </button>

          {/* Secondary Button */}
          <button className="border border-blue-300 text-white px-6 py-3 rounded-xl hover:bg-white hover:text-blue-600 transition">
            Schedule Demo
          </button>

        </div>
      </div>
    </div>
    {/* FAQ */}
    <div className="px-6 pt-16 pb-12">
      <h2 className="text-[26px] font-bold text-[#0f1117] text-center mb-9 tracking-[-0.3px]">
        Common Questions
      </h2>
      <div className="flex flex-col gap-4 max-w-[700px] mx-auto">
        {faqs.map(({ question, answer }) => (
          <div key={question} className="bg-white rounded-2xl px-7 py-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            <p className="text-[14px] font-bold text-[#0f1117] mb-2.5">{question}</p>
            <p className="text-[13.5px] text-[#6b7280] leading-[1.65]">{answer}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
 
// ─── Main export ─────────────────────────────────────────────────────────────
 
export default function OurProcess() {
  return (
    <>
      <OurProcessHero />
      <RoadToAutomation />
      <FeaturesSection />
      <CTAAndFAQ />
      <Footer />
    </>
  );
}