import React from 'react'
import CountUp from 'react-countup'

const stats = [
  { title: 'Projects Completed', count: 10 },
  { title: 'Years of Experience', count: 3 },
  { title: 'Technology mastered', count: 16 },
  { title: 'Code Commits', count: 550 },
]
const Stats = () => {
  return (
    // grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full  alternate
    <div className='container mx-auto flex flex-wrap lg:flex-nowrap justify-center mt-6'>
      {stats.map((stat, idx) => (
        <div key={idx} className='flex gap-6 p-4 items-center'>
          <CountUp end={stat.count} duration={10} delay={1} separator=',' className='text-4xl font-bold dark:text-second' />
          <h3 className='text-md dark:text-light'>{stat.title}</h3>
        </div>
      ))}
      
    </div>
  )
}

export default Stats
