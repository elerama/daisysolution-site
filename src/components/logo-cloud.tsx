import { clsx } from 'clsx'

export function LogoCloud({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        className,
        'flex justify-between max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4',
      )}
    >
      <img
        alt="Unieuro"
        src="/loghi/unieuro.png"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12 object-contain"
      />
      <img
        alt="Expert"
        src="/loghi/expert.png"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12 object-contain"
      />
      <img
        alt="Gaer"
        src="/loghi/gaer.png"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12 object-contain"
      />
      <img
        alt="Domex"
        src="/loghi/domex.png"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12 object-contain"
      />
      <img
        alt="Trend"
        src="/loghi/trend.png"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12 object-contain"
      />
    </div>
  )
}
