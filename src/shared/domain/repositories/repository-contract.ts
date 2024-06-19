import { Entity } from '../entities/entity'

export interface repositoryinterface<E extends Entity> {
  insert(entiy: E): Promise<void>
  find(): Promise<E[]>
  findById(id: string): Promise<E>
  update(entiy: E): Promise<void>
  delete(id: string): Promise<void>
}
