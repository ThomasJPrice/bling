import { Body, Html, Tailwind, Head, Container, Text, Link, Img, Font } from '@react-email/components'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

const EmailWrapper = ({ children, internal }) => {
  return (
    <Tailwind>
      <Html>
        <Head>
          <Font
            
          />
        </Head>

        <Body className="bg-[#fdfcf7]  text-[#fdfcf7]" style={{ fontFamily: 'Figtree, system-ui' }}>
          <Container className="max-w-[600px] mx-auto p-6 bg-[#0b0a0a]">
            <div className='p-6'>
              {children}

              {/* footer */}
              <div className='mt-6'>
                <Link href='https://blingclub.co.uk'>
                  <Img src="https://bling-lilac.vercel.app/main-logo.png" alt="BLING Logo" className="w-[120px] -mt-2 mx-auto" />
                </Link>
                {!internal && (
                  <div className='mt-4'>
                    <div className='flex justify-center gap-2'>
                      <Link className='text-[#fdfcf7]' href='https://www.instagram.com/blingclub/'>
                        <FaInstagram className='w-5 h-5' />
                      </Link>
                      <Link className='text-[#fdfcf7]' href='https://www.facebook.com/blingclub/'>
                        <FaFacebook className='w-5 h-5' />
                      </Link>
                    </div>

                    <Text className="text-sm text-center">
                      You are receiving this email because you interacted with BLING Club
                    </Text>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  )
}

export default EmailWrapper