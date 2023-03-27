import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "@mui/material/Link";
function Footer() {
	const year = new Date().getFullYear();
	const contact = [
		{
			icon: <GitHubIcon />,
			link: "https://github.com/daydash/",
		},
		{
			icon: <LinkedInIcon />,
			link: "https://www.linkedin.com/in/daydash/",
		},
	];
	return (
		<footer>
			<div className="bbcy">
				<p>Build by</p>
				<p>
					<strong>Yash Bhatnagar</strong>
				</p>
				<div>
					{contact.map((item, index) => {
						return (
							<Link href={item.link} key={index}>
								{item.icon}
							</Link>
						);
					})}
				</div>
			</div>
		</footer>
	);
}

export default Footer;
