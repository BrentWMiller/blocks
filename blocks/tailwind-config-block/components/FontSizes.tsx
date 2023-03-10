import { KeyValuePair, ResolvableTo } from 'tailwindcss/types/config';
import { tw } from 'twind';

type Props = {
  sizes: ResolvableTo<
    KeyValuePair<
      string,
      | string
      | [fontSize: string, lineHeight: string]
      | [
          fontSize: string,
          configuration: Partial<{
            lineHeight: string;
            letterSpacing: string;
            fontWeight: string | number;
          }>
        ]
    >
  >;
};

export default function FontSizes({ sizes }: Props) {
  // loop through sizes object
  // for each key, render a div with the key as the font size

  return (
    <div className={tw('flex flex-col gap-8 not-prose relative bg-slate-50 rounded-xl overflow-hidden')}>
      {Object.entries(sizes).map(([key, value]) => {
        const fontSize = typeof value === 'string' ? value : value[0];
        const lineHeight = typeof value === 'string' ? undefined : value[1].lineHeight;
        const letterSpacing = typeof value === 'string' ? undefined : value[1].letterSpacing;
        const fontWeight = typeof value === 'string' ? undefined : value[1].fontWeight;

        return (
          <div key={key} className={tw('flex flex-col')}>
            <div className={tw('flex gap-8 items-center justify-between border-b border-gray-200 pb-2 mb-2')}>
              <p className={tw('font-medium text-sm text-slate-500 font-mono')}>text-{key}</p>
              <div className={tw('text-xs text-gray-600 flex gap-1')}>
                <p>Font size: {fontSize}</p>
                {lineHeight && <p> | Line height: {lineHeight}</p>}
                {letterSpacing && <p> | Letter spacing: {letterSpacing}</p>}
                {fontWeight && <p> | Font weight: {fontWeight}</p>}
              </div>
            </div>
            <p style={{ fontSize, lineHeight, letterSpacing, fontWeight }}>The quick brown fox jumped over the lazy dog.</p>
          </div>
        );
      })}
    </div>
  );
}
