export default function HomePage() {
  return ( 
    <main className="min-h-screen flex items-center justify-center bg-gray-950">

      <div className="w-full max-w-lg bg-gray-900 border border-gray-900 rounded-2xl p-10 shadow-2x1 p-10 shadow-2x1">

      <h1 className="text-3x1 font-bold text-white mb-3">
        Nj CRM
      </h1>

      <p className="text-gray-300 text-base mb-6">
        A modern CRM platform for small businesses - built with clean architecture, API-first design, and robust domain modeling.
      </p>

      <p className="text-gray-400 text-sm leading-relaxed">
          Manage organizations, customers, activities, and appointments with a scalable architecture that follows best engineering practices and production-grade design.
        </p>

      </div>
      
    </main>
  );
}