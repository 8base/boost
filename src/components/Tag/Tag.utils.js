// From https://stackoverflow.com/questions/635022/calculating-contrasting-colours-in-javascript/6511606

const isValidRGB = (color) => /#([0-9a-f]{6})/i.test(color);

const hexToRGBArray = (color) => {
  if (isValidRGB(color)) {
    color = RegExp.$1;

    const rgb = [];

    for (let i = 0; i <= 2; i++) {
      rgb[i] = parseInt(color.substr(i * 2, 2), 16);
    }

    return rgb;
  }
};

const getLuma = (color) => {
  const rgb = hexToRGBArray(color);

  return (0.2126 * rgb[0]) + (0.7152 * rgb[1]) + (0.0722 * rgb[2]);
};

export const getContrastColor = (color, { lightColor = '#ffffff', darkColor = '#000000' } = {}) => {
  if (isValidRGB(color)) {
    return (getLuma(color) >= 165) ? darkColor : lightColor;
  }

  return darkColor;
};
