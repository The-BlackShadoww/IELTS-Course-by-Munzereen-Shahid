# IELTS Preparation Course by Munzereen Shahid

A modern, production-ready Next.js web application for the IELTS Preparation Course by Munzereen Shahid, powered by 10 Minute School.

## Features

-   **Dynamic Course Content:** Fetches and displays course data, instructor info, exclusive features, and more from the backend.
-   **SEO Optimized:** Dynamic metadata and Open Graph tags for better search engine visibility.
-   **Internationalization:** Language support via server-side language detection.
-   **Responsive Design:** Fully responsive layout for desktop and mobile devices.
-   **Server-Side Rendering & ISR:** Uses Next.js server-side rendering and Incremental Static Regeneration for fast, up-to-date content.
-   **Component-Based Architecture:** Clean, reusable React components for each section (CourseLayout, Instructor, SideBar, etc.).
-   **Schema Markup:** Injects structured data for enhanced SEO.
-   **Docker Support:** Ready-to-use Dockerfile for containerized deployments.

## Main Packages Used

-   **next**: React framework for server-side rendering and static site generation.
-   **react**: UI library for building user interfaces.
-   **typescript**: Type-safe development for better code quality.
-   **tailwindcss**: Utility-first CSS framework for rapid UI development.
-   **motion**: Animations for better interactivity.
-   **shadcn UI Component**: A set of beautifully designed components that you can customize, extend, and build on.
-   **DOMPurify**: A DOM-only, super-fast, uber-tolerant XSS sanitizer for HTML, MathML and SVG.

> _Check your `package.json` for the full list of dependencies and their versions._

## Project Structure

```
├── app/
│   ├── page.tsx                # Main Next.js page
│   ├── layout.tsx  
│   └── actions
│        └── language.ts
├── components/
│   ├── sections/
│   │    └── home/
│   │        ├── CourseLayout.tsx
│   │        ├── LearningFromCourse.tsx
│   │        ├── ExclusiveFeatures.tsx
│   │        ├── CourseDetails.tsx
│   │        ├── Instructor.tsx
│   │        ├── CourseMedia.tsx
│   │        ├── SideBar.tsx
│   │        └── CourseChecklist.tsx
│   └── ui/
├── lib/
│   ├── getCourseData.ts
│   └── language.ts
├── types/
│   └── index.ts
├── public/
├── styles/
├── next.config.js
├── Dockerfile
└── README.md
```

## Getting Started

### 1. Install Dependencies

```sh
npm install
```

### 2. Development

```sh
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build

```sh
npm run build
npm start
```

### 4. Docker

Build and run the app in a container:

```sh
docker build -t ielts-course .
docker run -p 3000:3000 ielts-course
```

## Environment Variables

-   Configure any required environment variables in a `.env.local` file.
-   Example:
    ```
    NEXT_PUBLIC_API_URL=https://api.10minuteschool.com
    ```

## Deployment

-   Supports deployment to Vercel, Docker, or any Node.js hosting platform.
-   Make sure to configure `next.config.js` for external image domains as needed.
