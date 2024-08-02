import { type ElementType, type ComponentPropsWithoutRef, type ReactNode } from "react"

type ContainerProps<T extends ElementType> = {
  ComponentType?: T
  children: ReactNode
} & ComponentPropsWithoutRef<T>

function Container<C extends ElementType>({ ComponentType, children, ...props }: ContainerProps<C>) {
  const Component = ComponentType || 'div'

  return <Component {...props}>{children}</Component>
}

export default Container