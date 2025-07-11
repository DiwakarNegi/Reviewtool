'use client'

import { useSession, signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { GitHubIcon, LoadingSpinner } from '@/components/ui/icons'

export default function Dashboard() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner className="w-8 h-8" />
      </div>
    )
  }

  if (!session) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="max-w-md mx-auto text-center">
          <GitHubIcon className="w-16 h-16 mx-auto mb-6 text-gray-700" />
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Sign in to Continue
          </h1>
          <p className="text-gray-600 mb-6">
            Access your GitHub repositories and start reviewing code quality.
          </p>
          <Button
            onClick={() => signIn('github')}
            className="w-full flex items-center justify-center gap-2"
          >
            <GitHubIcon className="w-5 h-5" />
            Sign in with GitHub
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back, {session.user?.name}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Recent Reviews
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Your latest repository reviews and analyses
            </p>
            <Button size="sm" variant="outline">
              View All
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Quick Review
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Start reviewing a new repository
            </p>
            <Button size="sm">
              New Review
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Statistics
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Your review statistics and insights
            </p>
            <Button size="sm" variant="outline">
              View Stats
            </Button>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-sm border">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Your GitHub Repositories
            </h2>
            <div className="text-center py-12">
              <p className="text-gray-500">
                Repository list will be loaded here
              </p>
              <Button className="mt-4">
                Load Repositories
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}