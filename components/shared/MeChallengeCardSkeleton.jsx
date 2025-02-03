import { Skeleton } from '@/components/ui/skeleton'

const MeChallengeCardSkeleton = () => {
  return (
    <div className='p-2 w-full rounded-[0.3rem] border flex flex-col md:flex-row gap-4'>
      <Skeleton className='md:w-1/5 aspect-square' />

      <div className='flex-1 flex flex-col justify-between'>
        <div>
          <Skeleton className='w-3/4 h-8' />
          <Skeleton className='w-1/2 my-2 h-6' />
        </div>

        <Skeleton className='w-full h-10' />
      </div>
    </div>
  )
}

export default MeChallengeCardSkeleton
