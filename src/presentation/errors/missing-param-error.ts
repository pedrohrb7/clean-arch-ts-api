export class MissingParamError extends Error {
  constructor (paramName: string) {
    super(`Miggins param: ${paramName}`)
    this.name = 'MissingParamError'
  }
}
