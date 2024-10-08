/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity } from '../entities/entity'
import { NotfoundError } from '../errors/not-found-error'
import { repositoryinterface } from './repository-contract'

export abstract class inMemoryRepository<E extends Entity>
  implements repositoryinterface<E>
{
  items: E[] = []
  async insert(entity: E): Promise<void> {
    this.items.push(entity)
  }
  async find(): Promise<E[]> {
    return this.items as any
  }
  async findById(id: string): Promise<E> {
    return this._get(id)
  }
  async update(entity: E): Promise<void> {
    await this._get(entity.id)
    const index = this.items.findIndex(item => item.id === entity.id)
    this.items[index] = entity
  }
  async delete(id: string): Promise<void> {
    await this._get(id)
    const index = this.items.findIndex(item => item.id === id)
    this.items.slice(index, 1)
  }

  protected async _get(id: string): Promise<E> {
    const _id = `${id}`
    const entity = this.items.find(item => item.id === _id)
    if (!entity) {
      throw new NotfoundError(`Entity with id ${id} not found`)
    }
    return entity
  }
}
