export const basic_color = {
  'blue': '#037Ef3',
  'light-gray': '#F3F4F7',
  'gray': '#CACCD1',
  'dark-gray': '#52565E',
  'yellow': '#FFC845',
  'orange': '#F48924',
  'red': '#F85A40',
  'green': '#00C16E',
  'mint': '#0CB9C1',
  'white': 'white'
}

export function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

