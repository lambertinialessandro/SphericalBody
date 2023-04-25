import classes from "./BodyTutorial.module.css";

function BodyTutorial({ title, subtitle }) {
  return (
    <div className={classes.Tutorial}>
      <h4 className={classes.TutorialTitle}>Title</h4>
      <p className={classes.TutorialTest}>
        Tutorial per utilizzare la mappa del corpo umano interattiva Benvenuti
        nella nostra mappa interattiva del corpo umano. Questo strumento è stato
        creato per aiutarti ad esplorare il nostro corpo in modo facile e
        divertente. Parte 1: Esplorare la mappa interattiva Quando accedi alla
        mappa, vedrai il nostro corpo umano schematizzato con dei cerchi che
        rappresentano le articolazioni. Premi su uno di questi cerchi per aprire
        un menù a tendina con tre opzioni: Descrizione: ti darà una breve
        descrizione dell'articolazione e del suo funzionamento; Esercizi: ti
        mostrerà una serie di esercizi specifici per rafforzare l'articolazione
        selezionata; Video: ti porterà direttamente al video che descrive
        l'articolazione e i suoi movimenti. Parte 2: Guardare i video
        Selezionando l'opzione Video, verrai reindirizzato a una nuova pagina
        dove potrai guardare il video riguardante l'articolazione selezionata.
        Il video mostrerà in dettaglio come funziona l'articolazione e come
        viene utilizzata durante l'attività fisica. Inoltre, potrai vedere gli
        esercizi che sono specifici per quella particolare articolazione. In
        conclusione, la nostra mappa interattiva del corpo umano ti aiuterà ad
        esplorare il nostro corpo in modo dettagliato e divertente. Speriamo che
        questo tutorial ti sia stato utile per iniziare ad utilizzare la nostra
        mappa.
      </p>
    </div>
  );
}

export default BodyTutorial;
