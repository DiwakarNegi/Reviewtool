import { Button } from '@/components/ui/button'
import { CheckIcon, AlertIcon } from '@/components/ui/icons'

export default function Review() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Repository Review</h1>
          <p className="text-gray-600">
            Comprehensive analysis and review of repository code quality
          </p>
        </div>

        {/* Repository Info */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                DiwakarNegi/Reviewtool
              </h2>
              <p className="text-gray-600">
                A GitHub repository review tool built with Next.js
              </p>
            </div>
            <Button>
              Start Review
            </Button>
          </div>
        </div>

        {/* Review Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Code Quality</h3>
              <CheckIcon className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-2xl font-bold text-green-600 mb-2">85%</p>
            <p className="text-sm text-gray-600">Good code quality detected</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Security</h3>
              <AlertIcon className="w-5 h-5 text-yellow-500" />
            </div>
            <p className="text-2xl font-bold text-yellow-600 mb-2">4</p>
            <p className="text-sm text-gray-600">Security issues found</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Documentation</h3>
              <AlertIcon className="w-5 h-5 text-red-500" />
            </div>
            <p className="text-2xl font-bold text-red-600 mb-2">45%</p>
            <p className="text-sm text-gray-600">Needs improvement</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Tests</h3>
              <AlertIcon className="w-5 h-5 text-red-500" />
            </div>
            <p className="text-2xl font-bold text-red-600 mb-2">0%</p>
            <p className="text-sm text-gray-600">No tests found</p>
          </div>
        </div>

        {/* Detailed Issues */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold text-gray-900">
              Issues & Recommendations
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                <AlertIcon className="w-5 h-5 text-red-500 mt-0.5" />
                <div>
                  <h4 className="font-medium text-red-900">
                    Missing Source Code
                  </h4>
                  <p className="text-red-700 text-sm">
                    The repository is missing essential source code directories (app/, components/).
                    This makes the application non-functional.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <AlertIcon className="w-5 h-5 text-yellow-500 mt-0.5" />
                <div>
                  <h4 className="font-medium text-yellow-900">
                    Security Vulnerabilities
                  </h4>
                  <p className="text-yellow-700 text-sm">
                    Found 4 npm package vulnerabilities including critical SQL injection risks.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <AlertIcon className="w-5 h-5 text-yellow-500 mt-0.5" />
                <div>
                  <h4 className="font-medium text-yellow-900">
                    Exposed Credentials
                  </h4>
                  <p className="text-yellow-700 text-sm">
                    GitHub OAuth secrets are committed to the repository, which is a security risk.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                <AlertIcon className="w-5 h-5 text-red-500 mt-0.5" />
                <div>
                  <h4 className="font-medium text-red-900">
                    No Testing Framework
                  </h4>
                  <p className="text-red-700 text-sm">
                    No testing setup found. Consider adding Jest, React Testing Library, or similar.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <CheckIcon className="w-5 h-5 text-blue-500 mt-0.5" />
                <div>
                  <h4 className="font-medium text-blue-900">
                    Good Configuration
                  </h4>
                  <p className="text-blue-700 text-sm">
                    TypeScript, ESLint, and Tailwind CSS are properly configured.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}