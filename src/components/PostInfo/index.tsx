'use client'

import { ArrowSquareOut, Buildings, GithubLogo, Users } from '@phosphor-icons/react'
import Link from 'next/link'

export default function PostInfo() {
  return (
    <div className="flex w-[65%] justify-center bg-base-profile rounded-lg p-8 gap-8">
      <div className="flex flex-col">
        <div className="w-full flex flex-row text-justify justify-between">
          <h2 className='font-medium text-2xl leading-normal'>Cameron Williamson</h2>
          <Link className="flex gap-2 hover:underline hover:text-brand-blue" href={'https://github.com/'}>
            <span className='text-brand-blue font-bold text-xs'>GITHUB</span>
            <ArrowSquareOut size={12} className='text-brand-blue' weight='bold' />
          </Link>
        </div>
        <div className="flex pt-2">
          <p className='text-base-text text-base
      '>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
        </div>
        <div className="flex flex-row pt-6 gap-6">
          <div className="flex gap-2 justify-center items-center">
            <GithubLogo size={18} weight='fill' className='text-base-label' />
            <p className='text-base-subtitle text-base'>cameronwll</p>
          </div>

          <div className="flex gap-2 justify-center items-center">
            <Buildings size={18} weight='fill' className='text-base-label' />
            <p className='text-base-subtitle text-base'>Rocketseat</p>
          </div>

          <div className="flex gap-2 justify-center items-center">
            <Users size={18} weight='fill' className='text-base-label' />
            <p className='text-base-subtitle text-base'>32</p>
            <p className='text-base-subtitle text-base'>seguidores</p>
          </div>
        </div>
      </div>
    </div>
  )
}