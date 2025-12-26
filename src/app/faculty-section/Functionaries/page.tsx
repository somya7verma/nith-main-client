"use client";

import { useState } from "react";
import Nav from '@/app/components/header';
import Footer from '@/app/components/footer';

const CATEGORIES = [
  "All Categories",
  "Academics",
  "Student Welfare",
  "Faculty Welfare",
  "Cultural Activities",
  "Technical Activities",
];

type RoleType = "Dean" | "Sub-Dean" | "Associate Dean" | "Coordinator" | "Other";

type Role = {
  id: string;
  category: string;
  roleType: RoleType;
  name: string;
  designation: string;
  email: string;
  facultyId: string;
  since: string;
};

const INITIAL_ROLES: Role[] = [
  {
    id: "1",
    category: "Academics",
    roleType: "Dean",
    name: "Dr. Rohan Mehta",
    designation: "Mechanical Engineering",
    email: "dean.academics@nitth.ac.in",
    facultyId: "FI03",
    since: "Since August 15, 2023",
  },
  {
    id: "2",
    category: "Academics",
    roleType: "Associate Dean",
    name: "Dr. Anjali Sharma",
    designation: "Computer Science Engineering",
    email: "ad.academics@nitth.ac.in",
    facultyId: "FI04",
    since: "Since August 15, 2023",
  },
];

type CategorySectionProps = {
  label: string;
  activeCategory: string;
  roles: Role[];
  onEdit(role: Role): void;
  onDelete(id: string): void;
};

function CategorySection({
  label,
  activeCategory,
  roles,
  onEdit,
  onDelete,
}: CategorySectionProps) {
  const visibleRoles =
    activeCategory === "All Categories"
      ? roles.filter((r) => r.category === label)
      : roles.filter(
          (r) => r.category === activeCategory && r.category === label
        );

  if (visibleRoles.length === 0) return null;

  return (
    <section className="mx-auto mt-6 max-w-6xl overflow-hidden rounded-md">
      <div className="bg-[#7c1717] px-6 py-4 text-white">
        <h2 className="text-[16px] font-semibold">{label}</h2>
        <p className="mt-1 text-[12px] text-[#f0dede]">
          Handles academic planning and faculty coordination
        </p>
      </div>

      <div className="bg-[#f9f7f6] px-6 py-5">
        <div className="grid gap-5 md:grid-cols-2">
          {visibleRoles.map((role) => (
            <article
              key={role.id}
              className="flex h-full flex-col justify-between rounded-md border border-gray-200 bg-white px-4 py-4 shadow-sm"
            >
              <div>
                <span className="inline-flex rounded-full bg-[#f2d9d9] px-3 py-[2px] text-[11px] font-semibold text-[#7c1717]">
                  {role.roleType}
                </span>

                <h3 className="mt-3 text-[15px] font-semibold text-gray-900">
                  {role.name}
                </h3>
                <p className="text-[12px] text-gray-600">
                  {role.designation}
                </p>
              </div>

              <div className="mt-4 space-y-1 text-[12px] text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Email:</span>
                  <a
                    href={`mailto:${role.email}`}
                    className="text-[#7c1717] hover:underline"
                  >
                    {role.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Faculty ID:</span>
                  <span>{role.facultyId}</span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="rounded-md bg-[#f3f3f3] px-3 py-2 text-[11px] text-gray-600">
                  {role.since}
                </div>
                <div className="flex gap-2 text-[11px]">
                  <button
                    onClick={() => onEdit(role)}
                    className="rounded border border-gray-300 px-2 py-1 text-gray-700 hover:bg-gray-100"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(role.id)}
                    className="rounded border border-red-200 px-2 py-1 text-red-700 hover:bg-red-50"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function FacultyRolesPage() {
  const [activeCategory, setActiveCategory] =
    useState<string>("All Categories");
  const [roles, setRoles] = useState<Role[]>(INITIAL_ROLES);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState<Omit<Role, "id">>({
    category: "Academics",
    roleType: "Dean",
    name: "",
    designation: "",
    email: "",
    facultyId: "",
    since: "Since ",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function resetForm() {
    setForm({
      category:
        activeCategory === "All Categories" ? "Academics" : activeCategory,
      roleType: "Dean",
      name: "",
      designation: "",
      email: "",
      facultyId: "",
      since: "Since ",
    });
    setEditingId(null);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (editingId) {
      setRoles((prev) =>
        prev.map((r) => (r.id === editingId ? { ...r, ...form } : r))
      );
    } else {
      const newRole: Role = { id: crypto.randomUUID(), ...form };
      setRoles((prev) => [...prev, newRole]);
    }

    resetForm();
    setShowForm(false);
  }

  function handleEdit(role: Role) {
    setEditingId(role.id);
    setForm({
      category: role.category,
      roleType: role.roleType,
      name: role.name,
      designation: role.designation,
      email: role.email,
      facultyId: role.facultyId,
      since: role.since,
    });
    setShowForm(true);
  }

  function handleDelete(id: string) {
    setRoles((prev) => prev.filter((r) => r.id !== id));
    if (editingId === id) {
      resetForm();
      setShowForm(false);
    }
  }

  return (
    <>
      <Nav />
      
      <main className="min-h-screen bg-[#f4f2f1] px-8 py-10 text-[13px] text-gray-800">
        <header className="mx-auto mb-6 max-w-6xl text-center">
          <h1 className="text-[26px] font-semibold tracking-[0.18em] text-[#6b1a1a]">
            FACULTY ROLE ASSIGNMENTS
          </h1>
          <p className="mt-2 text-[12px] text-gray-600">
            Dedicated faculty members serving in various administrative and functional roles across the institute.
          </p>
        </header>

        <section className="mx-auto mb-8 max-w-6xl rounded-md bg-white px-6 py-4 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-[13px] font-semibold text-gray-800">
              Filter by Category
            </span>
            <button
              onClick={() => {
                if (!showForm) resetForm();
                setShowForm((prev) => !prev);
              }}
              className="flex items-center gap-1 rounded-md bg-[#7c1717] px-3 py-[6px] text-[11px] font-medium text-white"
            >
              <span>{showForm ? "Close" : "Add new"}</span>
              <span className="text-[15px] leading-none">
                {showForm ? "−" : "+"}
              </span>
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const active = cat === activeCategory;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={[
                    "rounded-md border px-4 py-1 text-[12px] font-medium transition",
                    active
                      ? "border-[#7c1717] bg-[#7c1717] text-white"
                      : "border-gray-200 bg-[#f9f7f6] text-gray-700 hover:bg-gray-100",
                  ].join(" ")}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </section>

        <CategorySection
          label="Academics"
          activeCategory={activeCategory}
          roles={roles}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        <CategorySection
          label="Student Welfare"
          activeCategory={activeCategory}
          roles={roles}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        <CategorySection
          label="Faculty Welfare"
          activeCategory={activeCategory}
          roles={roles}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        <CategorySection
          label="Cultural Activities"
          activeCategory={activeCategory}
          roles={roles}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        <CategorySection
          label="Technical Activities"
          activeCategory={activeCategory}
          roles={roles}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        {showForm && (
          <section
            id="role-form"
            className="mx-auto mt-8 max-w-6xl rounded-md bg-white px-6 py-5 shadow-sm"
          >
            <h3 className="mb-3 text-[14px] font-semibold text-gray-800">
              {editingId ? "Edit faculty member" : "Add new faculty member"}
            </h3>

            <form
              onSubmit={handleSubmit}
              className="grid gap-4 md:grid-cols-2 md:gap-6"
            >
              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-medium">Category</label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="rounded border border-gray-300 px-3 py-2 text-[12px]"
                >
                  {CATEGORIES.filter((c) => c !== "All Categories").map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-medium">Role type</label>
                <select
                  name="roleType"
                  value={form.roleType}
                  onChange={handleChange}
                  className="rounded border border-gray-300 px-3 py-2 text-[12px]"
                >
                  <option>Dean</option>
                  <option>Sub-Dean</option>
                  <option>Associate Dean</option>
                  <option>Coordinator</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-medium">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="rounded border border-gray-300 px-3 py-2 text-[12px]"
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-medium">
                  Department / designation
                </label>
                <input
                  name="designation"
                  value={form.designation}
                  onChange={handleChange}
                  className="rounded border border-gray-300 px-3 py-2 text-[12px]"
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="rounded border border-gray-300 px-3 py-2 text-[12px]"
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-medium">Faculty ID</label>
                <input
                  name="facultyId"
                  value={form.facultyId}
                  onChange={handleChange}
                  className="rounded border border-gray-300 px-3 py-2 text-[12px]"
                  required
                />
              </div>

              <div className="flex flex-col gap-1 md:col-span-2">
                <label className="text-[12px] font-medium">Since</label>
                <input
                  name="since"
                  value={form.since}
                  onChange={handleChange}
                  className="rounded border border-gray-300 px-3 py-2 text-[12px]"
                />
              </div>

              <div className="mt-3 flex gap-3 md:col-span-2">
                <button
                  type="submit"
                  className="rounded-md bg-[#7c1717] px-4 py-2 text-[12px] font-medium text-white"
                >
                  {editingId ? "Save changes" : "Add member"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    resetForm();
                    setShowForm(false);
                  }}
                  className="rounded-md border border-gray-300 px-4 py-2 text-[12px] text-gray-700"
                >
                  Cancel
                </button>
              </div>
            </form>
          </section>
        )}
      </main>
      
      <Footer />
    </>
  );
}
