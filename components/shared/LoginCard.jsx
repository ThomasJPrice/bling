'use client'

import { SignInWithGoogle, SignInWithPassword, SignUpWithPassword } from "@/actions/login"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LoaderCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import toast from "react-hot-toast"
import { FcGoogle } from "react-icons/fc"

export default function LoginCard({ mode, redirectUrl, sessionId }) {
  const [termsChecked, setTermsChecked] = useState(false)
  const [marketingConsent, setMarketingConsent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSignInWithGoogle = async () => {
    if (!termsChecked && mode === 'signup') {
      toast.error('Please agree to the Terms of Service')
      return
    }

    console.log('Signing in with Google, ', marketingConsent, redirectUrl, mode, sessionId);
    

    await SignInWithGoogle(marketingConsent, redirectUrl, mode, sessionId)
  }

  const handleSignWithPassword = async (formData) => {
    setLoading(true)

    if (mode === 'signup') {
      const error = await SignUpWithPassword(formData, redirectUrl, sessionId)
      if (error === 'user_already_exists') {
        toast.error('Email already exists. Try signing in!')
      } else if (error) {
        toast.error('An error occured. Please try again or contact us at support@blingclub.co.uk')
      }
    } else {
      const error = await SignInWithPassword(formData, redirectUrl)
      if (error === 'invalid_credentials') {
        toast.error('Invalid email or password.')
      } else if (error) {
        toast.error('An error occured. Please try again or contact us at support@blingclub.co.uk')
      }
    }

    setLoading(false)
  }

  return (
    <Card className="w-full max-w-md shadow-md m-4">
      <CardHeader>
        <Link href='/'><Image src='/main-logo.png' alt="BLING" width={634} height={187} className="h-[30px] w-fit object-contain mx-auto mb-2" /></Link>
        <CardTitle className="text-2xl font-bold text-center">
          {mode === 'signup' ? 'Create an account' : 'Log back in'}
        </CardTitle>
      </CardHeader>
      <form action={handleSignWithPassword}>
        <CardContent className='space-y-4'>
          <Button onClick={handleSignInWithGoogle} type='button' variant="outline" className="w-full">
            <FcGoogle className="mr-2 h-4 w-4" />
            Sign {mode === 'signup' ? 'up' : 'in'} with Google
          </Button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          {/* only render name fields on sign up */}
          {mode === 'signup' && (
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First name <span className="text-red-600">*</span></Label>
                <Input id="firstName" name="firstName" placeholder="John" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last name <span className="text-red-600">*</span></Label>
                <Input id="lastName" name="lastName" placeholder="Doe" required />
              </div>
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="email">Email {mode === 'signup' && <span className="text-red-600">*</span>}</Label>
            <Input id="email" name="email" type="email" placeholder="john.doe@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password {mode === 'signup' && <span className="text-red-600">*</span>}</Label>
            <Input id="password" name="password" minLength='8' type="password" required />
          </div>

          {/* only show checkboxes on sign up */}
          {mode === 'signup' && (
            <>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms" name="terms"
                    required
                    checked={termsChecked}
                    onCheckedChange={(e) => setTermsChecked(e)} />
                  <label htmlFor="terms" className="text-sm text-muted-foreground">
                    I agree to the <Link href="/terms" className="underline" target="_blank">Terms of Service</Link> <span className="text-red-600">*</span>
                  </label>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="marketing" name="marketing" checked={marketingConsent} onCheckedChange={(e) => setMarketingConsent(e)} />
                  <label htmlFor="marketing" className="text-sm text-muted-foreground">
                    I agree to receive marketing communications, we will never share your data with anyone else.
                  </label>
                </div>
              </div>
            </>
          )}
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button type='submit' className="w-full" disabled={loading}>
            {loading ? (
              <span><LoaderCircle className="animate-spin" /></span>
            ) : (<span>Sign {mode === 'signup' ? 'Up' : 'In'}</span>)}
          </Button>

          {mode === 'signup' ? (
            <div className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href={`/sign-in${(redirectUrl && redirectUrl !== '/link-strava') ? `?next=${redirectUrl}` : ''}`} className="underline">
                Sign in
              </Link>
            </div>
          ) : (
            <div className="text-center text-sm text-muted-foreground">
              Need an account?{" "}
              <Link href={`/sign-up${redirectUrl ? `?next=${redirectUrl}` : '?next=/link-strava'}`} className="underline">
                Sign up
              </Link>
            </div>
          )}
        </CardFooter>
      </form>
    </Card>
  )
}

