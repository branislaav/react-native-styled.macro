// Ours
import { Configuration } from '../types';

const negative = (styles: Record<string, string | number>) => {
	const newStyles: Record<string, string | number> = {};

	Object.keys(styles).forEach((key) => {
		const unit = styles[key];
		newStyles['-' + key] =
			typeof unit === 'number' ? -1 * unit : '-' + unit;
	});

	return newStyles;
};

const breakpoints = (styles: Record<string, number>) => {
	const newStyles: Record<string, number> = {};

	Object.keys(styles).forEach((key) => {
		newStyles[`screen-${key}`] = styles[key];
	});

	return newStyles;
};

/**
 * We accept the `rem` helper instead of importing it directly to
 * avoid compilation errors when used in tools.
 */
export default (rem: (value: number) => string | number) => {
	const screens = {
		sm: 640,
		md: 768,
		lg: 1024,
		xl: 1280,
	};

	const colors = {
		black: 'black',
		white: 'white',
		transparent: 'transparent',

		// Gray
		'gray-100': '#f7fafc',
		'gray-200': '#edf2f7',
		'gray-300': '#e2e8f0',
		'gray-400': '#cbd5e0',
		'gray-500': '#a0aec0',
		'gray-600': '#718096',
		'gray-700': '#4a5568',
		'gray-800': '#2d3748',
		'gray-900': '#1a202c',

		// Red
		'red-100': '#fff5f5',
		'red-200': '#fed7d7',
		'red-300': '#feb2b2',
		'red-400': '#fc8181',
		'red-500': '#f56565',
		'red-600': '#e53e3e',
		'red-700': '#c53030',
		'red-800': '#9b2c2c',
		'red-900': '#742a2a',

		// Orange
		'orange-100': '#fffaf0',
		'orange-200': '#feebc8',
		'orange-300': '#fbd38d',
		'orange-400': '#f6ad55',
		'orange-500': '#ed8936',
		'orange-600': '#dd6b20',
		'orange-700': '#c05621',
		'orange-800': '#9c4221',
		'orange-900': '#7b341e',

		// Yellow
		'yellow-100': '#fffff0',
		'yellow-200': '#fefcbf',
		'yellow-300': '#faf089',
		'yellow-400': '#f6e05e',
		'yellow-500': '#ecc94b',
		'yellow-600': '#d69e2e',
		'yellow-700': '#b7791f',
		'yellow-800': '#975a16',
		'yellow-900': '#744210',

		// Green
		'green-100': '#f0fff4',
		'green-200': '#c6f6d5',
		'green-300': '#9ae6b4',
		'green-400': '#68d391',
		'green-500': '#48bb78',
		'green-600': '#38a169',
		'green-700': '#2f855a',
		'green-800': '#276749',
		'green-900': '#22543d',

		// Teal
		'teal-100': '#e6fffa',
		'teal-200': '#b2f5ea',
		'teal-300': '#81e6d9',
		'teal-400': '#4fd1c5',
		'teal-500': '#38b2ac',
		'teal-600': '#319795',
		'teal-700': '#2c7a7b',
		'teal-800': '#285e61',
		'teal-900': '#234e52',

		// Blue
		'blue-100': '#ebf8ff',
		'blue-200': '#bee3f8',
		'blue-300': '#90cdf4',
		'blue-400': '#63b3ed',
		'blue-500': '#4299e1',
		'blue-600': '#3182ce',
		'blue-700': '#2b6cb0',
		'blue-800': '#2c5282',
		'blue-900': '#2a4365',

		// Indigo
		'indigo-100': '#ebf4ff',
		'indigo-200': '#c3dafe',
		'indigo-300': '#a3bffa',
		'indigo-400': '#7f9cf5',
		'indigo-500': '#667eea',
		'indigo-600': '#5a67d8',
		'indigo-700': '#4c51bf',
		'indigo-800': '#434190',
		'indigo-900': '#3c366b',

		// Purple
		'purple-100': '#faf5ff',
		'purple-200': '#e9d8fd',
		'purple-300': '#d6bcfa',
		'purple-400': '#b794f4',
		'purple-500': '#9f7aea',
		'purple-600': '#805ad5',
		'purple-700': '#6b46c1',
		'purple-800': '#553c9a',
		'purple-900': '#44337a',

		// Pink
		'pink-100': '#fff5f7',
		'pink-200': '#fed7e2',
		'pink-300': '#fbb6ce',
		'pink-400': '#f687b3',
		'pink-500': '#ed64a6',
		'pink-600': '#d53f8c',
		'pink-700': '#b83280',
		'pink-800': '#97266d',
		'pink-900': '#702459',
	};

	const spacing = {
		px: 1,
		0: 0,
		1: rem(0.25),
		2: rem(0.5),
		3: rem(0.75),
		4: rem(1),
		5: rem(1.25),
		6: rem(1.5),
		8: rem(2),
		10: rem(2.5),
		12: rem(3),
		16: rem(4),
		20: rem(5),
		24: rem(6),
		32: rem(8),
		40: rem(10),
		48: rem(12),
		56: rem(14),
		64: rem(16),
	};

	const opacity = {
		0: 0,
		25: 0.25,
		50: 0.5,
		75: 0.75,
		100: 1,
	};

	const configs: Configuration = {
		separator: ':',
		theme: {
			screens,
			colors,
			spacing,
			backgroundColor: colors,
			borderColor: colors,
			borderRadius: {
				none: 0,
				sm: rem(0.125),
				md: rem(0.375),
				lg: rem(0.5),
				xl: rem(0.75),
				'2xl': rem(1),
				'3xl': rem(1.5),
				full: 9999,
				default: rem(0.25),
			},
			borderWidth: {
				0: 0,
				2: 2,
				4: 4,
				8: 8,
				default: 1,
			},
			flex: {
				1: { flexGrow: 1, flexShrink: 1, flexBasis: '0%' },
				auto: { flexGrow: 1, flexShrink: 1, flexBasis: 'auto' },
				initial: { flexGrow: 0, flexShrink: 1, flexBasis: 'auto' },
				none: { flexGrow: 0, flexShrink: 0, flexBasis: 'auto' },
			},
			flexGrow: {
				0: 0,
				default: 1,
			},
			flexShrink: {
				0: 0,
				default: 1,
			},
			fontFamily: {},
			fontSize: {
				xs: rem(0.75),
				sm: rem(0.875),
				base: rem(1),
				lg: rem(1.125),
				xl: rem(1.25),
				'2xl': rem(1.5),
				'3xl': rem(1.875),
				'4xl': rem(2.25),
				'5xl': rem(3),
				'6xl': rem(4),
			},
			fontWeight: {
				hairline: '100',
				thin: '200',
				light: '300',
				normal: '400',
				medium: '500',
				semibold: '600',
				bold: '700',
				extrabold: '800',
				black: '900',
			},
			height: spacing,
			letterSpacing: {
				tighter: rem(-0.05),
				tight: rem(-0.025),
				normal: 0,
				wide: rem(0.025),
				wider: rem(0.05),
				widest: rem(0.1),
			},
			lineHeight: {
				none: 1,
				tight: 1.25,
				snug: 1.375,
				normal: 1.5,
				relaxed: 1.625,
				loose: 2,
				3: rem(0.75),
				4: rem(1),
				5: rem(1.25),
				6: rem(1.5),
				7: rem(1.75),
				8: rem(2),
				9: rem(2.25),
				10: rem(2.5),
			},
			margin: {
				...spacing,
				...negative(spacing),
			},
			maxHeight: {
				full: '100%',
			},
			maxWidth: {
				none: 'none',
				xs: rem(20),
				sm: rem(24),
				md: rem(28),
				lg: rem(32),
				xl: rem(36),
				'2xl': rem(42),
				'3xl': rem(48),
				'4xl': rem(56),
				'5xl': rem(64),
				'6xl': rem(72),
				full: '100%',
				...breakpoints(screens),
			},
			minHeight: {
				0: 0,
				full: '100%',
			},
			minWidth: {
				0: 0,
				full: '100%',
			},
			opacity,
			padding: spacing,
			textColor: colors,
			width: {
				...spacing,
				'1/2': '50%',
				'1/3': '33.333333%',
				'2/3': '66.666667%',
				'1/4': '25%',
				'2/4': '50%',
				'3/4': '75%',
				'1/5': '20%',
				'2/5': '40%',
				'3/5': '60%',
				'4/5': '80%',
				'1/6': '16.666667%',
				'2/6': '33.333333%',
				'3/6': '50%',
				'4/6': '66.666667%',
				'5/6': '83.333333%',
				'1/12': '8.333333%',
				'2/12': '16.666667%',
				'3/12': '25%',
				'4/12': '33.333333%',
				'5/12': '41.666667%',
				'6/12': '50%',
				'7/12': '58.333333%',
				'8/12': '66.666667%',
				'9/12': '75%',
				'10/12': '83.333333%',
				'11/12': '91.666667%',
				full: '100%',
			},
			zIndex: {
				0: 0,
				10: 10,
				20: 20,
				30: 30,
				40: 40,
				50: 50,
			},
		},
	};

	return configs;
};
