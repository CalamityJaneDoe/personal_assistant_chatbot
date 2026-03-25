import { ElementType, ReactNode, ComponentPropsWithoutRef } from "react";

type ItemActionProps<T extends ElementType = "button"> = {
  label: string;
  icon?: ReactNode;
  as?: T;
} & ComponentPropsWithoutRef<T>;

function ItemAction<T extends ElementType = "button">({
  label,
  icon,
  as,
  ...props
}: ItemActionProps<T>) {
  const Component = as || "button";

  return (
    <Component
      className="
        flex items-center gap-3
        w-full px-3 py-2
        rounded-lg
        text-sm font-medium
        text-gray-700
        hover:bg-gray-100
        transition-colors
      "
      {...props}
    >
      <span className="text-gray-500">{icon}</span>
      <span className="truncate">{label}</span>
    </Component>
  );
}
export default ItemAction;
