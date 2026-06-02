export default function Home() {
  const services = [
    'Google Business Profile Optimization',
    'Review Generation Systems',
    'QR Code Review Cards',
    'Lead Generation Websites',
    'Newsletter Setup',
    'Email Marketing',
    'Video Interviews',
    'Local Storytelling',
    'Search Visibility',
    'Community Promotion'
  ]

  const portfolioExamples = [
    { title: 'Local Business Website', desc: 'Professional sites for shops, services, and local retail' },
    { title: 'Restaurant Website', desc: 'Menu, ordering, reservations, and local discovery' },
    { title: 'Contractor Website', desc: 'Portfolio, services, leads, and booking' },
    { title: 'Tourism Website', desc: 'Destination marketing for trails, attractions, lodging' },
    { title: 'Event Website', desc: 'Registration, promotion, and community engagement' },
    { title: 'Nonprofit Website', desc: 'Mission, programs, donations, and volunteer signup' },
    { title: 'Recreation Organization', desc: 'Memberships, schedules, bookings, and community' },
    { title: 'Community Newsletter', desc: 'Email list building, content delivery, audience ownership' }
  ]

  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Build Your Audience Before You Need It
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Websites. Google Visibility. Reviews. Newsletters. Local Content.
            <br />
            Helping businesses across Houlton, Littleton, Hodgdon, and Southern Aroostook turn visibility into customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">Free Visibility Check</button>
            <button className="btn-secondary">See What We Build</button>
          </div>
        </div>
      </section>

      {/* JUNE PROMO */}
      <section className="bg-blue-50 py-8 border-t-4 border-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-2xl font-bold text-blue-900 mb-2">🎥 FREE 1-Hour Business Interview</p>
          <p className="text-gray-700">Available in Houlton, Littleton, and Hodgdon during June. We'll visit your business, film your story, and help create content you can use across your website, social media, Google profile, and newsletters. Limited availability.</p>
        </div>
      </section>

      {/* MORE THAN A WEBSITE */}
      <section id="visibility" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">More Than A Website</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Most businesses don't need another website. They need a visibility system.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition">
                <p className="font-semibold text-gray-900">✓ {service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO SHOWCASE */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Portfolio Showcase</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioExamples.map((item, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                <div className="bg-gradient-to-br from-gray-300 to-gray-400 h-40 flex items-center justify-center">
                  <span className="text-gray-500 font-semibold">Screenshot</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                  <button className="text-blue-600 font-semibold hover:text-blue-700">View Example →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOUTHERN AROOSTOOK */}
      <section id="aroostook" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Built For Rural Businesses</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Big-city agencies don't understand rural communities.
            <br /><br />
            We do.
            <br /><br />
            We live here. We work here. We shop here.
            <br /><br />
            We help local businesses compete online without needing a huge marketing budget.
          </p>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Own Your Audience</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Social media followers can disappear overnight.
            <br />
            Email subscribers belong to you.
            <br />
            We help businesses start and grow email lists that keep customers informed and coming back.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="cta" className="py-24 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-6">People Are Already Searching.</h2>
          <p className="text-3xl font-semibold text-gray-300 mb-8">The Question Is: Will They Find You?</p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition">
            Request Your Visibility Check
          </button>
        </div>
      </section>
    </>
  )
}
