import { style } from '@vanilla-extract/css';
import { COLORS } from 'src/_libs/style/colors';

export const SHADOW = style({
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  zIndex: '9999',
  top: 0,
  left: 0,
  backgroundColor: COLORS.MAIN_OPACITY,
  padding: '1rem',
});

export const BASE = style({
  width: '85vw',
  maxWidth: '35rem',
  minHeight: '10rem',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translateY(-50%) translateX(-50%)',
  backgroundColor: COLORS.WHITE,
  borderRadius: '1.25rem',
  padding: '1.75rem',
});

export const FLEX = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
});

export const BODY = style({
  position: 'relative',
  height: '100%',
  minHeight: '10rem',
});

export const CONTROL = style({
  width: '100%',
  position: 'absolute',
  bottom: 0,
});