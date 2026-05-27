import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full font-bold text-sm text-center text-gray-600 p-4">
      <a href="https://www.linkedin.com/in/aman-tripathi-a3abb4290/">Copyright ⓒ {year}</a>
    </footer>
  );
};

export default Footer;
