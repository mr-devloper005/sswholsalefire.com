'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, Search, UserPlus, X, PlusCircle } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'
export function EditableNavbar() {
 const [open,setOpen]=useState(false); const {session,logout}=useEditableLocalAuthSession()
 const links=[{label:'About',href:'/about'},{label:'Contact',href:'/contact'}]
 return <header className="sticky top-0 z-50 border-b border-[var(--editable-border)] bg-[var(--editable-nav-bg)]/95 backdrop-blur"><nav className="mx-auto flex min-h-[82px] max-w-[var(--editable-container)] items-center gap-5 px-5 sm:px-8 lg:px-12">
  <Link href="/" className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center bg-[var(--slot4-accent)]"><img src="/favicon.png?v=20260413" alt={SITE_CONFIG.name} className="h-9 w-9 object-contain" /></span><span className="editable-display text-xl font-bold tracking-[-.06em]">{SITE_CONFIG.name}</span></Link>
  <div className="ml-auto hidden items-center gap-7 md:flex">{links.map(x=><Link key={x.href} href={x.href} className="text-sm font-bold transition hover:opacity-55">{x.label}</Link>)}<Link href="/search" aria-label="Search" className="rounded-full border border-[var(--editable-border)] p-2.5 transition hover:bg-[var(--slot4-accent)]"><Search className="h-4 w-4" /></Link></div>
  <div className="flex items-center gap-2">{session ? <><Link href="/create" className="hidden rounded-full bg-[var(--editable-cta-bg)] px-4 py-2 text-xs font-bold text-white sm:inline-flex"><PlusCircle className="mr-2 h-4 w-4" />Add a find</Link><button onClick={logout} className="hidden text-xs font-bold sm:inline">Log out</button></> : <><Link href="/login" className="hidden text-sm font-bold sm:inline-flex">Log in</Link><Link href="/signup" className="hidden rounded-full bg-[var(--editable-cta-bg)] px-4 py-2 text-sm font-bold text-white sm:inline-flex"><UserPlus className="mr-2 h-4 w-4" />Join</Link></>}<button onClick={()=>setOpen(!open)} className="rounded-full border border-[var(--editable-border)] p-2.5 md:hidden" aria-label="Toggle menu">{open?<X/>:<Menu/>}</button></div>
 </nav>{open?<div className="border-t border-[var(--editable-border)] px-5 py-5 md:hidden"><div className="grid gap-3">{links.map(x=><Link key={x.href} href={x.href} onClick={()=>setOpen(false)} className="text-lg font-bold">{x.label}</Link>)}<Link href="/search" onClick={()=>setOpen(false)} className="flex items-center gap-2 text-lg font-bold"><Search className="h-4 w-4"/>Search</Link>{session?<><Link href="/create" className="font-bold">Add a find</Link><button onClick={logout} className="text-left font-bold">Log out</button></>:<><Link href="/login" className="font-bold">Log in</Link><Link href="/signup" className="font-bold">Join</Link></>}</div></div>:null}</header>
}
