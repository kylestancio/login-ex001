import React from 'react'
import { Button } from 'react-bootstrap'

export default function Home({setUser}) {
  return (
    <>
      <h1 className='text-center'>Home</h1>
      <Button type='button' variant='danger' className='ms-3' onClick={()=>setUser({})}>Logout</Button>
    </>
  )
}
