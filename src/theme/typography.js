import styled from 'styled-components';
import { rem } from 'polished';

const H1 = styled.h1`
	color: ${({ theme }) => theme.palette.primary.bodyText};
	font-family: ${({ theme }) => theme.font.serif};
	font-size: ${rem(36)};
	font-weight: 700;
	margin: 0 0 ${rem(12)};

	${({ theme }) =>
		theme.media(
			'tablet-l',
			`
			font-size: ${rem(42)};
			`
		)};
`;

const H2 = styled.h2`
	color: ${({ theme }) => theme.palette.primary.bodyText};
	font-family: ${({ theme }) => theme.font.serif};
	font-size: ${rem(18)};
	font-weight: 500;
	line-height: ${rem(30)};
	margin: 0 0 ${rem(12)};

	${({ theme }) =>
		theme.media(
			'tablet-l',
			`
			font-size: ${rem(24)};
			line-height: ${rem(36)};
			`
		)};
`;

const Paragraph = styled.p`
	color: ${({ theme }) => theme.palette.primary.bodyText};
	font-family: ${({ theme }) => theme.font.serif};
	font-size: ${({ theme }) => rem(theme.font.size)};
	font-weight: ${({ theme }) => theme.font.weight};
	line-height: ${({ theme }) => theme.font.lineHeight};
	margin: 0 0 ${rem(24)};
`;

export { H1, H2, Paragraph };
