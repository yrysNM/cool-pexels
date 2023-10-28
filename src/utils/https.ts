interface IRequest {
  method: string
  headers: {
    "Content-Type": "application/json"
    Authorization: string
  }
  body?: string
}

export const request = <T, B>(url: string, bodyData: B | null, method = "GET"): Promise<T> => {
  const baseUrl = `https://api.pexels.com/v1/${url}`

  const requestInfo: IRequest = {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `${process.env.VUE_APP_API_KEY}`,
    },
  }

  if (method !== "GET") {
    requestInfo.body = JSON.stringify(bodyData)
  }

  return fetch(baseUrl, requestInfo)
    .then((res) => res.json())
    .then((data: T) => data)
}
