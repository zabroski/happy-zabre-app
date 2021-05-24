import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Livraison de nouriture</h2>
      <p>
       choisissez vos plats préférés parmi notre large sélection de plats disponibles et savourez un délicieux déjeuner ou dîner à la maison ou n'importe où.  
      </p>
      <p>
      Tous nos repas sont cuisinés avec des ingrédients de haute qualité juste à temps et mis au point par un chef d'expérience!
      </p>
    </section>
  );
};

export default MealsSummary;