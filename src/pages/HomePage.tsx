import React, { useEffect, useState } from 'react'
import RepoCard from '../components/RepoCard'
import { useDebounse } from '../hooks/useDebounse'
import { useLazyGetUserReposQuery, useSearchUsersQuery } from '../store/github/github.api'

export default function HomePage() {
  const [search, setSearch] = useState('')
  const [dropDown, setDropDown] = useState('')
  const debounsed = useDebounse(search)
  const { isLoading, isError, data } = useSearchUsersQuery(debounsed, {
    skip: debounsed.length < 3
    //при каких условиях не нужно делать запросы
  })
  const [fetchRepos, {isLoading:areReposLoding, data: repos }] = useLazyGetUserReposQuery()

  useEffect(() => {
    setDropDown(debounsed)
  }, [data])

  const clickHandler = (username: string) => {
    fetchRepos(username)
    setDropDown('')
  }


  return (
    <div className='flex justify-center pt-10 mx-auto h-screen w-screen'>
      {isError && <p className='text-center text-red-600'>Ошибка...</p>}
      <div className='relative w-[560px]'>
        <input
          type="text"
          className='border py-2 px-4 w-full h-[40px] mb-2'
          placeholder='Найти пользователя на Github'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        { dropDown && <ul className='list-none absolute top-[40px] left-0 right-0 max-h-[200px] shadow-md bg-white overflow-y-scroll'>
          {isLoading && <p className='text-center'>Загрузка...</p>}
          {data?.map(user => (
            <li
              key={user.id}
              onClick={() =>{clickHandler(user.login)}}
              className='py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer'>
              {user.login}
            </li>
          ))}
        </ul>}

        <div className='container'>
          {areReposLoding && <p className='text-center'>Репозитории загружаются...</p>}
          { repos?.map(repo => <RepoCard repo={repo} key={repo.id}/>)}
        </div>
      </div>      
    </div>
  )
}
