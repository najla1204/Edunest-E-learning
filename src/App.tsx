import { BookOpen, GraduationCap, Users, Star, ChevronRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="flex items-center gap-2 text-indigo-900">
          <GraduationCap size={32} />
          <span className="text-2xl font-serif font-bold tracking-tight">EduNest</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-slate-600 font-medium">
          <a href="#" className="hover:text-indigo-700 transition-colors">Courses</a>
          <a href="#" className="hover:text-indigo-700 transition-colors">Categories</a>
          <a href="#" className="hover:text-indigo-700 transition-colors">My Learning</a>
        </div>
        {/* FLAW 6: "Login" button is massively more prominent than the primary CTA */}
        <button className="bg-indigo-700 text-white font-extrabold px-8 py-3 rounded-md shadow-xl hover:bg-indigo-800 transition-all transform hover:scale-105 text-lg border-4 border-indigo-900">
          LOGIN NOW
        </button>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center py-24 px-4 bg-white">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 max-w-3xl leading-tight">
          Cultivate Your Mind with <span className="text-indigo-700">World-Class</span> Education
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mt-6 max-w-2xl">
          Join thousands of ambitious learners. Access premium courses taught by industry leaders and academic experts.
        </p>
        
        {/* FLAW 1: "Start Learning" button is placed awkwardly far away from the text */}
        <div className="mt-40">
          <button className="px-6 py-2 border border-slate-300 text-slate-500 rounded hover:bg-slate-100 transition-colors flex items-center gap-2">
            Start Learning <ChevronRight size={16} />
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-16">
        
        {/* FLAW 5: Categories section placed BEFORE Featured Courses (illogical flow) */}
        <section className="mb-24">
          {/* FLAW 7: Inconsistent font sizes (Heading is smaller than subheading) */}
          <h2 className="text-lg font-serif font-bold text-slate-800 mb-2">Explore By Topic</h2>
          <p className="text-3xl text-slate-500 mb-8">Find the perfect category for your career goals.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Computer Science', 'Business & Management', 'Arts & Humanities', 'Data Science'].map((cat, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer group">
                <BookOpen className="text-indigo-400 mb-4 group-hover:text-indigo-600" size={24} />
                <h3 className="font-semibold text-slate-800">{cat}</h3>
                <p className="text-sm text-slate-500 mt-1">120+ courses</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Courses Section */}
        <section className="mb-24">
          {/* FLAW 7: Inconsistent font sizes (Massive heading compared to others) */}
          <h2 className="text-6xl font-serif font-bold text-slate-900 mb-4">Featured Courses</h2>
          <p className="text-sm text-slate-600 mb-12">Hand-picked selections from our top instructors.</p>
          
          {/* FLAW 3: Inconsistent spacing between cards (using flex with random margins instead of gap) */}
          <div className="flex flex-wrap items-start justify-center">
            
            {/* FLAW 2: Inconsistent size and alignment */}
            <div className="w-72 min-h-[300px] bg-white border border-slate-200 p-4 m-2 shadow-sm rounded-lg flex flex-col">
              <div className="h-32 bg-slate-200 rounded-md mb-4 w-full"></div>
              <h3 className="text-xl font-bold text-slate-800 leading-tight">Advanced Machine Learning Algorithms</h3>
              <p className="text-slate-600 mt-2 text-sm">Dr. Alan Turing</p>
              <div className="mt-auto pt-4">
                {/* FLAW 4: Ratings are barely visible */}
                <span className="text-[10px] text-slate-200 font-light flex items-center gap-1">
                  <Star size={8} className="fill-slate-200" /> 4.9 (2,104 reviews)
                </span>
              </div>
            </div>

            {/* FLAW 2 & 3: Different width, height, padding, margin, and border radius */}
            <div className="w-80 min-h-[280px] bg-white border border-slate-200 p-6 m-8 shadow-md rounded-sm mt-12 flex flex-col">
              <div className="h-36 bg-slate-200 rounded-sm mb-3 w-full"></div>
              <h3 className="text-2xl font-bold text-slate-800 leading-tight">The Art of Public Speaking</h3>
              <p className="text-slate-600 mt-1 text-base">Prof. Sarah Jenkins</p>
              <div className="mt-auto pt-2">
                {/* FLAW 4: Ratings are barely visible */}
                <span className="text-[9px] text-slate-300 font-thin flex items-center gap-1">
                  <Star size={8} className="fill-slate-300" /> 4.7 (842 reviews)
                </span>
              </div>
            </div>

            {/* FLAW 2 & 3: Different width, height, padding, margin, and border radius */}
            <div className="w-64 min-h-[340px] bg-white border border-slate-200 p-3 m-1 shadow-lg rounded-2xl flex flex-col">
              <div className="h-28 bg-slate-200 rounded-xl mb-5 w-full"></div>
              <h3 className="text-lg font-bold text-slate-800 leading-tight">Introduction to Microeconomics</h3>
              <p className="text-slate-600 mt-3 text-xs">John Maynard</p>
              <div className="mt-auto pt-6">
                {/* FLAW 4: Ratings are barely visible */}
                <span className="text-[11px] text-slate-200 font-light flex items-center gap-1">
                  <Star size={8} className="fill-slate-200" /> 4.8 (1,530 reviews)
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16 bg-indigo-900 text-white p-12 rounded-2xl">
          {/* FLAW 7: Inconsistent font sizes */}
          <h2 className="text-2xl font-serif font-bold mb-8 text-center">What Our Students Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Emily R.", text: "EduNest completely transformed my career trajectory. The courses are rigorous and rewarding." },
              { name: "Michael T.", text: "The instructors here are unparalleled. I've learned more in 3 months than in my entire undergrad." },
              { name: "Sophia L.", text: "A truly academic experience brought to the digital world. Highly recommended for serious learners." }
            ].map((testimonial, i) => (
              <div key={i} className="bg-indigo-800/50 p-6 rounded-xl border border-indigo-700">
                <p className="italic text-indigo-100 mb-4">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                    <Users size={20} className="text-indigo-200" />
                  </div>
                  <span className="font-semibold">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 text-white mb-4">
              <GraduationCap size={24} />
              <span className="text-xl font-serif font-bold">EduNest</span>
            </div>
            <p className="text-sm">Empowering minds through accessible, world-class education.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Browse Courses</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Enterprise</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-sm text-center">
          &copy; {new Date().getFullYear()} EduNest Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
