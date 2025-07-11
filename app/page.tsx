import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { GitHubIcon } from '@/components/ui/icons'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <GitHubIcon className="w-16 h-16 mx-auto mb-4 text-gray-700" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            GitHub Review Tool
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Analyze GitHub repositories, review code quality, and get insights 
            into your development projects with our comprehensive review tool.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Link href="/dashboard">
            <Button className="w-full sm:w-auto bg-primary-600 hover:bg-primary-700">
              Get Started
            </Button>
          </Link>
          <Link href="/review">
            <Button variant="outline" className="w-full sm:w-auto">
              View Demo
            </Button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Code Analysis</h3>
            <p className="text-gray-600">
              Comprehensive analysis of code quality, structure, and best practices.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Insights</h3>
            <p className="text-gray-600">
              Get instant feedback and suggestions for improving your repositories.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Team Collaboration</h3>
            <p className="text-gray-600">
              Share reviews and collaborate with your team on code improvements.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}