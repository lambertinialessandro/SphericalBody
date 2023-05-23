import classes from "./SphericalSystem.module.css";

function SphericalSystem() {
  return (
    <>
      <div className={`${classes.initDiv} z-10`}>
        <div className={classes.linkTextContext}>
          <h4 className={classes.linkTitle}>SPHERICAL SYSTEM</h4>
        </div>
      </div>

      <div className={classes.containerSphericalSystem}>
        <p className={classes.textSphericalSystem}>
          The Spherical System, developed by choreographer and researcher
          Fernando Domínguez Rincón, offers a particular approach to connecting
          the mind and body by visualizing The Spherical Body. This method is
          captivating and involves a guided experience that allows practitioners
          to reimagine their bodies in a new way.
        </p>
        <p className={classes.textSphericalSystem}>
          Even though the system is complex, a few fundamental principles are
          shared during "The Spherical Body Performance" to help the audience
          understand the creative process behind the choreographic material. To
          activate this system, participants should take a few deep breaths
          before closing their eyes and listening to the instructor's verbal
          description of how the Spherical Body is constructed.
        </p>
        <p className={classes.textSphericalSystem}>
          Then, they will move each sphere, exploring each movement's
          initiation, direction, intensity, amplitude, effect, and
          possibilities. Finally, participants will choose a "Code of Spheres"
          to improvise using various tasks offered by The Spherical System.
        </p>
        <p className={`mt-[20px] ${classes.textSphericalSystem}`}>
          <b>Bio</b>
          <br />
          Fernando Domínguez Fernando Domínguez Rincón (Mex. 1987) (He/They) has
          a B.A. degree in contemporary and modern dance (2011. CODARTS Dance)
          and an M.A. degree in Choreography (2023. CODARTS – FONTYS), both
          studies in The Netherlands, and has built a career as a dancer,
          teacher, choreographer, producer, dramaturg, and filmmaker.
        </p>
        <p className={classes.textSphericalSystem}>
          Founder and Director of FDR DANCE, Domínguez has produced
          international exchange projects between Europe and Mexico, with
          companies such as Nederlands Dans Theater, Budapest Dance Theater,
          Hamburg Dance Company, and official partner of Eurasia Dance Project
          International Network.
        </p>
        <p className={classes.textSphericalSystem}>
          As a dance filmmaker, awarded more than 50 times worldwide, including
          Best Short Film for LGBTQ+ at Cannes Short Film Festival (2015). As a
          choreographer, Dominguez develops the sensorial movement method “The
          Spherical System” and has worked in companies such as Ballets de San
          Juan Puerto Rico, CEPRODAC, CODARTS Dance Company, and Hamburg Dance
          Company, and dance docent in institutions such as CDSH - Contemporary
          Dance School Hamburg, ESMDM, and University of the Arts
          Aguascalientes, among others.
        </p>
        <p className={classes.textSphericalSystem}>
          As a dancer, in projects like '50 years NDT Van Manen / Kylián for
          Young Dancers", Het Lab Utrecht, and De Dansers, among others, he
          danced repertoire by Jiri Kylián, Hans Van Manen, Lucinda Childs,
          Martha Graham, Lila López, Adriaan Luteijn, Liat Magnezy, Keith D.
          Randolph, Arno Schuitemaker, and Melissa Ellberger, among others.
          Fernando obtained the scholarship from Corrie Hartong Fonds (2010).
          Dominguez completed fellowship studies at American Ballet Theater
          (2006. N.Y.), awarded by YAGP.
        </p>
      </div>
    </>
  );
}

export default SphericalSystem;
