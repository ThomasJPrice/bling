'use client'

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { useRouter } from "next/navigation"
import { disconnectStrava, getStravaStatus, redirectToConnection } from "@/actions/strava"
import { LoaderCircle } from "lucide-react"

const StravaSettings = () => {
  const [isConnected, setIsConnected] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function checkConnection() {
      const { status } = await getStravaStatus()

      if (status) {
        setIsConnected(true)
      } else {
        setIsConnected(false)
      }

      setIsLoading(false)
    }

    checkConnection()
  }, [])


  const handleToggleConnection = async () => {
    if (isLoading) return

    if (isConnected) {
      setIsLoading(true)

      await disconnectStrava()
      
      setIsLoading(false)
      setIsConnected(false)
    } else {
      setIsLoading(true)

      await redirectToConnection()
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="flex flex-row items-center space-x-4 pb-2">
        <div className="w-12 h-12 bg-[#fc4c02] rounded-full flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8">
            <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
          </svg>
        </div>
        <div className="flex-1">
          <CardTitle>Strava Integration</CardTitle>
          <VisuallyHidden><CardDescription>Sync your activities and track your progress</CardDescription></VisuallyHidden>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Connect your Strava account to automatically sync your activities and track your progress.
        </p>
      </CardContent>
      <CardFooter>
        {isLoading ? (
          <Button disabled className='w-full'><LoaderCircle className="animate-spin" /></Button>
        ): (
            <Button
          variant = { isConnected? "destructive": "default" }
          className = "w-full"
          onClick = { handleToggleConnection }
            >
          { isConnected? "Disconnect": "Connect to Strava" }
        </Button>
        )}
    </CardFooter>
    </Card >
  )
}

export default StravaSettings