'use client'
import * as React from "react"
import dynamic from 'next/dynamic'

const DynamicJobForm = dynamic(() => import('@/components/jobform'), {
    ssr: false,
})

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-8">
            <DynamicJobForm/>
        </main>
    )
}
