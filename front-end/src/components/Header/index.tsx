// style
import "./_header.scss";

export default function Header() {
	return (
		<header className="header">
			<img
				className="header--img"
				srcSet="/images/banner/Banner800px.webp 600w, /images/banner/Banner01.webp 1200w"
				sizes="(max-width: 600px) 100vw, 1200px"
				src="/images/banner/Banner01.webp"
				alt="Image de bannière"
			/>
			<div className="header__content">
				<h1 className="header__content--title">David Lafont</h1>
				<p className="header__content--text">
					Récupération féraille et tous métaux
				</p>
			</div>
		</header>
	);
}
