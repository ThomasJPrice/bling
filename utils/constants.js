import Link from "next/link"

export const NAVLINKS = [
  {
    name: 'About Us',
    link: '/about'
  },
  {
    name: 'Challenges',
    link: '/challenges'
  },
  {
    name: 'FAQs',
    link: '/faqs'
  }
]

export const FAQS = [
  {
    question: "How does it work?",
    answer: <p>It's really simple - buy a challenge, create an account and link your Strava, and get running! When you have reached your target distance we will email you a certificate with your unique medal number on, and post your medal.</p>
  },
  {
    question: "How limited are the medals really?",
    answer: <p>The number of places on the challenge will determine how many medals are produced. Once the number is reached the design is retired. Your finishers' eCertificate will tell you which number medal you have. We promise that we will never repeat a medal design.</p>
  },
  {
    question: "Are the medals good quality?",
    answer: <p>Yes. We use a leading medal manufacturer who are experts in their field. In fact, they also make the medals for the TCS London Marathon. All of our medals are 95 percent recyclable, and our ribbons are produced with non-toxic inks. Our supplier is approved by SEDEX - the Supplier Ethical Data Exchange - which monitors ethical and responsible practices within industry. Each medal is quality checked before sending.</p>
  },
  {
    question: "How much is postage for my medal?",
    answer: <p>There's no hidden extras - your medal will be sent for FREE using Royal Mail 1st class in the UK. Charges for international shipping are calculated at the checkout.</p>
  },
  {
    question: "How long do I have to complete my challenge?",
    answer: <p>The item description will tell you how long you have. It could be anywhere from 3 months to a year, depending on the distance. You can start running from the moment you check out.</p>
  },
  {
    question: "Do I have to run for all of the distance?",
    answer: <p>We pull run data from Strava so if you have logged it as a run, it will count. If you want to walk, skate, swim, hop...it's up to you - just log it as a run so our system recognises it.</p>
  },
  {
    question: "Do I have to use Strava? What if I don't have an account?",
    answer: <p>We use Strava as in our experience it's the most accessible and reliable both in terms of tracking your activity and talking to our system. Strava allows you to manually enter data in when it doesn't pick up movement such as a treadmill or rowing machine, so you can make it all count. You can install and use Strava for free. Download the app from your app store.</p>
  },
  {
    question: "How do I log my runs?",
    answer: <p>You don't! Just record your runs on Strava as normal. Our system will talk to your Strava so eligible runs will automatically be counted. You can check your progress for runs you'll do in stages in <Link href='/me' className="text-primary font-medium">My Account</Link>.</p>
  },
  {
    question: "What if I run out of time for my challenge?",
    answer: <p>Please check carefully that you can commit to the challenge you're buying. As these events sell out quickly and we retire the medal design, we don't do refunds but if you are struggling to meet the deadline give us a shout and we may be able to extend your time.</p>
  },
  {
    question: "Why are some events 'pre-register'?",
    answer: <p>When demand is high we want to make sure you have the opportunity to get involved. Our medals are designed and made with care so to prevent a delay between you completing a challenge and receiving your medal, we sometimes delay the start date.</p>
  },
  {
    question: "How do I get in touch with you?",
    answer: <p>We love hearing from you - so drop us an email at <Link className="text-primary font-medium" href='mailto:hello@BLINGclub.co.uk.'>hello@BLINGclub.co.uk.</Link></p>
  }
]