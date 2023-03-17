import React from "react";

const About = () => {
  return (
    <div
      className="min-h-screen pt-40 px-10"
    >
      <div className="max-w-4xl mx-auto text-white">
        <p className="mb-10 text-center font-boldtracking-widest uppercase text-3xl md:text-5xl">
          About us
        </p>
        <p className="mb-5">
          Welcome to our currency conversion React app! Our app is designed to
          make it easy for you to find the value of one currency in another
          currency. Whether you're a seasoned investor or a casual traveler, our
          app has you covered.
        </p>
        <p className="mb-5">
          Our app is built using the React framework, which provides a seamless
          user experience and a fast, responsive interface. With just a few
          clicks, you can enter the currency you want to convert, select the
          currency you want to convert it to, and get an instant result.
        </p>
        <p className="mb-5">
          We use real-time currency exchange rates to ensure that our app
          provides accurate and up-to-date information. You can trust our app to
          give you the most current and reliable currency conversion rates
          available.
        </p>
        <p className="mb-5">
          Our app is user-friendly and intuitive, with a simple and clean
          design. We understand that currency conversion can be complicated, so
          we've made every effort to make our app as easy to use as possible.
        </p>
      </div>
    </div>
  );
};

export default About;
