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
    <div className='container mx-auto flex gap-10 items-center justify-center mt-6 flex-wrap'>
      {stats.map((stat, idx) => (
        <div key={idx} className='flex gap-6 items-center justify-items-start'>
          <CountUp end={stat.count} duration={10} delay={1} separator=',' className='text-4xl font-bold dark:text-second' />
          <h3 className='text-md dark:text-light'>{stat.title}</h3>
        </div>
      ))}
      
    </div>
  )
}

export default Stats
