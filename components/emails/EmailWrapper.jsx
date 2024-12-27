import { Body, Html, Tailwind, Head, Container, Text, Link, Img, Font } from '@react-email/components'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

const EmailWrapper = ({ children, internal }) => {
  return (
    <Tailwind>
      <Html>
        <Head>
          <Font
            fontFamily='Satoshi'
            fallbackFontFamily='sans-serif'
            webFont={{
              url: 'https://bling-lilac.vercel.app/Satoshi-Variable.woff2',
              format: 'woff2'
            }}
          />
        </Head>

        <Body className="bg-[#fdfcf7]  text-[#fdfcf7]">
          <Container className="max-w-[600px] mx-auto p-6 bg-[#0b0a0a]">
            <div>
              {children}

              {/* footer */}
              <div className='p-2 !pt-6'>
                <Link href='https://blingclub.co.uk'>
                  <Img src="https://bling-lilac.vercel.app/main-logo.png" alt="BLING Logo" className="w-[120px] mx-auto" />
                </Link>
                <Link href='https://blingclub.co.uk' className='text-center mx-auto text-[#fdfcf7]'>
                  <Text className='text-lg'>blingclub.co.uk</Text>
                </Link>
                {!internal && (
                  <Text className="text-sm text-center">
                    You are receiving this email because you interacted with BLING Club
                  </Text>
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