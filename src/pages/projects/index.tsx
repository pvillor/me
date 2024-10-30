export function Projects() {
  return (
    <div className="px-4 pt-16 md:px-28 lg:px-60 lg:pt-0 h-screen flex flex-col md:justify-center items-center gap-2">
      <a
        href="https://github.com/pvillor/fast-feet"
        className="w-full p-3 flex justify-between items-center gap-3 rounded-md hover:bg-zinc-800/60 max-w-3xl"
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex gap-2">
          <h2 className="text-sm font-semibold">Fast Feet</h2>
          <h3 className="hidden md:block text-sm text-zinc-400">
            API for managing shipments
          </h3>
        </div>
        <div className="flex-1 h-px bg-zinc-800" />
        <span className="text-zinc-500 text-sm">outubro 2024</span>
      </a>

      <a
        href="https://github.com/pvillor/finda-friend"
        className="w-full p-3 flex justify-between items-center gap-3 rounded-md hover:bg-zinc-800/60 max-w-3xl"
        target="_blank"
        rel="noreferrer"
      >
        <h2 className="text-sm font-semibold">Find A Friend</h2>
        <h3 className="hidden md:block text-sm text-zinc-400">
          Connects users with adoptable pets
        </h3>
        <div className="flex-1 h-px bg-zinc-800" />
        <span className="text-zinc-500 text-sm">outubro 2024</span>
      </a>

      <a
        href="https://book-wise-villo.vercel.app"
        className="w-full p-3 flex justify-between items-center gap-3 rounded-md hover:bg-zinc-800/60 max-w-3xl"
        target="_blank"
        rel="noreferrer"
      >
        <h2 className="text-sm font-semibold">Book Wise</h2>
        <h3 className="hidden md:block text-sm text-zinc-400">
          App for tracking and rating books
        </h3>
        <div className="flex-1 h-px bg-zinc-800" />
        <span className="text-zinc-500 text-sm">setembro 2024</span>
      </a>

      <a
        href="https://github.com/pvillor/next-saas-rbac"
        className="w-full p-3 flex justify-between items-center gap-3 rounded-md hover:bg-zinc-800/60 max-w-3xl"
        target="_blank"
        rel="noreferrer"
      >
        <h2 className="text-sm font-semibold">Next SaaS RBAC</h2>
        <h3 className="hidden md:block text-sm text-zinc-400">
          Multi-tenant SaaS with role-based access
        </h3>
        <div className="flex-1 h-px bg-zinc-800" />
        <span className="text-zinc-500 text-sm">setembro 2024</span>
      </a>
    </div>
  )
}
