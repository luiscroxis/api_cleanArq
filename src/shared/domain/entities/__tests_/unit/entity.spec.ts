import { validate as uuidValidate } from 'uuid'
import { Entity } from '@/shared/domain/entities/entity'

type StubProps = {
  prop1: string
  prop2: number
}

class StubEntity extends Entity<StubProps> {}

describe('UserEntity unit tests', () => {
  it('Should set props amd id', () => {
    const props = {
      prop1: 'value1',
      prop2: 15,
    }

    const entity = new StubEntity(props)

    expect(entity.props).toStrictEqual(props)
    expect(entity._id).not.toBeNull()
    expect(uuidValidate(entity._id)).toBeTruthy()
  })

  it('Should accept a valid uuid', () => {
    const props = {
      prop1: 'value1',
      prop2: 15,
    }
    const id = '7a2fa1c3-7bc8-4030-b053-09216e6e3052'

    const entity = new StubEntity(props, id)

    expect(uuidValidate(entity._id)).toBeTruthy()
    expect(entity._id).toEqual(id)
  })

  it('Should convert a entity to a JSON', () => {
    const props = {
      prop1: 'value1',
      prop2: 15,
    }
    const id = '7a2fa1c3-7bc8-4030-b053-09216e6e3052'

    const entity = new StubEntity(props, id)

    expect(entity.toJSON()).toStrictEqual({
      id,
      ...props,
    })
  })
})
