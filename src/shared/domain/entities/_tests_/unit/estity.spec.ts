import { Entity } from '../../entity'

type StubProps = {
  prop1: string
  prop2: number
}

class StubEntity extends Entity<StubProps> {}

describe('Entity unit tests ', () => {
  it('Should set props and id', () => {
    const props = { prop1: 'value1', prop2: 15 }

    const entity = new StubEntity(props)
    console.log(entity)

    expect(entity.props).toStrictEqual(props)
  })
})
