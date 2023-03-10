import { tw } from 'twind';

type Props = {
  color: string;
  shade?: string;
};

export default function ColorSwatch({ shade, color }: Props) {
  return (
    <div className={tw('relative flex flex-col space-y-1.5')}>
      <div className={tw('h-10 w-full rounded flex-shrink-0 border min-w-[53px]')} style={{ backgroundColor: color }}></div>
      <div className={tw('px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block')}>
        <p className={tw('w-6 font-medium text-slate-900 2xl:w-full')}>{shade}</p>
        <p className={tw('text-slate-500 font-mono lowercase')}>{color}</p>
      </div>
    </div>
  );
}
