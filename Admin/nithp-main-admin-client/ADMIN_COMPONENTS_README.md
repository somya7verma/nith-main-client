# Admin Panel - NIT Hamirpur

## Overview

A modern admin panel with sidebar navigation and 11 pre-built components. Built with Next.js 15, TypeScript, and Tailwind CSS.

## Color Scheme

- **Primary:** `#631012` (Deep Red)
- **Dark:** `#171717` (Almost Black)
- **Light:** `#F9F9F9` (Off White)

## Project Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── sidebar.tsx          # Responsive sidebar with navigation
│   │   └── admin-layout.tsx     # Layout wrapper
│   └── home-components/
│       ├── analytics.tsx        # Analytics dashboard
│       ├── home.tsx             # Main dashboard
│       ├── academics.tsx        # Course management
│       ├── people.tsx           # Faculty/Staff
│       ├── researches.tsx       # Research papers
│       ├── news.tsx             # News articles
│       ├── events.tsx           # Events calendar
│       ├── announcements.tsx    # Announcements
│       ├── departmental-data.tsx # Department stats
│       ├── credentials.tsx      # Credential management
│       └── hod.tsx              # HOD profile
└── app/
    └── admin/                   # All admin routes
        ├── analytics/page.tsx
        ├── home/page.tsx
        └── ...
```

## Quick Start

1. **Start development server:**

   ```bash
   npm run dev
   ```

2. **Visit:** `http://localhost:3000/admin/home`

## How to Use

### Wrap any component with AdminLayout:

```tsx
import AdminLayout from '@/components/ui/admin-layout';
import YourComponent from '@/components/home-components/your-component';

export default function Page() {
  return (
    <AdminLayout>
      <YourComponent />
    </AdminLayout>
  );
}
```

## Available Routes

| Route                      | Component         | Description           |
| -------------------------- | ----------------- | --------------------- |
| `/admin/home`              | Home              | Main dashboard        |
| `/admin/analytics`         | Analytics         | Metrics & stats       |
| `/admin/academics`         | Academics         | Course management     |
| `/admin/people`            | People            | Faculty directory     |
| `/admin/researches`        | Researches        | Research papers       |
| `/admin/news`              | News              | News articles         |
| `/admin/events`            | Events            | Event calendar        |
| `/admin/announcements`     | Announcements     | Announcements         |
| `/admin/departmental-data` | Departmental Data | Department stats      |
| `/admin/credentials`       | Credentials       | Credential management |
| `/admin/hod`               | HOD               | HOD information       |

## Sidebar Features

- ✅ Responsive (desktop + mobile)
- ✅ Hamburger menu on mobile
- ✅ Active route highlighting
- ✅ Smooth animations
- ✅ Icons from lucide-react

## Responsive Design

- **Desktop (>1024px):** Sidebar always visible (256px width)
- **Mobile (<1024px):** Hidden sidebar, hamburger menu with overlay

## Customization

### Change Colors

Replace color values in components:

- `bg-[#631012]` → Primary red
- `bg-[#171717]` → Dark background
- `bg-[#F9F9F9]` → Light background

### Add New Sidebar Item

Edit `src/components/ui/sidebar.tsx`:

```tsx
const sidebarItems = [
  // ...existing items
  {
    id: 'settings',
    label: 'Settings',
    icon: <SettingsIcon size={20} />,
    href: '/admin/settings',
  },
];
```

## Tech Stack

- Next.js 15.5.4
- React 19.1.0
- TypeScript 5
- Tailwind CSS 4
- lucide-react 0.548.0

---

**Built for NIT Hamirpur**
