import resolveConfig from 'tailwindcss/resolveConfig';
import { FileBlockProps } from '@githubnext/blocks';
import { Box, Heading, Label } from '@primer/react';
import './index.css';
import { Config } from 'tailwindcss';
import ColorPalette from './components/ColorPalette';
import FontSizes from './components/FontSizes';
import { ThemeConfig } from 'tailwindcss/types/config';

export default function ExampleFileBlock(props: FileBlockProps) {
  const { content } = props;

  // Tailwind theme config
  let theme: Partial<ThemeConfig & { extend: Partial<ThemeConfig> }> | undefined = {};
  const fullConfig = resolveConfig(content as any);
  theme = fullConfig.theme as Config['theme'];

  return (
    <Box p={4}>
      <Box pb={4}>
        <Label variant='attention'>Work in Progress</Label>
      </Box>

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
