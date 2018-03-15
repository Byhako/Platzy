//datos de origen
import api from '../api.json'

import { normalize, schema } from 'normalizr'

//  new schema.Entity(key, definicion, opciones)
const media = new schema.Entity('media', {}, {
  idAttribute: 'id',
  processStrategy: (value, parent, key) => ({...value, category:parent.id})
})
const category = new schema.Entity('categories', {
  playlist: new schema.Array(media)
})

const categories = {categories:new schema.Array(category)}

const normalizeData = normalize(api, categories)

export default normalizeData