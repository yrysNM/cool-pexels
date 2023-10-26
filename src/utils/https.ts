export const request = <T, B>(url: string, bodyData: B, methods: string = "GET"): Promise<T> => {
  const baseUrl = `https://api.pexels.com/v1/${url}`
  return fetch(baseUrl, {
    headers: {
      methods,
      "Content-type": "application/json",
      Authorization: process.env.API_KEY,
    },
    body: JSON.stringify(bodyData),
  })
    .then((res) => res.json())
    .then((data: T) => data)
}
