import React from "react";
import HighlightIcon from "@mui/icons-material/Highlight";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import ColorLensIcon from "@mui/icons-material/ColorLens";

function Header() {
	return (
		<header>
			<h1>
				<HighlightIcon />
				Keeper
			</h1>
			<h1>
				<div>
					<button type="button">
						<h1>
							<ColorLensIcon fontSize="large" className="header-icons" />
						</h1>
					</button>
					<input type="color" value="black"></input>
					<InvertColorsIcon fontSize="large" className="header-icons" />
				</div>
			</h1>
		</header>
	);
}

export default Header;
