import React from 'react';
import ForumCard from './ForumCard';
import { postList } from './data';

function App() {
  return (
    <main className='w-full min-h-screen bg-plain'>
      <div className='max-w-[850px] mx-auto w-full px-6 py-20 '>
        <h1 className='text-title text-3xl font-medium'>MAQE Forum</h1>
        <p className='text-base my-4'>Your current timezone is: Asia/Bangkok</p>
        <div className='flex flex-col gap-6'>
          {postList.map((each_post) => {
            return (
              <ForumCard key={each_post.id} {...each_post} />
            )
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
