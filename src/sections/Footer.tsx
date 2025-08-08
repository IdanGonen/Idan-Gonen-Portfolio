const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full pt-10 pb-6 relative text-primary">
      <div className="w-full flex justify-center items-center">
        <p className="text-center">
          © {year} Idan Gonen
        </p>
      </div>
    </footer>
  );
};

export default Footer;
