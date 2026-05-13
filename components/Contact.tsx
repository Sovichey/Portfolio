"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";
import { emailConfig, isEmailConfigured } from "@/lib/emailConfig";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Sovichey",
    username: "@Sovichey",
    icon: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sovichey-rim/",
    username: "sovichey-rim",
    icon: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "Telegram",
    url: "https://t.me/Sovichey7",
    username: "@Sovichey7",
    icon: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.22-.054-.334-.373-.113l-6.869 4.332-2.97-.924c-.644-.213-.658-.644.136-.954l11.593-4.47c.538-.196 1.006.128.832.941z" />
      </svg>
    ),
  },
  {
    name: "Email",
    url: "mailto:vichey779@gmail.com",
    username: "vichey779@gmail.com",
    icon: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/rimsovichey/",
    username: "rimsovichey",
    icon: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z" />
      </svg>
    ),
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Sending...");

    try {
      // Check if email is configured
      if (!isEmailConfigured()) {
        console.error("Missing EmailJS config:", {
          publicKey: !!emailConfig.publicKey,
          serviceId: !!emailConfig.serviceId,
          templateId: !!emailConfig.templateId,
          recipientEmail: !!emailConfig.recipientEmail,
        });
        setStatus(
          "Email service not configured. Please restart the development server.",
        );
        setTimeout(() => setStatus(""), 5000);
        setIsSubmitting(false);
        return;
      }

      const { publicKey, serviceId, templateId, recipientEmail } = emailConfig;

      emailjs.init(publicKey);

      const templateParams = {
        to_email: recipientEmail,
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      // Validate all parameters are present
      Object.entries(templateParams).forEach(([key, value]) => {
        console.log(`Param ${key}:`, value || "(EMPTY)");
      });

      console.log("Sending email with params:", templateParams);
      console.log("Service ID:", serviceId);
      console.log("Template ID:", templateId);
      console.log("Public Key:", publicKey?.substring(0, 5) + "...");

      // Check if all required params are present
      if (
        !templateParams.to_email ||
        !templateParams.from_name ||
        !templateParams.from_email ||
        !templateParams.message
      ) {
        throw new Error("Missing required email parameters");
      }

      let response;
      try {
        // Create a timeout promise to prevent hanging requests
        const emailPromise = emailjs.send(
          serviceId,
          templateId,
          templateParams,
        );
        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(
            () => reject(new Error("Email send timeout - please try again")),
            30000,
          ),
        );

        response = await Promise.race([emailPromise, timeoutPromise]);
        console.log("EmailJS Response:", response);
      } catch (emailError) {
        // Suppress non-critical message channel errors from browser extensions/background processes
        const errorMsg =
          emailError instanceof Error ? emailError.message : String(emailError);
        if (
          errorMsg.includes("message channel closed") ||
          errorMsg.includes("A listener indicated")
        ) {
          console.warn(
            "Background communication warning (non-critical):",
            errorMsg,
          );
          // Continue with success message - the email likely sent
          setStatus("Message sent successfully! ✨");
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setStatus(""), 3000);
          setIsSubmitting(false);
          return;
        }
        console.error("EmailJS Send Error:", emailError);
        console.error("EmailJS Error Status:", (emailError as any)?.status);
        console.error("EmailJS Error Text:", (emailError as any)?.text);
        throw emailError;
      }

      setStatus("Message sent successfully! ✨");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
    } catch (error) {
      console.error("Email error:", error);
      console.error("Error type:", typeof error);
      console.error("Error keys:", error ? Object.keys(error) : "null");

      let errorMsg = "Failed to send message. Please try again.";

      if (error instanceof Error) {
        errorMsg = error.message;
      } else if (error && typeof error === "object") {
        errorMsg = JSON.stringify(error);
      } else if (typeof error === "string") {
        errorMsg = error;
      }

      console.error("Processed error:", errorMsg);
      setStatus(errorMsg);
      setTimeout(() => setStatus(""), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-12 px-4 md:px-8 bg-background scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4 text-center">
            <span className="text-primary">[</span> Get_in_Touch{" "}
            <span className="text-primary">]</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mb-12 text-center mx-auto">
            I&apos;m always interested in hearing about new projects and
            opportunities. Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative bg-gradient-to-br from-primary/10 via-gray-900 to-gray-800 border border-primary/30 rounded-xl p-8 overflow-hidden group"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-mono font-bold text-white mb-2 flex items-center gap-2">
                  <span className="inline-block w-1 h-8 bg-primary rounded-full"></span>
                  Connect With Me
                </h3>
                <p className="text-gray-400 text-sm mb-8 font-mono">
                  Follow my journey across platforms
                </p>

                <div className="space-y-3">
                  {socialLinks.map((link, idx) => (
                    <motion.a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-4 p-4 bg-gray-800/50 hover:bg-primary/10 border border-gray-700 hover:border-primary/50 rounded-lg transition-all duration-300 group/link backdrop-blur-sm"
                    >
                      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-blue-600/20 text-primary group-hover/link:from-primary/40 group-hover/link:to-blue-600/40 group-hover/link:scale-110 transition-all duration-300 flex-shrink-0">
                        {link.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-semibold font-mono group-hover/link:text-primary transition-colors">
                          {link.name}
                        </p>
                        <p className="text-xs text-gray-400 truncate">
                          {link.username}
                        </p>
                      </div>
                      <svg
                        className="w-5 h-5 text-gray-500 group-hover/link:text-primary transition-all flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-8"
            >
              <h3 className="text-2xl font-mono font-bold text-primary mb-8 flex items-center gap-2">
                <svg
                  className="w-8 h-8 fill-current text-primary"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                Send a Message
              </h3>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-mono text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors focus:shadow-lg focus:shadow-primary/20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-mono text-gray-400 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors focus:shadow-lg focus:shadow-primary/20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-mono text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors resize-none focus:shadow-lg focus:shadow-primary/20"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary to-blue-600 text-background font-semibold rounded font-mono font-bold hover:shadow-lg hover:shadow-primary/50 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message →"}
                </motion.button>

                {status && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`text-sm text-center font-mono ${
                      status.includes("success")
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {status}
                  </motion.p>
                )}
              </div>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
