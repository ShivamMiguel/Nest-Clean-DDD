import { ClassValidatorFields } from '../../class-validator-fields'
import * as classValidator from 'class-validator'

class StubClassValidatorFields extends ClassValidatorFields<{
  field: string
}> {}

describe('ClassValidatorFields unit tests', () => {
  it('Should initialize erros and validatedData variables with null', () => {
    const sut = new StubClassValidatorFields()
    expect(sut.errors).toBeNull()
    expect(sut.vaidatedData).toBeNull()
  })

  it('Should validate with null', () => {
    const spyValidateSync = jest.spyOn(classValidator, 'validateSync')
    spyValidateSync.mockReturnValue([
      { property: 'field', constraints: { isRequired: 'test error' } },
    ])
    const sut = new StubClassValidatorFields()

    expect(sut.validate(null)).toBeFalsy()
    expect(spyValidateSync).toHaveBeenCalled()
    expect(sut.vaidatedData).toBeNull()
    expect(sut.errors).toStrictEqual({ field: ['test error'] })
  })

  it('Should validate without null', () => {
    const spyValidateSync = jest.spyOn(classValidator, 'validateSync')
    spyValidateSync.mockReturnValue([])
    const sut = new StubClassValidatorFields()

    expect(sut.validate({ field: 'value' })).toBeTruthy()
    expect(spyValidateSync).toHaveBeenCalled()
    expect(sut.vaidatedData).toStrictEqual({ field: 'value' })
    expect(sut.errors).toStrictEqual({ field: ['test error'] })
  })
})
