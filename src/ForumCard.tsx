import React from 'react'
import { TAuthor, TPost, authorList } from './data';
import dayjs from 'dayjs';

type TFormCardProps = TPost;

const ForumCard: React.FC<TFormCardProps> = (props) => {
  const authorInfo: TAuthor | undefined = authorList.find(i => i.id === props.author_id)

  return (
    <article className={`${props.id % 2 === 0 ? 'bg-highlight' : 'bg-white'} shadow`}>
      <div className='flex gap-1 items-center flex-wrap justify-start p-4 border-b-[1px] border-slate-300'>
        <img className='w-8 h-8 rounded-full'
          src={authorInfo?.avatar_url ?? 'https://randomuser.me/api/portraits/men/1.jpg'}
          alt={authorInfo ? authorInfo.name : 'maqe alt image'} />
        <p className={`${authorInfo ? 'text-accent' : 'text-gray-400'} font-medium`}>{authorInfo?.name ?? 'undefined user'}</p>
        <p className='text-label'>posted on {`${dayjs(props.created_at).format('dddd, MMMM D, YYYY, HH:mm')}`}</p>
      </div>
      <div className='grid grid-cols-6 p-4 gap-4'>
        <img className='col-span-full lg:col-span-2 w-full h-auto' src={props.image_url} loading='lazy' />
        <div className='col-span-full lg:col-span-4'>
          <h2 className='text-xl font-medium'>{props.title}</h2>
          <p>{props.body}</p>
        </div>
      </div>
    </article>
  )
}

export default ForumCard