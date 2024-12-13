import { createClient } from "@supabase/supabase-js";

export async function POST(request) {
  const SANITY_SECRET = process.env.SANITY_SECRET;
  const signature = request.headers.get('sanity-webhook-secret');

  if (!signature || signature !== SANITY_SECRET) {
    return new Response(`Invalid request secret`, { status: 403 });
  }

  const data = await request.json();

  if (!data) {
    return new Response(`No action taken`, { status: 200 });
  }

  const challengeData = {
    title: data?.title || 'Untitled',
    slug: data?.slug?.current || 'untitled',
    total_qty: data?.totalStock || 0,
  };

  try {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

    const { data: insertData, error: insertError } = await supabase.from('challenges').insert([{
      title: challengeData.title,
      slug: challengeData.slug,
      total_qty: challengeData.total_qty,
      qty_left: challengeData.total_qty
    }])

    if (insertError) {
      console.error('Error inserting into Supabase:', insertError);
      return new Response(`Failed to insert challenge into Supabase, ${insertError}`, { status: 500 })
    }

    return new Response(`Challenge created successfully, ${insertData}`, { status: 200 })

  } catch (error) {
    console.error('Server error:', error);
    return new Response(`Server error, ${error}`, { status: 500 })
  }
}