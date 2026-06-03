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
    <section id="portfolio" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Portfolio</h2>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full border transition-colors text-sm ${
                category === cat
                  ? 'bg-yellow-400 text-black border-yellow-400'
                  : 'bg-transparent text-white border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <article key={item.id} className="bg-white/5 rounded-lg overflow-hidden">
              <a href={item.videoUrl} target="_blank" rel="noreferrer" className="block">
                <img src={item.thumbnail} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-white/70 mt-1">{item.description}</p>
                  <div className="mt-3 text-xs text-white/60 flex justify-between">
                    <span>{item.channel}</span>
                    <span>{item.year} • {item.duration}</span>
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