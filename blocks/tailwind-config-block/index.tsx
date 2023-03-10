import resolveConfig from 'tailwindcss/resolveConfig';
import { FileBlockProps } from '@githubnext/blocks';
import { Box } from '@primer/react';
import './index.css';
import { Config } from 'tailwindcss';
import ColorPalette from './components/ColorPalette';

export default function ExampleFileBlock(props: FileBlockProps) {
  const { context, content, metadata, onUpdateMetadata } = props;

  // Tailwind theme config
  const fullConfig = resolveConfig(content as any);
  const theme = fullConfig.theme as Config['theme'];

  return (
    <Box p={4}>
      <Box borderColor='border.default' borderWidth={1} borderStyle='solid' borderRadius={6} overflow='hidden'>
        {theme?.colors && <ColorPalette colors={theme.colors} />}
      </Box>
    </Box>
  );
}
