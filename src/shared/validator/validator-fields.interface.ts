export type FieldsErrors = {
  [field: string]: string[]
}

export interface ValidatorFieldsInterface<PropsValidated> {
  errors: FieldsErrors
  vaidatedData: PropsValidated
  validate(data: any): boolean
}
