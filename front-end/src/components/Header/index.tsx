// style
import "./_header.scss";

// images
import banner from "../../assets/images/banner/Banner01.png";

export default function Header() {
	return (
		<header className="header">
			<img className="header--img" src={banner} alt="Image de bannière" />
			<div className="header__content">
				<h1 className="header__content--title">David Lafont</h1>
				<p className="header__content--text">
					Récupération féraille et tous métaux
				</p>
			</div>
		</header>
	);
}
