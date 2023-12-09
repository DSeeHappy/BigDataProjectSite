'use client'
import JobList from "@/app/components/joblist";


export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <JobList/>
        </main>
    )
}
