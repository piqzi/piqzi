import { socials } from "@/data/socials";

export default function Socials() {
    return (
      <div>
        <h1 className="text-title">Socials</h1>
        <div className="flex flex-col w-fit">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.link}
              className="w-fit social-link"
              target="_blank"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    );
}