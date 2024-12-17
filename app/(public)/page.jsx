import { linkNewOrder } from "@/actions/checkout";
import { createClient } from "@/utils/supabase/server";
import { SignedIn } from "@/utils/wrappers";

export const metadata = {
  title: 'Home | BLING'
}

const signOut = async () => {
  'use server'
  const supabase = await createClient()
  await supabase.auth.signOut()
}

export default function Home() {
  return (
    <div className="">
      <SignedIn>
        <form action={signOut}>
          <button type="submit">Sign out</button>
        </form>
      </SignedIn>
    </div>
  );
}
