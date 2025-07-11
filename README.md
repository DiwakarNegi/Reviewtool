# GitHub Review Tool

A comprehensive tool for analyzing GitHub repositories, reviewing code quality, and providing insights into development projects.

![Homepage](https://github.com/user-attachments/assets/fc7bdb22-00a2-492a-9bbc-7779f81d5108)

## Features

- **Code Quality Analysis**: Comprehensive analysis of code structure and best practices
- **Security Review**: Identifies vulnerabilities and security issues
- **Documentation Assessment**: Evaluates documentation completeness
- **Testing Coverage**: Analyzes test coverage and quality
- **GitHub Integration**: Direct integration with GitHub repositories via OAuth

![Review Dashboard](https://github.com/user-attachments/assets/aa54fb87-ffcc-4eb1-8132-2e944156baea)

## Current Status

This repository has been completely restructured and improved from a non-functional state to a fully working Next.js application.

### Issues Fixed

✅ **Critical Security Issues**
- Fixed 4 npm package vulnerabilities (2 moderate, 2 critical)
- Removed exposed GitHub OAuth credentials from repository
- Added proper environment variable handling

✅ **Missing Source Code**
- Created complete Next.js app directory structure
- Added essential pages (home, dashboard, review)
- Built component library with reusable UI components

✅ **Configuration Improvements**
- Enhanced TypeScript configuration with strict type checking
- Improved Tailwind CSS setup with custom design tokens
- Optimized ESLint configuration
- Removed duplicate PostCSS configuration files

✅ **Application Structure**
- Implemented NextAuth.js for GitHub OAuth authentication
- Created responsive UI with Tailwind CSS
- Added proper error handling and loading states
- Built comprehensive review dashboard

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- GitHub OAuth App (for authentication)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DiwakarNegi/Reviewtool.git
   cd Reviewtool
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your GitHub OAuth credentials:
   ```env
   GITHUB_CLIENT_ID=your_github_client_id
   GITHUB_CLIENT_SECRET=your_github_client_secret
   NEXTAUTH_SECRET=your_random_secret_key
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser**

### GitHub OAuth Setup

1. Go to GitHub Settings > Developer settings > OAuth Apps
2. Create a new OAuth App with:
   - Homepage URL: `http://localhost:3000`
   - Authorization callback URL: `http://localhost:3000/api/auth/callback/github`
3. Copy the Client ID and Client Secret to your `.env.local` file

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint code analysis

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   └── auth/          # NextAuth configuration
│   ├── dashboard/         # Dashboard page
│   ├── review/           # Review page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Homepage
│   └── providers.tsx     # App providers
├── components/            # Reusable components
│   ├── ui/               # Basic UI components
│   ├── auth/             # Authentication components
│   └── github/           # GitHub-specific components
├── lib/                  # Utility libraries
│   ├── auth.ts           # NextAuth configuration
│   └── utils.ts          # Utility functions
├── types/                # TypeScript type definitions
└── styles/               # Additional stylesheets
```

## Technology Stack

- **Framework**: Next.js 15.3.4 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js with GitHub OAuth
- **UI Components**: Custom components with Tailwind
- **Development**: ESLint, TypeScript, Turbopack

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Other Platforms

The application can be deployed to any platform that supports Node.js applications:
- Netlify
- Railway
- Digital Ocean App Platform
- AWS Amplify

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components inspired by modern design systems
- Icons from [Heroicons](https://heroicons.com/)
