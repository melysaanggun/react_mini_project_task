import React from "react";
import ContactSection from "../../components/ui/ContactSection";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HeaderTheme from "../../components/ui/HeaderTheme";

const Contact = () => {
  return (
    <>
      <Header />
      <HeaderTheme title={"CONTACT US"} />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Contact;
