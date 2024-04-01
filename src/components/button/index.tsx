import clsx from "clsx";

type ButtonProps = JSX.IntrinsicElements["button"] & {
  svg?: React.ReactNode;
};
export function Button({ className, children, svg, ...props }: ButtonProps) {
  return (
    <button
      aria-label="Go to get started"
      className={clsx(
        "flex flex-row items-center justify-center gap-[10px] bg-black text-white rounded-[10px] py-5 px-8 outline outline-0 hover:outline-2 outline-accent hover:text-accent transition-all duration-300",
        className
      )}
      {...props}
    >
      <span className="font-lato leading-[14px] text-[14px] font-bold text-nowrap">
        {children}
      </span>
      {svg}
    </button>
  );
}
