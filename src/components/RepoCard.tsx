import React from 'react'
import { IRepo } from '../models/models'

export default function RepoCard({ repo }: { repo: IRepo }) {
    return (
        <a href={repo.html_url} target='_blank'><div className='border py-3 px-5 rounded cursor-pointer mb-2 hover:shadow-md hover:bg-gray-100 transition-all'>
            <h2 className='text-lg font-bold'>{repo.full_name}</h2>
            <p className='text-sm'>
                Forks: <span className='font-bold mr-2'>{repo.forks}</span>
                Watchers: <span className='font-bold'>{repo.watchers}</span>
            </p>
            <p className='text-sm font-thin'>{repo?.description}</p>
        </div>
        </a>
    )
}
