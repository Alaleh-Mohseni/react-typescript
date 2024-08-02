// import { useRef } from 'react'
import Form from './components/Form'
import Input from './components/Input'
import Button from './components/Button'
// import Container from './components/Container'

function App() {
  // const inputRef = useRef<HTMLInputElement>(null)
  function handleOnSave(data: unknown) {
    const extractedData = data as {title: string, price: string}
    console.log(extractedData)
  }

  return (
    <div>
      <Form onSave={handleOnSave}>
        <Input id='title' type='text' placeholder='Title' />
        <Input id='price' type='text' placeholder='Price' />
        <Button className='p-2 bg-slate-900 text-slate-100 rounded-md'>Add Product</Button>
      </Form>
      {/* <Input id='title' type='text' placeholder='Title' ref={inputRef} /> */}
      {/* <Container ComponentType={Button} onClick={() => console.log('clicked')}>Add Product</Container> */}
    </div>
  )
}

export default App
