import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"

export async function middleware(req: NextRequest) {
  // ユーザーセッションの有効性を保証する
  const res = NextResponse.next()
  // const supabase = createMiddlewareClient({ req, res })
  // const {
  //   data: { session },
  // } = await supabase.auth.getSession()
  // if (!session && req.nextUrl.pathname.startsWith("/path/hoge")) {
  //   const redirectUrl = req.nextUrl.clone()
  //   redirectUrl.pathname = "/auth"
  //   return NextResponse.redirect(redirectUrl)
  // }
  return res
}
