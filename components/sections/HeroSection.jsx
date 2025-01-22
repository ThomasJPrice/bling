import Link from "next/link"
import { Button } from "../ui/button"
import Image from "next/image"

const HeroSection = () => {
  return (
    <section id="hero" className="container min-h-[70dvh] group relative grid place-items-center">
      <div className="text-center max-w-[600px] w-full mx-auto flex flex-col justify-center items-center gap-4 px-2">
        <h1 className="text-[50px] md:text-[64px] leading-[60px] md:leading-[72px] font-[800] italic text-primary">Get the Recognition You Deserve with BLING Club</h1>
        <p className="">Take on exciting running challenges, track your progress with Strava, and earn exclusive medals for your achievements. Start your journey today!</p>

        <div className="flex gap-4">
          <Link href='/challenges'>
            <Button>Join a Challenge</Button>
          </Link>

          <Link href='#how-it-works'>
            <Button variant='secondary'>Learn More</Button>
          </Link>
        </div>
      </div>

      <div className="absolute px-4 top-0 left-0 w-full h-full object-cover -z-10 opacity-40 transition-all group-hover:opacity-[45%] duration-300 ease-in-out">
        <Image
          src={'/hero-image.png'}
          width={2128}
          alt="Hero Image"
          height={1416}
          className="h-full object-cover rounded-xl"
          priority
        />
      </div>
    </section>
  )
}

export default HeroSection

// NEXT
// refactored challenge card, with live/pre order dependant on Date, not sanity name
// about page