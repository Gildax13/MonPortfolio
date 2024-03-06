import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">A PROPOS</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center ">
        Étant passionné d&apos;informatique et de jeux vidéo, j&apos;ai toujours eu l&apos;envie de créer dans cet environnement.
Je me suis donc intéressé la création de site internet pour rendre accessibles des choses qui ne l&apos;étaient pas.
          <br />
          <br />
          Grâce à mes diplômes (BTS Système Numérique Informatique et Réseaux ainsi que mon bachelor Concepteur Développeur d&apos;Applications) j&apos;ai pu accentuer mes connaissances et développer des sites internet.        </p>
      </div>
    </section>
  );
};

export default About;
