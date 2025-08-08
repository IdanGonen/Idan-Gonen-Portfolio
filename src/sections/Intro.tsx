import profile from "@/assets/images/me.webp";

const Intro = () => {
  return (
    <div className="w-full pt-15 gap-x-10 m-auto relative text-primary flex flex-col md:flex-row items-center md:items-start gap-y-6 md:gap-y-0">
      <div>
        <img
          src={profile}
          alt="Idan Gonen"
          className="rounded-3xl w-48 h-48 md:w-64 md:h-64 object-contain"
          width={250}
          height={250}
          loading="lazy"
        />
      </div>
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-4xl">
          Hi, I am{" "}
          <span className="text-3xl md:text-4xl font-bold text-secondary">
            Idan Gonen.
          </span>
        </h1>
        <p className="text-base md:text-lg mt-4">
          Backend | Full Stack Developer with several years of profesional
          experience.
        </p>
        <div className="mt-4 flex gap-x-4 justify-center md:justify-start">
          <a href="https://github.com/IdanGonen" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-github-icon lucide-github transition-colors duration-200 hover:text-gray-500 cursor-pointer"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>

          <a href="https://www.linkedin.com/in/idangonen/" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-linkedin-icon lucide-linkedin transition-colors duration-200 hover:text-[#0a66c2] cursor-pointer"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
