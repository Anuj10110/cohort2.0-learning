// import hero from  "./mainPage.js";

const navbar = () => {
  var logo = React.createElement("img", {
    src: "https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg",
    alt: "react logo",
    height: "40px",
    width: "40px",
  });
  var home = React.createElement("a", { href: "#", id: "nav" }, "Home");
  var about = React.createElement("a", { href: "#", id: "nav" }, "About");
  var services = React.createElement("a", { href: "#", id: "nav" }, "Services");
  var contact = React.createElement("a", { href: "#", id: "nav" }, "Contact");
  var call = React.createElement(
    "button",
    { href: "#", id: "Call" },
    "Call Us",
  );

  var div = React.createElement("div", { id: "navbar" }, [
    logo,
    home,
    about,
    services,
    contact,
    call,
  ]);
  return div;
};

const hero = () => {
  var h3 = React.createElement("h2", { id: "hero_text" }, "+200");
  var p3 = React.createElement("p", { id: "para" }, "Projects Completed");
  var h_3 = React.createElement("h2", { id: "hero_text" }, "+50");
  var p_3 = React.createElement("p", { id: "para" }, "Startup Raised");

  var cantainer = React.createElement(
    "div",
    { id: "hero_text_parent" },
    h3,
    p3,
  );
  var cantainer_p = React.createElement(
    "div",
    { id: "hero_text_parent" },
    h_3,
    p_3,
  );

  var parent_div = React.createElement(
    "div",
    { id: "hero_text_parent_div" },
    cantainer,
    cantainer_p,
  );

  var h1 = React.createElement("h1", { id: "center_h1" }, "Hello");
  var p = React.createElement(
    "p",
    { id: "hero-para" },
    "- It's D.Nova a Design wizard",
  );

  var parentCenter = React.createElement("div", { id: "parent-center" }, h1, p);

  var h4 = React.createElement("h4", { id: "scroll-down" }, "Scroll Down !");

  var left_parent = React.createElement("div", { id: "left-parent" }, [
    parent_div,
    parentCenter,
    h4,
  ]);

  var right_img = React.createElement("img", {
    src: "https://day-67.vercel.app/assets/wolf-pixel-D13avuvU.png",
    alt: "img",
  });

  var div = React.createElement("div", { id: "hero" }, [
    left_parent,
    right_img,
  ]);

  return div;
};

const parent = () => {
  return React.createElement("div", { id: "parent" }, [navbar(), hero()]);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent());
