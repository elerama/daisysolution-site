import { clsx } from 'clsx'

export function Gradient({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'relative bg-[#0081BE]',
        // Modern mesh pattern overlay
        'before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]',
        // Subtle dot pattern for texture
        'after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.15)_1px,transparent_0)] after:bg-[length:32px_32px]',
      )}
    />
  )
}

export function GradientBackground() {
  return (
    <div className="relative mx-auto max-w-7xl">
      {/* Modern floating orbs effect - più sottile e professionale */}
      <div
        className={clsx(
          'absolute -top-44 -right-60 h-60 w-xl transform-gpu md:right-0',
          'bg-[#0081BE] opacity-20',
          'rotate-[-10deg] rounded-full blur-3xl',
        )}
      />
      <div
        className={clsx(
          'absolute -top-24 right-20 h-40 w-96 transform-gpu',
          'bg-[#33A3D1] opacity-10',
          'rotate-[15deg] rounded-full blur-2xl',
        )}
      />
    </div>
  )
}
