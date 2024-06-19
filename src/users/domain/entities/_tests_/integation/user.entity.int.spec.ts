import { UserDataBuilder } from '@/users/domain/testing/helper/user-data-builder'
import { UserEntity, UserProps } from '../../user.entity'
import { EntityValidationError } from '@/shared/domain/errors/validation-error'

describe('User entity integration tests', () => {
  describe('constructor method', () => {
    it('Should throw an error when creating a user with name', () => {
      const props: UserProps = {
        ...UserDataBuilder({}),
        name: null,
      }
      expect(() => new UserEntity(props)).toThrow(EntityValidationError)
    })
  })
})
