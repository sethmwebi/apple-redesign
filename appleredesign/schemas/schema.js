// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import { user, account } from 'next-auth-sanity/schemas';

// We import object and document schemas
import blockContent from "./blockContent";
import category from './category'
import product from './product'

import localeString from './locale/String'
import localeText from './locale/Text'
import localeBlockContent from './locale/BlockContent'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    
    product,
    category,
    blockContent,
    localeText,
    localeBlockContent,
    localeString,
    user,
    account
  ]),
})
