import clsx from 'clsx';

type SpinLoader = {
  className?: string;
};

export default function SpinLoader({ className = '' }: SpinLoader) {
  const classes = clsx('flex', 'items-center', 'justify-center', className);
  return (
    <div className={classes}>
      <div
        className={clsx(
          'h-10 w-10',
          'border-5 border-t-transparent border-slate-900',
          'rounded-full',
          'animate-spin'
        )}
      ></div>
    </div>
  );
}
