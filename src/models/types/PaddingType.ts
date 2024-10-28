export type PaddingValue = number;

export interface PaddingSides {
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
}

export interface PaddingAxes {
  horizontal?: number;
  vertical?: number;
}

export type PaddingType = PaddingValue | PaddingSides | PaddingAxes;

export type PaddingInterface = {
  all: (value: PaddingValue) => PaddingType,
  axis: (value: PaddingAxes) => PaddingType,
  only: (value: PaddingValue) => PaddingType,
}

export const Padding: PaddingInterface = {
  all: (value: PaddingValue): PaddingType => value,
  axis: (value: PaddingAxes): PaddingType => value,
  only: (value: PaddingValue): PaddingType => value,
};

export const isPaddingValue = (padding: PaddingType): padding is PaddingValue => {
  return typeof padding === 'number';
};

export const isPaddingSides = (padding: PaddingType): padding is PaddingSides => {
  return typeof padding === 'object' &&
    ('left' in padding || 'right' in padding || 'top' in padding || 'bottom' in padding);
};

export const isPaddingAxes = (padding: PaddingType): padding is PaddingAxes => {
  return typeof padding === 'object' &&
    ('horizontal' in padding || 'vertical' in padding);
};