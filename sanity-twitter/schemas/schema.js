import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

import tweet from './tweet'
import comment from './comment'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([ tweet, comment ]),
})
