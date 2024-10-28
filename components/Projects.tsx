import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJETS
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 1x1  ">
        <div className="flex-col flex md:flex-row  mt-7">
          <Link
            href="https://cg-conception.fr/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/cgc.png"
                height={150}
                width={200}
                alt="CG-Conception"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">CG-Conception</p>
                <p className="text-gray-500 text-[15px]">
                  Concevoir le site internet de l&apos;entreprise CG-Conception, afin de mettre en avant leur projet. On y retrouvera aussi tout les savoir disponible au sein de l&apos;entreprise
                </p>
              </div>
            </div>
          </Link>
          </div>
          <div className="flex-col flex md:flex-row ">
          <Link
            href="https://site-fait-pour-berclet.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/berclet.png"
                height={150}
                width={200}
                alt="berclet"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Berclet</p>
                <p className="text-gray-500 text-[15px]">
                  Développement des sites internet vitrines, teaser et boutique majoritairement en HTML, CSS, JS afin de mettre en valeur les caractéristiques du Berclet. Le site ici est une copie de l&apos;ancien site réaliser. Aujourd&apos;hui ce n'est plus celui-ci qui est en ligne.
                </p>
              </div>
            </div>
          </Link>
          
        </div>
        <div className="flex-col flex md:flex-row ">
          <Link
            href="Memoire.pdf"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/logoassemblage.png"
                height={150}
                width={200}
                alt="AssemblagePro"
              />
              <div className=" p-3 ">
                <p className="text-white font-semibold text-xl">
                  Assemblage.pro
                </p>
                <p className="text-gray-500 text-[15px]">
                  Développement d&apos;un système de gestion des stocks en Symphony PHP. Vous trouverez mon mémoire de fin d&apos;année de Bachelor qui en parle en cliquant sur l&apos;image et retrouvez toutes les informations sur https://assemblage.pro
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row ">
          <Link
            href="https://landingpage-test-phi.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/logomediapilote.png"
                height={150}
                width={200}
                alt="mediapilote"
              />
              <div className=" p-3 ">
                <p className="text-white font-semibold text-xl">
                  Mediapilote
                </p>
                <p className="text-gray-500 text-[15px]">
                  Développement d&apos;une landing page comme exercice pour un entretien d&apos;embauche. Le but était de réaliser cette page en moins de 48h (moins de 24h perso) en respectant des consignes bien précises. La page est réalisée complètement en HTML, CSS avec du JS.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
