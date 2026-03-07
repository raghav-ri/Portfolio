import { Linkedin, ArrowUpRight, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// ─── PASTE YOUR EMAILJS CREDENTIALS HERE ───────────────
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";
// ────────────────────────────────────────────────────────

export const ContactSection = () => {
  const { toast } = useToast();
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      .then(() => {
        toast({
          title: "Message sent! ✅",
          description: "I'll get back to you within 24 hours.",
        });
        formRef.current.reset();
      })
      .catch(() => {
        toast({
          title: "Failed to send ❌",
          description: "Email me directly at raghavissa701@gmail.com",
          variant: "destructive",
        });
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section id="contact" className="relative overflow-hidden">

      {/* ══════════════════════════════════════════
          FORM BLOCK — centered, standalone
      ══════════════════════════════════════════ */}
      <div className="relative py-28 px-6 bg-background">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-72 bg-primary/6 blur-3xl rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-5">
              Have a project in mind?
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed max-w-md mx-auto">
              I'm available for freelance work and open to new opportunities.
              Drop me a message and I'll get back to you within 24 hours.
            </p>
          </div>

          {/* Availability pill */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                Available for new projects
              </span>
            </div>
          </div>

          {/* Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field
                id="from_name" name="from_name" label="Name" type="text"
                placeholder="Your full name" required focused={focused} setFocused={setFocused}
              />
              <Field
                id="from_email" name="from_email" label="Email" type="email"
                placeholder="your@email.com" required focused={focused} setFocused={setFocused}
              />
            </div>

            <Field
              id="subject" name="subject" label="Subject" type="text"
              placeholder="What's this about?" focused={focused} setFocused={setFocused}
            />

            <div>
              <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2.5">
                Message <span className="text-primary normal-case font-normal tracking-normal">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Hi Raghav, I'd love to discuss..."
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                className={cn(
                  "w-full px-5 py-4 rounded-2xl border text-sm bg-card text-foreground resize-none",
                  "placeholder:text-muted-foreground/40 transition-all duration-200 focus:outline-none",
                  focused === "message"
                    ? "border-primary ring-2 ring-primary/15 shadow-sm"
                    : "border-border hover:border-primary/30"
                )}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "group w-full flex items-center justify-center gap-3 px-8 py-4 rounded-2xl",
                "bg-primary text-primary-foreground font-bold text-sm tracking-wide",
                "transition-all duration-300 hover:-translate-y-0.5",
                "hover:shadow-xl hover:shadow-primary/25 active:scale-[0.98]",
                isSubmitting && "opacity-60 cursor-not-allowed hover:translate-y-0 hover:shadow-none"
              )}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </>
              )}
            </button>

          </form>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          CONTACT INFO STRIP — sits just above Footer
      ══════════════════════════════════════════ */}
      <div className="border-t border-border bg-card">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="lg:col-span-1">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground mb-2">
                Raghav Issar
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                MERN Stack Developer & Cloud DevOps Engineer based in India.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60 mb-1">Email</p>
                <a
                  href="mailto:raghavissa701@gmail.com"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
                >
                  raghavissa701@gmail.com
                </a>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60 mb-1">Phone</p>
                <a
                  href="tel:+919294935667"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
                >
                  +91 92949 35667
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60 mb-1">Location</p>
              <p className="text-sm font-medium text-foreground">Phagwara, Punjab</p>
              <p className="text-sm text-muted-foreground">India</p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60 mb-3">Social</p>
              <a
                href="https://www.linkedin.com/in/raghav-issar-a67720281/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
              >
                <span className="w-7 h-7 rounded-lg bg-[#0A66C2]/10 flex items-center justify-center
                                 transition-all duration-200 group-hover:bg-[#0A66C2] group-hover:scale-110">
                  <Linkedin size={14} className="text-[#0A66C2] group-hover:text-white transition-colors" />
                </span>
                LinkedIn
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

/* ── Reusable input field ── */
const Field = ({ id, name, label, type, placeholder, required, focused, setFocused }) => (
  <div>
    <label
      htmlFor={id}
      className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2.5"
    >
      {label}{required && <span className="text-primary normal-case font-normal tracking-normal ml-1">*</span>}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      required={required}
      placeholder={placeholder}
      onFocus={() => setFocused(id)}
      onBlur={() => setFocused(null)}
      className={cn(
        "w-full px-5 py-4 rounded-2xl border text-sm bg-card text-foreground",
        "placeholder:text-muted-foreground/40 transition-all duration-200 focus:outline-none",
        focused === id
          ? "border-primary ring-2 ring-primary/15 shadow-sm"
          : "border-border hover:border-primary/30"
      )}
    />
  </div>
);