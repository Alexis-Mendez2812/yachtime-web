import { Paper, Box, Grid, Typography, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
/*--------------------------------------------------------*/

export const Container = styled(Box)`
	width: 99.1vw;
	height: 4rem;
	display: flex;
`;

export const FilterBox = styled(Box)`
	background-color: rgba(238, 236, 236, 0.932);
	width: 30%;
	height: 100%;
	display: flex;
	flex-direction: column;
	overflow: hidden;
`;

export const FilterTitle = styled(Box)`
	color: grey;
	font-weight: 400;
	margin-left: 3rem;
	font-size: 1.5rem;
`;
