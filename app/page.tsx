import { headers } from 'next/headers'
 
export default function Page() {
  const headersList = headers()
  const forwarded = headersList.get('forwarded')
 
  return <div>forwarded: {forwarded}</div>
}