const Footer = () => {
  const name = localStorage.getItem("visitorName");

  return (
    <footer className="py-4 px-4 border-t border-border">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-muted-foreground text-sm">
          {name ? (
            <>Hey <span className="text-foreground font-medium">{name}!</span>, thanks for visiting</>
          ) : (
            <>Thanks for visiting 👋</>
          )}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
