import palette from './palette';

describe('theme/palette', () => {
	it('should return expected values', () => {
		expect(palette).toEqual({
			primary: {
				bodyBackground: '#fef9f5',
				brand: '#e05e00',
				bodyText: '#5d5d5d',
				black: '#333',
				white: '#fff',
			},
			alert: {
				error: '#f00',
				info: '#015cae',
				success: '#01943b',
				warning: '#eeb320',
			},
			brands: {
				linkedIn: '#0077b5',
				github: '#333',
				stackOverflow: '#f48024',
			},
		});
	});
});
