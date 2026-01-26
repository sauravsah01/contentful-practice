import type { NextRequest, NextResponse } from 'next/server'

import i18n from './i18n'
// todo: future state
//import personalize from "./personalize";

export type Middleware<T = any> = (req: NextRequest, res: NextResponse) => Promise<NextResponse<T>>

const middlewares: Array<Middleware> = [
  i18n,
  //personalize,
]

export default middlewares
