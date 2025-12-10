const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-10">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <h3 className="font-display text-3xl font-bold mb-4">AAHARYA</h3>

          {/* Tagline */}
          <p className="text-background/70 mb-6 max-w-md mx-auto">
            Morning tiffins and evening chats served fresh every day. Taste the
            authentic South Indian flavors.
          </p>

          {/* Divider */}
          <div className="w-24 h-px bg-background/20 mx-auto mb-6" />

          {/* Copyright */}
          <p className="text-sm text-background/60">
            © {currentYear} AAHARYA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
