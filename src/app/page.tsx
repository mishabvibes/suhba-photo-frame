import Image from "next/image";
import Link from "next/link";
import { 
  Users, 
  Camera,
  ChevronRight, 
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Decorative patterns */}
        {/* <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('/pattern.svg')] bg-repeat opacity-20"></div>
        </div> */}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
              <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-1 rounded-full text-sm font-medium">
                Running Under SUFFA Dars Coordination
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="block text-emerald-600">SUHBA</span>
                Dars Students' Union
              </h1>
              
              <p className="text-lg text-gray-600 max-w-2xl">
              SUHBA is a students' union under SUFFA Dars Coordination, shaping scholars 
              for modern challenges through traditional knowledge and visionary goals.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link 
                  href="/photoframe" 
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-all flex items-center gap-2 shadow-lg shadow-emerald-200"
                >
                  <Camera size={18} />
                  Join Campaign
                </Link>
                <Link 
                  href="https://darshanammagazine.com/" 
                  className="px-6 py-3 bg-white hover:bg-gray-50 text-emerald-600 font-medium rounded-lg border-2 border-emerald-600 transition-all flex items-center gap-2"
                >
                  Online Magazine
                  <ChevronRight size={18} />
                </Link>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 relative">
              <div className="relative h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl transform md:rotate-2 transition-all hover:rotate-0 duration-500">
                <Image 
                  src="/islamic-students.jpg" 
                  alt="SUHBA Islamic Students" 
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-900/80 to-transparent p-6">
                  <p className="text-white text-lg font-medium text-start md:text-end">Connecting hearts, minds & souls</p>
                </div>
              </div>
              
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-5 max-w-xs hidden md:block">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Users className="text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">600+</h3>
                    <p className="text-gray-600">Active members worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}