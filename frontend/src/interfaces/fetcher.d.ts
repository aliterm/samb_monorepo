import { Pagination } from './pagination'

export type RequestMethod = 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'UPDATE' | 'PUT'
export interface FetcherParams {
  url: string
  method: RequestMethod
  headers?: HeadersInit
  body?: BodyInit
  cache?: RequestCache
}

export interface APIDefaultResponse {
  status_code: number
  message: string
}

export interface APIResponse<T> extends APIDefaultResponse {
  data?: T
  pagination?: Pagination
}
