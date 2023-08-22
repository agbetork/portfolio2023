import { GitHub, Twitter, Mail } from "react-feather";
import { Snapchat, Whatsapp } from "iconsax-react";
export const Socials = [
  {
    id: 1,
    name: "Twitter",
    link: "https://twitter.com/agbetork",
    icon: (
      <span>
        <Twitter className="h-6 w-6" />
      </span>
    ),
  },
  {
    id: 2,
    name: "GitHub",
    link: "https://github.com/agbetork",
    icon: (
      <span>
        <GitHub className="h-6 w-6" />
      </span>
    ),
  },
  {
    id: 3,
    name: "Mail",
    link: "https://mail.google.com/mail/u/0/?ogbl#inbox",
    icon: (
      <span>
        <Mail className="h-6 w-6" />
      </span>
    ),
  },
  {
    id: 3,
    name: "Snapchat",
    link: "https://www.snapchat.com/add/ka.edem?share_id=OTY5Nzky&locale=en_GH",
    icon: (
      <span>
        <Snapchat className="h-7 w-7" />
      </span>
    ),
  },
  {
    id: 3,
    name: "Mail",
    link: "https://wa.me/+233575231445",
    icon: (
      <span>
        <Whatsapp className="h-7 w-7" />
      </span>
    ),
  },
];
