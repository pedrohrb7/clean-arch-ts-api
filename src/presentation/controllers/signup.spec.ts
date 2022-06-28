import { SignUpController } from './signup'

describe('SignUp Controller', () => {
  test('should return 400 if no name provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'any_email@email.com',
        password: 'pass',
        passwdConfirmation: 'pass'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing param: name'))
  })

  test('should return 400 if no name provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'Test',
        password: 'pass',
        passwdConfirmation: 'pass'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing param: email'))
  })
})
