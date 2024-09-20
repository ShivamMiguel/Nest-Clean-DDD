import { Entity } from '@/shared/domain/entities/entity'
import { inMemoryRepository } from '../../in-memory-repository'

type StubEntityProps = {
  name: string
  price: number
}

class StubEntity extends Entity<StubEntityProps> {}

class StubInMemoryRepository extends inMemoryRepository<StubEntity> {}

describe('InMemoryRepository unit tests', () => {
  let sut: StubInMemoryRepository

  beforeEach(() => {
    sut = new StubInMemoryRepository()
  })

  it('should inserts a new entity', async () => {
    const entity = new StubEntity({ name: 'test name', price: 19.99 })
    await sut.insert(entity)
    console.log(entity.toJson())
    expect(entity.toJson()).toStrictEqual(sut.items[0].toJson())
  })
})
