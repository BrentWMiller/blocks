import { RecursiveKeyValuePair, ResolvableTo } from 'tailwindcss/types/config';
import { tw } from 'twind';
import ColorSwatch from './ColorSwatch';

type Props = {
  colors: ResolvableTo<RecursiveKeyValuePair<string, string>>;
};

export default function ColorPalette({ colors }: Props) {
  return (
    <div className={tw('grid grid-cols-1 gap-8')}>
      {Object.entries(colors).map(([key, value]) => {
        if (typeof value === 'string') {
          return (
            <div key={key}>
              <div className={tw('flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4')}>
                <div className={tw('w-24 shrink-0')}>
                  <div className={tw('h-10 flex flex-col justify-center')}>
                    <div className={tw('text-sm font-semibold text-slate-900 capitalize')}>{key}</div>
                  </div>
                </div>

                <ColorSwatch color={value} shade={key} />
              </div>
            </div>
          );
        } else {
          return (
            <div key={key}>
              <div className={tw('flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4')}>
                <div className={tw('w-24 shrink-0')}>
                  <div className={tw('h-10 flex flex-col justify-center')}>
                    <div className={tw('text-sm font-semibold text-slate-900 capitalize')}>{key}</div>
                  </div>
                </div>
                {Object.entries(value).map(([shade, color]) => (
                  <ColorSwatch key={shade} color={color as string} shade={shade} />
                ))}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
