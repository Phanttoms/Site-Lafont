// style
import "./_exemple.scss";

// images
import exemple from "../../assets/images/exemple/Exemple01.webp";

export default function Exemple() {
	return (
		<section className="exemple">
			<div className="exemple__content">
				<img
					className="exemple__content--img"
					src={exemple}
					alt="Exemple de récupération"
				/>
				<div className="exemple__content--text">
					<p>7j/7j</p>
					<p>Travail propre et rapide</p>
				</div>
			</div>
			<div className="exemple__description">
				<h2>Récupération féraille et tous métaux</h2>
				<ul>
					<li>Batterie</li>
					<li>Fonte</li>
					<li>Alu</li>
					<li>Inox</li>
					<li>Cuivre</li>
					<li>Zinc</li>
					<li>Plomb</li>
					<li>Enlèvement d'épaves</li>
					<li>Débarras de caves</li>
					<li>Greniers</li>
					<li>Garages</li>
				</ul>
			</div>
		</section>
	);
}
