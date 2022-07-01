import { MissingParamError } from '../errors/missing-param-error'
import { HttpRequest } from '../protocols/http'
import { badRequest } from '../helpers/http-helper'
import { Controller } from '../protocols/controller'
export class SignUpController implements Controller {
  handle (httpRequest: HttpRequest): any {
    const requiredField = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredField) {
      if (!httpRequest?.body[field]) { return badRequest(new MissingParamError(field)) }
    }
  }
}
