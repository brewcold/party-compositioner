import { style, styleVariants } from '@vanilla-extract/css';
import { COLORS } from 'src/_libs/style/colors';

export const VARIANT = styleVariants({
  PRIMARY: {
    backgroundColor: COLORS.THEME,
    border: '1px solid transparent',
    color: COLORS.WHITE,
    transition: 'all 0.15s',
    padding: '0 0.75rem 0 0.75rem',
    borderRadius: '0.75rem',
    selectors: {
      '&:hover': {
        backgroundColor: COLORS.MAIN,
        border: `1px solid ${COLORS.MAIN}`,
        color: COLORS.WHITE,
      },
    },
  },
  SECONDARY: {
    backgroundColor: COLORS.MAIN_OPACITY15,
    border: '1px solid transparent',
    color: COLORS.MAIN,
    transition: 'all 0.15s',
    padding: '0 0.75rem 0 0.75rem',
    borderRadius: '0.75rem',
    selectors: {
      '&:hover': {
        backgroundColor: COLORS.GRAY,
        border: `1px solid ${COLORS.GRAY}`,
        color: COLORS.WHITE,
      },
    },
  },
  WARN: {
    backgroundColor: COLORS.RED,
    border: '1px solid transparent',
    color: COLORS.WHITE,
    transition: 'all 0.15s',
    padding: '0 0.75rem 0 0.75rem',
    borderRadius: '0.75rem',
    selectors: {
      '&:hover': {
        backgroundColor: COLORS.RED_DARK,
        border: `1px solid ${COLORS.RED_DARK}`,
        color: COLORS.WHITE,
      },
    },
  },
  OK: {
    backgroundColor: COLORS.GREEN,
    border: '1px solid transparent',
    color: COLORS.WHITE,
    transition: 'all 0.15s',
    padding: '0 0.75rem 0 0.75rem',
    borderRadius: '0.75rem',
    selectors: {
      '&:hover': {
        backgroundColor: COLORS.GREEN_DARK,
        border: `1px solid ${COLORS.GREEN_DARK}`,
        color: COLORS.WHITE,
      },
    },
  },
  WHITE: {
    backgroundColor: COLORS.WHITE,
    border: `1px solid ${COLORS.GRAY}`,
    color: COLORS.THEME,
    transition: 'all 0.15s',
    padding: '0 0.75rem 0 0.75rem',
    borderRadius: '0.75rem',

    selectors: {
      '&:hover': {
        border: `1px solid transparent`,
        backgroundColor: COLORS.MAIN_OPACITY15,
        color: COLORS.MAIN,
      },
    },
  },
  TEXT: {
    background: 'transparent',
    border: '1px solid transparent',
    color: COLORS.THEME,
    padding: '0',
    textUnderlineOffset: '0.25rem',
    borderRadius: '0.75rem',
    selectors: {
      '&:hover': {
        textDecoration: 'underline',
        color: COLORS.MAIN,
      },
    },
  },
  PRESET_SAVED: {
    backgroundColor: COLORS.MAIN,
    border: '1px solid transparent',
    color: COLORS.WHITE,
    borderRadius: '0.5rem',
    width: '1.5rem',
    height: '2.5rem',
    transition: 'all 0.1s',
    padding: '0 0.75rem 0 0.75rem',
    selectors: {
      '&:hover': {
        backgroundColor: COLORS.THEME,
      },
    },
  },
  PRESET_NOT_SAVED: {
    background: 'transparent',
    border: `1px solid ${COLORS.THEME}`,
    color: COLORS.THEME,
    borderRadius: '0.5rem',
    width: '1.75rem',
    height: '2.5rem',
    transition: 'all 0.1s',
    padding: '0 0.75rem 0 0.75rem',
    selectors: {
      '&:hover': {
        border: `1px solid ${COLORS.MAIN}`,
        color: COLORS.MAIN,
      },
    },
  },
});

export const BASE = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
});

export const SIZE = styleVariants({
  FIT: {},
  SMALL: {
    minWidth: '4rem',
    height: '2.5rem',
  },
  FULL: {
    width: '100%',
    height: '2.5rem',
  },
});

export const LOADING = styleVariants({
  true: {
    backgroundColor: COLORS.MAIN,
    color: COLORS.WHITE,
  },
  false: {},
});
