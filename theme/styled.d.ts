import 'styled-components';

// and extend them!
declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			main: string;
			background: string;
			commentsText: string;
			text: string;
		};
		titles: FlattenSimpleInterpolation;
	}
}
