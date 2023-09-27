export function Introduction() {
  return (
    <div className="flex flex-col gap-2">
      <div>
        La voiture électrique est une partie de la réponse à l'urgence climatique.
        On peut considérer qu'elle permet d'émettre 2 à 3 fois moins de CO2 qu'une voiture thermique de taille équivalente, production comprise.
      </div>
      <div>
        Le gouvernement français a annoncé vouloir valoriser via le bonus écologique l'achat de voitures électriques dont l'empreinte carbone initiale est faible, c'est à dire celles dont la production et le transport sont peu émetteurs de CO2.
      </div>
      <div>
        Après une phase de consultation, un <a
          className="text-blue-600"
          target="_blank" rel="noreferrer"
          href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000048088866"
        >décret</a> est paru le 19 septembre 2023 afin de déterminer le mécanisme d'attribution du bonus, accompagné d'un <a
          className="text-blue-600"
          target="_blank" rel="noreferrer" href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000048088891">arrêté</a> détaillant les calculs du score environnemental permettant l'obtention du bonus.
           L'empreinte carbone y est transformée en un score environnemental dont la valeur doit atteindre au moins 60 pour que l'acheteur puisse prétendre au bonus écologique.
      </div>
      <div>
        Le modèle de calcul retenu est l'occasion de comprendre l'influence des nombreux paramètres de la production et du transport d'une voiture électrique sur son empreinte carbone totale.
      </div>
      <div>
        C'est ce modèle que nous vous proposons d'explorer ici, à travers des exemples et une simulation entièrement personnalisable.
      </div>
      <div>
        ⚠️ Attention : À défaut d'avoir accès aux valeurs exactes, les hypothèses prises en compte dans cette simulation concernant la répartition des métaux utilisés et les distances parcourues sont très approximatives. L'objectif est avant tout d'avoir une idée des ordres de grandeur de l'impact de chacun des paramètres. N'hésitez pas à contribuer pour préciser les hypothèses !
      </div>
      <div>
        On notera également que l'arrêté définitif ne retient qu'une seule variante de batterie (NMC811-graphite). Nous avons choisi de conserver toutes les variantes de batterie proposées dans la consultation publique. En effet, cela permet de voir l'impact de la chimie de la batterie sur l'empreinte carbone d'une voiture. En particulier, la chimie LFP, chimie sans cobalt et de plus en plus répandue, permet de diminuer d'environ 30% l'impact de la production de la batterie.
      </div>
    </div>
  )
}