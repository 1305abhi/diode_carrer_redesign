import React, { useState, useEffect } from 'react';
import { 
  Search, 
  MapPin, 
  Globe, 
  Users, 
  Lightbulb, 
  ShieldCheck, 
  GraduationCap, 
  ChevronRight, 
  PlayCircle, 
  ArrowRight,
  Heart,
  TrendingUp,
  Clock,
  BookOpen,
  Coffee,
  Plane,
  Building2
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const variants = {
      primary: 'bg-[#00529B] text-white hover:bg-[#003d74]',
      secondary: 'bg-white text-[#00529B] border-2 border-[#00529B] hover:bg-blue-50',
      outline: 'bg-transparent border border-gray-300 hover:border-[#00529B] text-gray-700 font-semibold',
    };
    return (
      <button 
        className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  };

  const Nav = () => (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <div className="text-[#00529B] font-bold text-2xl tracking-tighter flex items-center">
            DIODES <span className="text-gray-400 font-light ml-2">INCORPORATED</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
            {['Products', 'Applications', 'Design', 'Quality', 'About'].map(item => (
              <a key={item} href="#" className="hover:text-[#00529B]">{item}</a>
            ))}
          </div>
        </div>
        <div className="flex gap-4">
          <button onClick={() => setActiveTab('home')} className={`text-sm font-bold transition-colors ${activeTab === 'home' ? 'text-[#00529B]' : 'text-gray-400 hover:text-gray-600'}`}>General</button>
          <button onClick={() => setActiveTab('internships')} className={`text-sm font-bold transition-colors ${activeTab === 'internships' ? 'text-[#00529B]' : 'text-gray-400 hover:text-gray-600'}`}>Students</button>
          <button onClick={() => setActiveTab('shanghai')} className={`text-sm font-bold transition-colors ${activeTab === 'shanghai' ? 'text-[#00529B]' : 'text-gray-400 hover:text-gray-600'}`}>Shanghai Site</button>
        </div>
      </div>
    </nav>
  );

  const HomePage = () => (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[650px] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070" 
            className="w-full h-full object-cover" 
            alt="Engineer at work" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <span className="text-[#00529B] font-bold tracking-widest uppercase text-sm mb-4 block">Careers at Diodes</span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Advance your career. <br/>
              <span className="text-[#00529B]">Improve the world.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We partner with the world's leading companies to create products that make an impact. Join our global network of innovators.
            </p>
            
            <div className="bg-white p-2 rounded-xl shadow-2xl flex flex-col md:flex-row gap-2 max-w-lg">
              <div className="flex-1 flex items-center px-4 gap-2 border-r border-gray-100">
                <MapPin size={20} className="text-gray-400" />
                <select className="w-full py-2 bg-transparent outline-none text-gray-700">
                  <option>All Locations</option>
                  <option>Shanghai, China</option>
                  <option>Milpitas, USA</option>
                  <option>Taipei, Taiwan</option>
                </select>
              </div>
              <Button className="w-full md:w-auto">Search Opportunities</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <div className="h-1.5 w-20 bg-[#00529B] mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Integrity", desc: "We act with honesty, respect, and transparency, representing our company ethically in every interaction." },
              { icon: Users, title: "Commitment", desc: "We promote a culture that fosters collaboration, builds trust, and empowers every individual to succeed." },
              { icon: Lightbulb, title: "Innovation", desc: "We design and manufacture exceptional products powered by technical expertise and shape the future." }
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="w-14 h-14 bg-blue-50 text-[#00529B] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <value.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Dedicated CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 md:p-16 rounded-[40px] border border-blue-100 flex flex-col md:flex-row items-center gap-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -mr-48 -mt-48" />
            
            <div className="md:w-3/5 relative z-10">
              <div className="flex items-center gap-2 text-[#00529B] font-bold mb-6">
                <GraduationCap size={28} />
                <span className="uppercase tracking-widest text-sm">Student & Early Career Programs</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Launch your future with <span className="text-[#00529B]">Diodes Internships</span>
              </h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-xl">
                Gain hands-on experience, professional mentorship, and global networking opportunities. We are looking for talented students to help us shape the next generation of analog and power solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://www.diodes.com/about/careers/internships-and-apprenticeships" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#00529B] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#003d74] transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/10 scale-100 hover:scale-[1.02] active:scale-95"
                >
                  Apply for Internships <ArrowRight size={20} />
                </a>
                <Button variant="outline" onClick={() => setActiveTab('internships')}>
                  Explore Program Details
                </Button>
              </div>
            </div>
            
            <div className="md:w-2/5 grid grid-cols-2 gap-4 relative z-10">
               <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400" className="rounded-2xl h-56 w-full object-cover shadow-lg border-4 border-white" alt="Students collaborating" />
               <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400" className="rounded-2xl h-56 w-full object-cover shadow-lg border-4 border-white mt-8" alt="Mentorship" />
            </div>
          </div>
        </div>
      </section>

      {/* General CTA Section */}
      <section className="py-20 bg-[#00529B] text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">Ready to shape the future?</h2>
            <p className="text-blue-100 text-lg">Explore our global opportunities and find your place at Diodes.</p>
          </div>
          <div className="flex gap-4">
            <Button className="bg-white text-[#00529B] hover:bg-blue-50">Experienced Hires</Button>
            <Button className="bg-white/10 hover:bg-white/20 border-white/30 border">Global Sites</Button>
          </div>
        </div>
      </section>
    </div>
  );

  const InternshipPage = () => (
    <div className="pt-32 pb-24 animate-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Accelerate Your Transition. <br/><span className="text-[#00529B]">Start Your Career.</span></h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Through immersive learning and real-world experience, we empower you to thrive in the dynamic semiconductor industry. 
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="font-bold text-[#00529B] text-2xl">35+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider font-semibold">Global Sites</div>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="font-bold text-[#00529B] text-2xl">100%</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider font-semibold">Mentorship</div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-3 gap-2 rounded-2xl overflow-hidden">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <img key={i} src={`https://i.pravatar.cc/300?img=${i+10}`} className="w-full h-32 object-cover" />
            ))}
          </div>
        </div>

        {/* Global Application Portal CTA */}
        <div className="mb-24 bg-slate-900 text-white p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
                    <Globe size={32} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-1">Global Application Portal</h3>
                    <p className="text-gray-400">Apply for internships across Americas, China, Europe, and Taiwan.</p>
                </div>
            </div>
            <a 
                href="https://www.diodes.com/about/careers/internships-and-apprenticeships" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center gap-2 whitespace-nowrap"
            >
                Start Your Application <ArrowRight size={20} />
            </a>
        </div>

        {/* Region Selectors */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold text-center mb-10">Select Your Region to Apply</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {['Americas', 'China', 'Europe', 'Taiwan'].map(region => (
              <button key={region} className="group p-6 border-2 border-gray-100 rounded-2xl hover:border-[#00529B] hover:shadow-lg transition-all text-left">
                <Globe className="text-[#00529B] mb-4 group-hover:animate-pulse" size={32} />
                <div className="font-bold text-lg mb-1">{region}</div>
                <div className="text-sm text-gray-500 flex items-center gap-1 group-hover:text-[#00529B]">
                  View Openings <ChevronRight size={14} />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Video Gallery */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold mb-8">Hear from our Interns</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { loc: "Milpitas, USA", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" },
              { loc: "Taiwan (English)", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" },
              { loc: "Taiwan (Chinese)", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" }
            ].map((v, i) => (
              <div key={i} className="relative group cursor-pointer overflow-hidden rounded-2xl">
                <img src={v.img} className="w-full aspect-video object-cover transition-transform group-hover:scale-105 duration-500" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayCircle size={64} className="text-white" />
                </div>
                <div className="absolute bottom-4 left-4 text-white font-bold">{v.loc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "The Diodes Experience", tag: "Interview", icon: BookOpen },
            { title: "Adding Value as an Intern", tag: "Growth", icon: TrendingUp },
            { title: "Early Career Journeys", tag: "Stories", icon: Heart }
          ].map((blog, i) => (
            <div key={i} className="flex flex-col h-full bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center text-[#00529B]">
                <blog.icon size={48} />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-bold text-[#00529B] uppercase tracking-tighter mb-2">{blog.tag}</span>
                <h3 className="text-xl font-bold mb-4">{blog.title}</h3>
                <p className="text-gray-600 text-sm mb-6 flex-1">Discover how our interns are making real impacts from day one...</p>
                <Button variant="outline" className="text-sm">Read More</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ShanghaiPage = () => (
    <div className="pt-32 pb-24 animate-in slide-in-from-right-4 duration-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-start mb-24">
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-[#00529B] px-4 py-1 rounded-full text-sm font-bold mb-6">
              <MapPin size={16} /> Featured Location
            </div>
            <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Shanghai, China <br/><span className="text-gray-400 font-medium">Assembly & Testing</span></h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Established in 1994, Diodes Shanghai is a critical pillar of our global manufacturing presence. Our SAT sites focus on surface mount device (SMD) manufacturing and semiconductor packaging.
            </p>
            <div className="flex gap-4">
              <Button>View Openings in Shanghai</Button>
              <Button variant="outline">Site Details</Button>
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1555505019-8c3f4c19e309?auto=format&fit=crop&q=80&w=800" className="rounded-2xl h-64 w-full object-cover shadow-lg" alt="Shanghai office" />
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" className="rounded-2xl h-64 w-full object-cover shadow-lg mt-8" alt="Team meeting" />
          </div>
        </div>

        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-12 md:p-20 bg-[#00529B] text-white">
              <h2 className="text-4xl font-bold mb-12">Site Benefits</h2>
              <div className="grid gap-10">
                {[
                  { icon: Heart, title: "Health & Wellness", desc: "Comprehensive group medical insurance and annual health screenings for all employees." },
                  { icon: Clock, title: "Balanced Time Off", desc: "Generous leave policies including marriage, funeral, and childcare leave." },
                  { icon: GraduationCap, title: "Pro-Development", desc: "Extensive training programs and support for continued higher education." }
                ].map((b, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <b.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{b.title}</h3>
                      <p className="text-blue-100/80 text-sm leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-12 md:p-20">
              <h2 className="text-4xl font-bold mb-12 text-gray-900">Site Services</h2>
              <div className="grid gap-8">
                {[
                  { icon: Coffee, title: "Subsidized Canteen", desc: "Healthy, high-quality meals available on-site for all staff members." },
                  { icon: Plane, title: "Shuttle Bus Service", desc: "Convenient transportation routes across the city for easy commuting." },
                  { icon: Building2, title: "Sports & Recreation", desc: "Dedicated spaces for wellness, fitness, and team-building activities." }
                ].map((s, i) => (
                  <div key={i} className="flex gap-6 items-center p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                    <div className="shrink-0 w-14 h-14 bg-blue-50 text-[#00529B] rounded-2xl flex items-center justify-center">
                      <s.icon size={28} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{s.title}</h3>
                      <p className="text-gray-500 text-sm">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-[#00529B]">
      <Nav />
      
      <main>
        {activeTab === 'home' && <HomePage />}
        {activeTab === 'internships' && <InternshipPage />}
        {activeTab === 'shanghai' && <ShanghaiPage />}
      </main>

      <footer className="bg-gray-900 text-white py-16 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="text-2xl font-bold mb-6">DIODES</div>
              <p className="text-gray-400 max-w-sm mb-6">
                Leading the world in semiconductor solutions for the consumer electronics, computing, communications, industrial, and automotive markets.
              </p>
              <div className="flex gap-4">
                {[1,2,3,4].map(i => <div key={i} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00529B] transition-colors cursor-pointer"><ArrowRight size={18}/></div>)}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li>Sustainability</li>
                <li>Investor Relations</li>
                <li>News & Events</li>
                <li>Technical Support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Global Sites</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li>Plano, Texas (HQ)</li>
                <li>Milpitas, California</li>
                <li>Shanghai, China</li>
                <li>Taipei, Taiwan</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 text-xs text-gray-500 flex flex-col md:flex-row justify-between gap-4">
            <div>© 2026 Diodes Incorporated. All rights reserved.</div>
            <div className="flex gap-6">
              <span>Privacy Policy</span>
              <span>Terms of Use</span>
              <span>Cookies</span>
              <span>Accessibility</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;