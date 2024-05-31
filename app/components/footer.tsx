import getUserLocale from "get-user-locale";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  const locale = getUserLocale();
  const getLinkedIn = (): string => {
    if (locale === "pt-BR") {
      return "https://www.linkedin.com/in/guilherme-bolfe";
    }
    return "https://www.linkedin.com/in/guilherme-bolfe/?locale=en_US";
  };

  const getResume = (): string => {
    if (locale === "pt-BR") {
      return "https://drive.google.com/file/d/1T_cnOd4JnOxUfjLFCPk6BQwPoFZTecp5/view?usp=sharing";
    }
    return "https://drive.google.com/file/d/18uB8glO1LFSUL1WMYNKSjjh8GqvlCt5Y/view?usp=sharing";
  };

  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href={getLinkedIn()}
          >
            <ArrowIcon />
            <p className="ml-2 h-7">LinkedIn</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/guilhermebolfe11"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">GitHub</p>
          </a>
        </li>

        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href={getResume()}
          >
            <ArrowIcon />
            <p className="ml-2 h-7">Resume</p>
          </a>
        </li>
      </ul>
    </footer>
  );
}
