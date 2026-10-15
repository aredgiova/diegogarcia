import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/config/site";

const socialLinks = [
  { name: "Facebook", icon: "facebook", href: siteConfig.social.facebook },
  { name: "Instagram", icon: "instagram", href: siteConfig.social.instagram },
  { name: "TikTok", icon: "tiktok", href: siteConfig.social.tiktok },
] as const;

export function FloatingSocialLinks() {
  return (
    <nav className="floating-social" aria-label="Redes sociales">
      <ul>
        {socialLinks.map(social => (
          <li key={social.icon}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${social.name} de Diego García (abre en una nueva pestaña)`}
            >
              <Icon name={social.icon} />
              <span className="floating-social-label" aria-hidden="true">{social.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
