import { type ComponentPropsWithoutRef, type FormEvent } from "react"

type FormProps = ComponentPropsWithoutRef<'form'> & {
  onSave: (value: unknown) => void
}

function Form({ onSave, children, ...otherProps }: FormProps) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    onSave(data)
    e.currentTarget.reset()
  }

  return (
    <form
      onSubmit={handleSubmit}
      {...otherProps}
      className='flex flex-col gap-5 max-w-xl p-8 mx-auto bg-slate-800 rounded-md mt-10'
    >
      {children}
    </form>
  )
}

export default Form