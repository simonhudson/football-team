import spacing from './spacing';

describe('theme/spacing', () => {
    it('should return expected values', () => {
        expect(spacing).toEqual({
            default: 14,
            xsm: 3.5,
            sm: 7,
            md: 28,
            lg: 56,
            xlg: 84,
            xxlg: 112,
            xxxlg: 168,
        });
    });
});
