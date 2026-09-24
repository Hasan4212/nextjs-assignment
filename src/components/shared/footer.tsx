const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-[#080a0f]">
      <div className="mx-auto flex min-h-[76px] max-w-[1400px] items-center justify-between px-6 sm:px-8">

        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* Dumbbell icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="h-4 w-4 text-[#b6ff00]"
          >
            <path d="M6 7v10" />
            <path d="M18 7v10" />
            <path d="M3 9v6" />
            <path d="M21 9v6" />
            <path d="M6 12h12" />
          </svg>

          <span className="text-[11px] font-bold tracking-wide text-white">
            FITLOG
          </span>
        </div>

        {/* Copyright */}
        <p className="text-right text-[10px] text-gray-500 sm:text-xs">
          © 2026 FitLog — Workout Library. Train hard, log harder.
        </p>

      </div>
    </footer>
  );
};

export default Footer;