import resolveConfig from 'tailwindcss/resolveConfig';
import { FileBlockProps } from '@githubnext/blocks';
import { Box, Heading } from '@primer/react';
import './index.css';
import { Config } from 'tailwindcss';
import ColorPalette from './components/ColorPalette';
import FontSizes from './components/FontSizes';

export default function ExampleFileBlock(props: FileBlockProps) {
  const { context, content, metadata, onUpdateMetadata } = props;

  // Tailwind theme config
  const fullConfig = resolveConfig(content as any);
  const theme = fullConfig.theme as Config['theme'];

  return (
    <Box p={4}>
      <Box borderColor='border.default' borderWidth={1} borderStyle='solid' borderRadius={6} overflow='hidden' p={4} mb={4}>
        <Heading sx={{ mb: 6 }}>Colors</Heading>
        {theme?.colors && <ColorPalette colors={theme.colors} />}
      </Box>

      <Box borderColor='border.default' borderWidth={1} borderStyle='solid' borderRadius={6} overflow='hidden' p={4}>
        <Heading sx={{ mb: 6 }}>Font Sizes</Heading>
        {theme?.fontSize && <FontSizes sizes={theme.fontSize} />}
      </Box>
    </Box>
  );
}
