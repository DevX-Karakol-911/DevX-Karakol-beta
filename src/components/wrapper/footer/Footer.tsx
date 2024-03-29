import React, { FC, useContext } from "react";
import { useTheme } from "../../../hook/useTheme";
import "../footer/Footer.scss";
import logo from "../../../assets/logo.png";
import logoDark from "../../../assets/logo-dark.png";
// import instIcon from "../../../assets/icons/footer/instagram_icon.svg";
// import githubIcon from "../../../assets/icons/footer/github_icon.svg";
// import discordIcon from "../../../assets/icons/footer/discord_icon.svg";
import { TranslatorContext } from "../../../provider/TranslatorProvider";
import { NavLink } from "react-router-dom";
import { IsOpenProps } from "../Wrapper";

interface FooterProps extends IsOpenProps {
}

export const Footer: FC<FooterProps> = (props) => {
	const { isDark, setIsDark } = useTheme();
	const { t } = useContext(TranslatorContext);

	return (
		<div className="footer">
			<div className="container">
				<div className="content">
					<div className="footer__top">
						<div className="block">
							<NavLink
								to="/"
								onClick={() => {
									props.setIsOpen(false);
									props.setIsOpenDropdown(false);
									props.setIsOpenDropdownLanguage(false);
								}}
							>
								{isDark ? (
									<img className="logo" src={logo} alt="DevX logo" />
								) : (
									<img className="logo" src={logoDark} alt="DevX logo" />
								)}
							</NavLink>
							<p>{t("footer__text1__block1")}</p>
						</div>
						<div className="block">
							<h6>{t("footer__title__block2")}</h6>
							<a className="link__text" href="#">{t("footer__text1__block2")}</a>
							<a className="link__text" href="#">{t("footer__text2__block2")}</a>
						</div>
						<div className="block">
							<h6>{t("footer__title__block3")}</h6>
							<a className="link__text" href="#">{t("footer__text1__block3")}</a>
							<a className="link__text" href="#">{t("footer__text2__block3")}</a>
							<a className="link__text" href="#">{t("footer__text3__block3")}</a>
						</div>
						<div className="block">
							<h6>{t("footer__title__block4")}</h6>
							<a className="link__text" href="#">{t("footer__text1__block4")}</a>
							<a className="link__text" href="#">{t("footer__text2__block4")}</a>
						</div>
					</div>
					<hr />
					<div className="footer__bottom">
						<div className="copyright">{t("footer__copyright")}</div>
						<div className="icons">
							<a href="https://www.instagram.com/elcho911/" target="_blank">
								{/* <img src={instIcon} alt="inst" /> */}
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
									<path
										d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
									<circle cx="16.806" cy="7.207" r="1.078"></circle>
									<path
										d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
								</svg>
							</a>
							<a href="https://github.com/Elkhan2003" target="_blank">
								{/* <img src={githubIcon} alt="github" /> */}
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
									<path
										d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
									></path>
								</svg>
							</a>
							<a href="https://discord.gg/NZpxaY4CGC" target="_blank">
								{/* <img src={discordIcon} alt="discord" /> */}
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
									<path
										d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"></path>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
