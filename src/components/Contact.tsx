import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";


import {
  Mail,
  Github,
  Linkedin,
  Send,
  User,
  MessageSquare,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const socials = [
  { icon: Mail, href: "mailto:samdirsipam.official@gmail.com", label: "Email" },
  { icon: Github, href: "https://github.com/samdirsipam", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/sam-dirsipam",
    label: "LinkedIn",
  },
];

const Contact = () => {
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

const onSubmit = async (data: ContactFormData) => {
  try {
    await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    name: data.name,
    email: data.email,
    message: data.message,
  },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I’ll get back to you soon!",
    });

    form.reset();
  } catch (error) {
    console.error("EmailJS error:", error);
    toast({
      title: "Failed to send message",
      description: "Please try again later.",
      variant: "destructive",
    });
  }
};


  return (
    <motion.section
      id="contact"
      className="py-32 px-6 relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent" />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            LET’S <span className="text-primary">CONNECT</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Looking for opportunities to learn and grow. Feel free to reach out
            if you'd like to collaborate or just chat!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="glass rounded-2xl p-8"
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <Input
                            placeholder="Your Name"
                            className="pl-12 h-12 bg-background/50 rounded-xl"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <Input
                            type="email"
                            placeholder="Your Email"
                            className="pl-12 h-12 bg-background/50 rounded-xl"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
                          <Textarea
                            placeholder="Your Message"
                            className="pl-12 min-h-[140px] bg-background/50 rounded-xl resize-none"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-medium rounded-full hover:shadow-glow transition-all"
                >
                  <Send size={18} />
                  Send Message
                </motion.button>
              </form>
            </Form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="flex flex-col items-center md:items-start gap-8"
          >
            <div className="glass rounded-2xl p-8 w-full">
              <h3 className="text-xl font-semibold mb-4">
                Get in touch
              </h3>

              <p className="text-muted-foreground mb-6">
                Prefer to reach out directly? Connect with me on these platforms.
              </p>

              <div className="flex gap-4">
                {socials.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: false }}
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 glass rounded-full flex items-center justify-center text-muted-foreground hover:text-accent"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default Contact;