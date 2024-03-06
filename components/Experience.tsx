import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h1 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EXPERIENCE
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl ">
        <div className="flex  flex-row justify-between pt-5">
          <p className="text-gray-300 ">
            <span className="font-semibold">CG-Conception /</span> Développeur WEB
          </p>
          <p className="text-gray-300">AOUT 2022</p>
        </div>
        <p className="text-gray-300 pt-5">
          Ayant travaillé pour Cg-Conception, jFai eu comme première tâche de développer le site internet de l&apos;entreprise.
          Petite PME de Touraine qui propose ses services dans Électronique, la micro-électronique, les logiciels embarqués, le sourcing, le développement. Mais est avant tout un Bureau d&apos;études généraliste
          <br />
          <br />
          Avec ma légère expérience dans le développement web ainsi que la demande de réalisation du site via un WordPress, j&apos;ai réalisé une partie grâce à Elementor, mais aussi une partie en PHP, HTML, CSS.
          Le site permet maintenant de montrer ce que CG-Conception propose pour ses clients.
        </p>
        <div className="flex-col flex sm:flex-row ">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            HTML
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            CSS
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            PHP
          </div>
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Wordpress
          </div>
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Elementor
          </div>
        </div>
      </div>
      <hr className="w-48 h-1 mx-auto my-4 bg-red-100 border-0 rounded md:my-10 dark:bg-red-700"></hr>
      <div className=" container mx-auto 2xl ">
        <div className="flex  flex-row justify-between pt-5">
          <p className="text-gray-300 ">
            <span className="font-semibold">Berclet /</span> Développeur Web
          </p>
          <p className="text-gray-300">AOUT 2022 - AOUT 2023</p>
        </div>
        <p className="text-gray-300 pt-5">
          Pour le lancement du produit Berclet, nous avons réalisé divers sites internet. Allant des sites teasing au site caractéristique du produit.
          Actuellement, Berclet a un site internet mêlant esthétique et caractéristiques et explication de ce qu&apos;est le Berclet.
          <br></br>
          <br></br>
          Le Berclet est un appareil qui nous permet de prendre le contrôle du son de nos applications sur lordinateur,
          Il est conçu et fabriqué en France avec une simplicité, rapidité et une très bonne efficacité.
          C&apos;est donc pour cela qu&apos;après la sortie des sites dit &apos;vitrines&apos;, nous avons développé une Boutique E-Commerce grâce a WooCommerce et Wordpress.
        </p>
        <div className="flex-col flex sm:flex-row ">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            HTML
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            CSS
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            PHP
          </div>
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Wordpress
          </div>
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            WooCommerce
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
