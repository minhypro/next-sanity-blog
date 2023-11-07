import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const socialList = [
  {
    title: "Facebook",
    icon: <Facebook className="hover:text-blue-500" />,
    href: "https://www.facebook.com/minhy95/",
  },
  {
    title: "LinkedIn",
    icon: <Linkedin className="hover:text-sky-500" />,
    href: "https://www.linkedin.com/in/leminhy/",
  },
  {
    title: "Instagram",
    icon: <Instagram className="hover:text-violet-500" />,
    href: "https://www.instagram.com/minhy95_/",
  },
];

const SocialButtons = () => {
  return (
    <div className="hidden gap-4 xl:flex">
      {socialList.map((item) => (
        <Link key={item.title} href={item.href} title={item.title}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialButtons;
