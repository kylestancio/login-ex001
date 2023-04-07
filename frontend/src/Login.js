import React, { useEffect, useState } from 'react'
import { Container, Form, Button, Toast, ToastContainer } from 'react-bootstrap'

export default function Login({setUser}) {

  const [errorMessage, setErrorMessage] = useState('')
  const [toastVisibility, setToastVisibility] = useState(false)
  const [credentials, setCredentials] = useState({username: '', password: ''})

  const login = () => {
    if (credentials.username == 'some' && credentials.password == 'thing'){
      setUser({username: credentials.username, token: 'auth-token', refreshToken: 'refresh-token'})
    }else{
      showErrorMessage('Invalid email or password!')
    }
  }

  const showErrorMessage = async (message) => {
    const TOAST_VISIBLE_DURATION = 5000 // 5 SECONDS TOAST VISIBILITY
    setErrorMessage(message)
    setToastVisibility(true)

    setTimeout(()=>{setToastVisibility(false)}, TOAST_VISIBLE_DURATION)
  }

  const handleUsernameChange = (e) => {
    credentials.username = e.target.value
  }

  const handlePasswordChange = (e) => {
    credentials.password = e.target.value
  }

  useEffect(() => { 
    return () => {
      console.log('Cleaning up')
      setCredentials({})
      setErrorMessage('')
      setToastVisibility(false)
    }
  }, [])
  

  return (
    <>
      <Container className='border shadow shadow-sm mt-5 p-5' style={{maxWidth: '600px'}}>
        <h1 className="text-center display-6">Login</h1>
        <hr />
        <Form>
          <Form.Group className="mb-3" controlId="form-user-email">
            <Form.Label>Username</Form.Label>
            <Form.Control type="string" placeholder="Username" onChange={handleUsernameChange}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="form-user-password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange}/>
          </Form.Group>
          <Button variant="primary" type="button" onClick={login}>
            Submit
          </Button>
        </Form>
      </Container>

      <ToastContainer className="p-3" position='top-end'>
        <Toast show={toastVisibility} onClose={()=>setToastVisibility(false)} bg={'danger'}>
          <Toast.Header>
            <strong className="me-auto">Error</strong>
          </Toast.Header>
          <Toast.Body>{errorMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  )
}
