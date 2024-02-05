import { info } from "../../data/info";

interface ContactProps {
  contact: (typeof info)["contact"];
}

export default function Contact(props: ContactProps) {
  const { contact } = props;

  return (
    <div className="flex lg:space-x-28 space-x-10 justify-center items-center">
      <a
        href={`mailto:${contact.email}`}
        target="_blank"
        rel="noreferrer"
        className="text-secondary dark:text-dk-secondary"
      >
        <i className="fas fa-envelope lg:text-8xl text-5xl hover:text-accent dark:hover:text-dk-accent"></i>
      </a>
      <a
        href={contact.github}
        target="_blank"
        rel="noreferrer"
        className="text-secondary dark:text-dk-secondary"
      >
        <i className="fab fa-github lg:text-8xl text-5xl hover:text-accent dark:hover:text-dk-accent"></i>
      </a>
      <a
        href={contact.linkedin}
        target="_blank"
        rel="noreferrer"
        className="text-secondary dark:text-dk-secondary"
      >
        <i className="fab fa-linkedin lg:text-8xl text-5xl hover:text-accent dark:hover:text-dk-accent"></i>
      </a>
      <a
        href={contact.twitter}
        target="_blank"
        rel="noreferrer"
        className="text-secondary dark:text-dk-secondary"
      >
        <i className="fab fa-x-twitter lg:text-8xl text-5xl hover:text-accent dark:hover:text-dk-accent"></i>
      </a>
    </div>
  );
}
