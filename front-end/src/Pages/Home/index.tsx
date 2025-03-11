// composants de la page
import Header from "../../components/Header";
import Presentation from "../../components/Presentation";
import Exemple from "../../components/Exemple";
import Contact from "../../components/Contact";

export default function Home() {
	return (
		<>
			<Header />
			<Presentation />
			<Exemple />
			<Contact />
		</>
	);
}
