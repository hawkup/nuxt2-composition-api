import useSWRV, { IConfig } from 'swrv'
import { useContext, Ref } from '@nuxtjs/composition-api'
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

type RequestKey = (() => AxiosRequestConfig) | AxiosRequestConfig

const fetcher = (key: string) => {
  return axios(key)
    .then(resp => {
      return resp.data
    })
}

function useRequest<Data = unknown, Error = unknown> (
  request: Ref<RequestKey>,
  config?: IConfig
) {
  const { app } = useContext()

  return useSWRV<AxiosResponse<Data>, AxiosError<Error>>(
    () => JSON.stringify(request.value),
    key => fetcher(JSON.parse(key)),
    config
  )
}

export default useRequest
