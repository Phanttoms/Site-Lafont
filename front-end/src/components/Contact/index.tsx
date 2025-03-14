// style
import "./_contact.scss";

// images
import logoTel from "../../assets/logo/Logo-tel.jpg";
import logoGPS from "../../assets/logo/Logo-GPS.png";

export default function Contact() {
	return (
		<section className="contact">
			<div className="contact__content">
				<h2 className="contact__content--title">Contact</h2>
				<div className="contact__content__info">
					<img
						className="contact__content__info--img"
						src={logoTel}
						alt="Logo de téléphone"
					/>
					<p className="contact__content__info--text">06 11 93 47 98</p>
				</div>
				<div className="contact__content__info">
					<img
						className="contact__content__info--img"
						src={logoGPS}
						alt="Logo courrier"
					/>
					<p className="contact__content__info--text">
						1 rue des buvry 80700 Andechy
					</p>
				</div>
			</div>
		</section>
	);
}
