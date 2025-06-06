const Pagination = () => {
  return (
<nav className="flex items-center gap-x-1 py-2 px-5 bg-white rounded-[40px]" aria-label="Pagination">
<button type="button" className="min-h-9.5 min-w-9.5 py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" aria-label="Previous">
  <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6"></path>
  </svg>
  <span className="sr-only">Previous</span>
</button>
<div className="flex items-center gap-x-1">
  <button type="button" className="min-h-9.5 min-w-9.5 flex justify-center items-center text-primary py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" aria-current="page">1</button>
  <button type="button" className="min-h-9.5 min-w-9.5 flex justify-center items-center border border-transparent text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">2</button>
  <button type="button" className="min-h-9.5 min-w-9.5 flex justify-center items-center border border-transparent text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">3</button>
  <button type="button" className="min-h-9.5 min-w-9.5 flex justify-center items-center border border-transparent text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">4</button>
  <button type="button" className="min-h-9.5 min-w-9.5 flex justify-center items-center border border-transparent text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">5</button>
  <button type="button" className="min-h-9.5 min-w-9.5 flex justify-center items-center border border-transparent text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">...</button>
</div>
<button type="button" className="min-h-9.5 min-w-9.5 py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" aria-label="Next">
  <span className="sr-only">Next</span>
  <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6"></path>
  </svg>
</button>
</nav>
  )
}

export default Pagination;