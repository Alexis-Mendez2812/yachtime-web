/*-----------IMPORT UTILITIES-----------*/
import { Button, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
/*--------------------------------------------------------*/

export const ButtonGet = styled(Box)`
	background-color: #131211ce;
	width: 9vw;
	height: 6vh;
	display: flex;
	justify-content: center;
	transition: 0.5s;
	align-items: center;
	cursor: pointer;
	text-align: center;
	color: white;

	&:hover {
		background-color: #caa838;
		width: 10vw;
		height: 6.5vh;
	}
`;
