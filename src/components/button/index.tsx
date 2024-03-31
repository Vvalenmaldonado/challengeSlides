import clsx from "clsx";

type ButtonProps = JSX.IntrinsicElements["button"] & {
  svg?: React.ReactNode;
};
export function Button({ className, children, svg, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      id="getStarted"
      aria-label="Go to get started"
      className={clsx(
        "font-lato leading-[14px] text-[14px] flex flex-row items-center justify-center gap-[10px] bg-[#000000] text-white rounded-[10px] py-5 px-8 font-bold text-nowrap border-2 border-transparent hover:border-[#ddf247] hover:text-[#ddf247] transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
      {svg}
    </button>
  );
}
