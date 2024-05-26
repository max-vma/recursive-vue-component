import { IElement } from '../types/Element'
import { ElementTypes } from '../types/ElementTypes'

const fsEls: IElement[] = [
  {
    id: '1',
    type: ElementTypes.DIRECTORY,
    name: 'Папка 1',
    elements: [
      {
        id: '2',
        type: ElementTypes.DIRECTORY,
        name: 'Папка 1 - 1',
        elements: [
          {
            id: '8',
            type: ElementTypes.FILE,
            name: 'Файл',
          },
        ],
      },
      {
        id: '3',
        type: ElementTypes.FILE,
        name: 'Папка 1 - 1',
      },
    ],
  },
  {
    id: '4',
    type: ElementTypes.DIRECTORY,
    name: 'Папка 2',
    elements: [
      {
        id: '5',
        type: ElementTypes.DIRECTORY,
        name: 'Папка 2 - 1',
      },
      {
        id: '6',
        type: ElementTypes.FILE,
        name: 'Файл 2 - 2',
      },
    ],
  },
  {
    id: '7',
    type: ElementTypes.FILE,
    name: 'Файл 2',
  },
]

export default fsEls
