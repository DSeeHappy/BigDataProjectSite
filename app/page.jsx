'use client'
import JobList from "@/components/joblist";


export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <JobList/>
        </main>
    )
}
