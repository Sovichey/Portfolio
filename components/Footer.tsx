"use client";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/Sovichey" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/sovichey-rim/" },
  { name: "Telegram", url: "https://t.me/Sovichey7" },
  { name: "Email", url: "mailto:vichey779@gmail.com" },
];

export function Footer() {
  return (
    <footer className="w-full py-8 px-4 md:px-8 border-t border-gray-700 bg-background">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-gray-400 text-xs font-mono uppercase tracking-widest">
          © 2026 SOVICHEY. All rights reserved.
        </p>

        <div className="flex gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary text-xs font-mono uppercase transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
