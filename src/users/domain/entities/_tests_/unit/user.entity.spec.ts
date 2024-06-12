import { UserEntity, UserProps } from '../../user.entity'
import { UserDataBuilder } from '@/users/domain/testing/helper/user-data-builder'

describe('UserEntity unit tests', () => {
  let props: UserProps
  let sut: UserEntity

  beforeEach(() => {
    UserEntity.validate = jest.fn()
    props = UserDataBuilder({})
    sut = new UserEntity(props)
  })

  it('Constructor method', () => {
    expect(UserEntity.validate).toHaveBeenCalled()
    expect(sut.props.name).toEqual(props.name)
    expect(sut.props.email).toEqual(props.email)
    expect(sut.props.password).toEqual(props.password)
    expect(sut.props.createdAt).toBeInstanceOf(Date)
  })

  it('should return name field', () => {
    expect(sut.props.name).toBeDefined
    expect(sut.props.name).toEqual(props.name)
    expect(typeof sut.props.name).toBe('string')
  })

  it('setter name field', () => {
    sut.props.name = 'other name'
    console.log(sut.props.name)
    expect(sut.props.name).toEqual('other name')
    expect(typeof sut.props.name).toBe('string')
  })

  it('should return email field', () => {
    expect(sut.props.email).toBeDefined
    expect(sut.props.email).toEqual(props.email)
    expect(typeof sut.props.email).toBe('string')
  })

  it('should return password field', () => {
    expect(sut.props.password).toBeDefined
    expect(sut.props.password).toEqual(props.password)
    expect(typeof sut.props.email).toBe('string')
  })

  it('setter password field', () => {
    sut.props.password = 'Surena928'
    console.log(sut.props.name)
    expect(sut.props.password).toEqual('Surena928')
    expect(typeof sut.props.name).toBe('string')
  })

  it('should return createdAt field', () => {
    expect(sut.props.createdAt).toBeDefined
    expect(sut.props.createdAt).toEqual(props.createdAt)
    expect(sut.props.createdAt).toBeInstanceOf(Date)
  })

  it('should return update name field', () => {
    expect(UserEntity.validate).toHaveBeenCalled()
    sut.props.name = 'other name'
    sut.update(sut.props.name)
    expect(sut.props.name).toEqual('other name')
  })

  it('should return update password field', () => {
    expect(UserEntity.validate).toHaveBeenCalled()
    sut.props.password = 'other password'
    sut.updatePassword(sut.props.password)
    expect(sut.props.password).toEqual('other password')
  })
})
