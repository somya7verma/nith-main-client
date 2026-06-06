# Quick Start Guide

## Start Development

```bash
npm run dev
```

Visit: **`http://localhost:3000`**

## Admin Routes

All admin pages are at `/admin/*`:

```
http://localhost:3000/admin/home            # Main Dashboard
http://localhost:3000/admin/analytics       # Analytics
http://localhost:3000/admin/academics       # Academics
http://localhost:3000/admin/people          # People
http://localhost:3000/admin/researches      # Research
http://localhost:3000/admin/news            # News
http://localhost:3000/admin/events          # Events
http://localhost:3000/admin/announcements   # Announcements
http://localhost:3000/admin/departmental-data # Department Data
http://localhost:3000/admin/credentials     # Credentials
http://localhost:3000/admin/hod             # HOD
```

## Usage

Every admin page uses this pattern:

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

## Add New Page

**Step 1:** Create component in `src/components/home-components/settings.tsx`


**Step 2:** Create page in `src/app/admin/settings/page.tsx`


**Step 3:** Add to sidebar in `src/components/ui/sidebar.tsx`


## Color Scheme

Use these colors consistently:

```tsx
bg-[#631012]  // Primary red
bg-[#171717]  // Dark background
bg-[#F9F9F9]  // Light background
```


## Responsive Design

- **Desktop (>1024px):** Sidebar always visible
- **Mobile (<1024px):** Hamburger menu

## Production Build

```bash
npm run build
npm start
```

## Troubleshooting

**Sidebar not showing?**

- Use `<AdminLayout>` wrapper
- Route must start with `/admin/`

**Icons not working?**

- Check: `npm install lucide-react`

**Styles not applying?**

- Restart dev server: `npm run dev`

---

That's it! Start building 🚀
