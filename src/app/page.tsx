import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to SUHBA Union</h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          SUHBA is the union of many darses running under Alathurpadi Dars. We provide a platform for creating beautiful photo frames to capture and share your precious moments.
        </p>
        <Link 
          href="/photoframe" 
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Create Photo Frame
        </Link>
      </div>
    </div>
  );
}
