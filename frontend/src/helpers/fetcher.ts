import { APIDefaultResponse, APIResponse, FetcherParams } from '@/interfaces/fetcher'

const fetcher = async <T = unknown>(params: FetcherParams): Promise<APIResponse<T>> => {
  try {
    const { headers, method, url, body, cache } = params
    const defaultHeaders: HeadersInit = {
      'Content-Type': 'application/json',
      ...headers,
    }

    const defaultCache: RequestCache = cache ? cache : 'force-cache'

    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + url, {
      method,
      headers: defaultHeaders,
      body,
      cache: defaultCache,
    })
    const json = await res.json()

    return {
      status_code: json?.status_code ?? 500,
      message: json?.message ?? 'Something went wrong',
      data: json?.data ?? undefined,
      pagination: json?.pagination ?? undefined,
    }
  } catch (error: unknown) {
    const err = error as APIDefaultResponse
    return {
      status_code: err?.status_code || 500,
      message: err?.message ?? 'Something went wrong',
    }
  }
}
export default fetcher
