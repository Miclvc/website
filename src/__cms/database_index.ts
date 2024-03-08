import { Type as T } from '@sinclair/typebox';

export const database_index_schema = T.Object({
	progetti: T.Union([T.Literal('filo')])
})

export const database_index = {
  "progetti": [
    "filo"
  ]
} as const