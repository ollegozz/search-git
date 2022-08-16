import React from 'react'
import { useSearchUsersQuery } from '../store/github/github.api'

export default function HomePage() {
  const {isLoading, isError, data} = useSearchUsersQuery('oleg')
  return (
    <div>HomePage</div>
  )
}
