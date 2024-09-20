export class NotfoundError extends Error {}

export class EntityNotFoundError extends Error {
  constructor(public message: string) {
    super(message)
    this.message = 'EntityNotFoundError '
  }
}
