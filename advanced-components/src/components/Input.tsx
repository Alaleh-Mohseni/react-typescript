import { type ComponentPropsWithoutRef, forwardRef } from "react"

type InputProps = {
  id: string
  placeholder: string
} & ComponentPropsWithoutRef<'input'>

const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ id, placeholder, ...props }, ref) {
  return (
    <p>
      <input
        id={id}
        name={id}
        placeholder={placeholder}
        {...props}
        ref={ref}
        className='p-2 bg-slate-600 outline-none rounded-md w-full'
      />
    </p>
  )
}
)

export default Input