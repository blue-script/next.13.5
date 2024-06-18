// 'use client'
// import {useState} from 'react'
// SSR | SSG | ISR -(last) best of the best :)

import {cookies} from 'next/headers'
import {use} from 'react'

const fetchData = () => fetch('https://jsonplaceholder.typicode.com/posts/1', {
  next: {revalidate: 30},
})
  .then((response) => response.json())


export default async function DashboardPage() {
  // only client
  // const [isAdmin, setIsAdmin] = useState(false)

  // console.log(cookies().getAll())

  const data = await fetchData()

  return <div>{data.id}</div>
}
