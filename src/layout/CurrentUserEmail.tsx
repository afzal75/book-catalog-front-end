import { getAccessToken } from "../redux/api/apiSlice"


const CurrentUserEmail = () => {
  const accessToken = getAccessToken()
  if (accessToken) {
    const tokenParts = accessToken.split('.')
    const tokenPayload = tokenParts[1]
    const decodedPayload = atob(tokenPayload)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const payloadObj = JSON.parse(decodedPayload)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const userEmail = payloadObj.userEmail
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return userEmail
  }
}

export default CurrentUserEmail