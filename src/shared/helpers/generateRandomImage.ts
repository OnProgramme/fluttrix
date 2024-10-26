interface ImageProps {
  width?: number;
  height?: number;
}

export const generateRandomImage = ({ width = 400, height = 300 }: ImageProps = {}) => {
  return `https://picsum.photos/${width}/${height}?random=${Math.floor(Math.random() * 1000)}`;
}