import { rem } from 'polished';

const BASE_SIZE = 14;

module.exports = {
	default: rem(BASE_SIZE),
	xsm: rem(BASE_SIZE / 4),
	sm: rem(BASE_SIZE / 2),
	md: rem(BASE_SIZE * 2),
	lg: rem(BASE_SIZE * 4),
	xlg: rem(BASE_SIZE * 6),
	xxlg: rem(BASE_SIZE * 8),
	xxxlg: rem(BASE_SIZE * 12),
};
