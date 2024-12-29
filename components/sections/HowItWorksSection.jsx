import { FaCalendarCheck, FaMedal, FaStrava } from "react-icons/fa"

const steps = [
  {
    title: 'Choose a Challenge',
    icon: FaCalendarCheck,
    description: 'Explore our range of exciting challenges with unique medals and choose the one that inspires you.'
  },
  {
    title: 'Track your Progress',
    icon: FaStrava,
    description: 'Train and complete the challenge at your own pace and track your final run with Strava.'
  },
  {
    title: 'Earn your Medal',
    icon: FaMedal,
    description: 'Complete the challenge and claim your exclusive medal to celebrate your success.'
  }
]

const HowItWorksSection = () => {
  return (
    <section id='how-it-works' className='container'>
      <div className='flex flex-col items-center'>
        <div className='w-max'>
          <h2 className='text-3xl font-bold text-primary italic uppercase'>How it works</h2>
          <div className='w-1/2 h-[1px] bg-primary mt-2 mx-auto' />
        </div>


        {/* steps */}
        <ul className="w-full flex flex-col md:flex-row gap-8 mt-8">
          {steps.map((item, index) => (
            <li className="flex-1 flex flex-col items-center text-center gap-2" key={item+index}>
              <div className="p-2 bg-secondary rounded-full flex justify-center items-center w-16 h-16">
                <item.icon className="text-4xl text-primary" />
              </div>

              <h4 className="text-xl font-bold text-primary">{item.title}</h4>

              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default HowItWorksSection