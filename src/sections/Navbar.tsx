type HeaderProps = {
  onNavigate: {
    about: () => void;
    experience: () => void;
    education: () => void;
    contact: () => void;
  };
};

const Header = ({ onNavigate }: HeaderProps) => {
  return (
    <header className="w-full pt-10 m-auto relative text-primary">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-center items-center space-x-8">
        <a
          className="py-2 px-3 cursor-pointer text-lg hover:text-secondary transition-colors duration-200"
          onClick={onNavigate.about}
        >
          About
        </a>
        <a
          className="py-2 px-3 cursor-pointer text-lg hover:text-secondary transition-colors duration-200"
          onClick={onNavigate.education}
        >
          Education
        </a>
        <a
          className="py-2 px-3 cursor-pointer text-lg hover:text-secondary transition-colors duration-200"
          onClick={onNavigate.experience}
        >
          Experience
        </a>
        <a
          className="py-2 px-3 cursor-pointer text-lg hover:text-secondary transition-colors duration-200"
          onClick={onNavigate.contact}
        >
          Contact
        </a>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden flex justify-center items-center gap-3 px-4">
        <a
          className="py-2 px-3 cursor-pointer text-sm hover:text-secondary border border-gray-600 rounded transition-colors duration-200"
          onClick={onNavigate.about}
        >
          About
        </a>
        <a
          className="py-2 px-3 cursor-pointer text-sm hover:text-secondary border border-gray-600 rounded transition-colors duration-200"
          onClick={onNavigate.education}
        >
          Education
        </a>
        <a
          className="py-2 px-3 cursor-pointer text-sm hover:text-secondary border border-gray-600 rounded transition-colors duration-200"
          onClick={onNavigate.experience}
        >
          Experience
        </a>
        <a
          className="py-2 px-3 cursor-pointer text-sm hover:text-secondary border border-gray-600 rounded transition-colors duration-200"
          onClick={onNavigate.contact}
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
