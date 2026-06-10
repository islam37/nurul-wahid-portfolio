import React, { useMemo, useState } from 'react'
import data from '../../data/portfolio.json'

export default function Portfolio() {
  const { categories = [], items = [] } = data || {}
  const [category, setCategory] = useState('All')

  const filtered = useMemo(() => {
    if (!category || category === 'All') return items
    return items.filter((it) => it.category === category)
  }, [category, items])

  return (
    <section id="portfolio" className="section-shell bg-navy">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <span className="text-gold text-xs sm:text-sm font-bold tracking-[0.22em] uppercase">Selected Work</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-white mt-4 text-balance">
            Portfolio
          </h2>
        </div>

        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`shrink-0 rounded-lg border px-4 py-2 text-sm font-semibold transition-colors ${
                category === cat
                  ? 'bg-gold text-navy border-gold shadow-lg shadow-gold/15'
                  : 'bg-white/[0.03] text-white/80 border-white/15 hover:border-gold/60 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
          {filtered.map((item) => (
            <article key={item.id} className="premium-card group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-gold/60">
              <a href={item.videoUrl} target="_blank" rel="noreferrer" className="block h-full">
                <div className="aspect-video overflow-hidden bg-charcoal">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-md bg-gold/10 px-2.5 py-1 text-xs font-semibold text-gold">{item.category}</span>
                    <span className="text-xs text-white/50">{item.year}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white leading-snug">{item.title}</h3>
                  <p className="text-sm text-white/70 mt-2 leading-relaxed">{item.description}</p>
                  <div className="mt-4 text-xs text-white/60 flex flex-col sm:flex-row sm:justify-between gap-1">
                    <span>{item.channel}</span>
                    <span>{item.duration}</span>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
