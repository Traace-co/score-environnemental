export function Introduction() {
  return (
    <div className="flex flex-col gap-2">
      <div>
        La voiture électrique est une partie de la réponse à l'urgence climatique.
        On peut considérer qu'elle permet d'émettre 2 à 3 fois moins de CO2 qu'une voiture thermique de taille équivalente, production comprise.
      </div>
      <div>
        Récemment, le gouvernement français a annoncé vouloir valoriser via le bonus écologique l'achat de voitures électriques dont l'empreinte carbone initiale est faible, c'est à dire celles dont la production et le transport sont peu émetteurs de CO2.
      </div>
      <div>
        Une consultation est ouverte <a href="https://www.consultations-publiques.developpement-durable.gouv.fr/projet-de-decret-relatif-au-conditionnement-de-l-a2898.html">[lien]</a> <strong>du 28/07/2023 au 25/08/2023</strong>, présentant un projet de décret et un projet d'arrêté fixant les conditions d'éligibilité au bonus écologique des voitures électriques. L'empreinte carbone y est transformée en un score environnemental dont la valeur doit atteindre au moins 60 pour que l'acheteur puisse prétendre au bonus écologique.
      </div>
      <div>
        Le modèle de calcul retenu, proposé par l'Ademe, est l'occasion de comprendre l'influence des nombreux paramètres de la production et du transport d'une voiture électrique sur son empreinte carbone totale.
      </div>
      <div>
        C'est ce modèle que nous vous proposons d'explorer ici, à travers des exemples et une simulation entièrement personnalisable.
      </div>
      <div>
        ⚠️ Attention : À défaut d'avoir accès aux valeurs exactes, les hypothèses prises en compte dans cette simulation concernant la répartition des métaux utilisés et les distances parcourues sont très approximatives. L'objectif est avant tout d'avoir une idée des ordres de grandeur de l'impact de chacun des paramètres. N'hésitez pas à contribuer pour préciser les hypothèses !
      </div>
    </div>
  )
}