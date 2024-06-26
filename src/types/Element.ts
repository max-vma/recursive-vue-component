import { ElementTypes } from './ElementTypes'

export interface IElement {
  id: string
  type: ElementTypes
  name: string
  deleted?: boolean
  elements?: IElement[]
}
