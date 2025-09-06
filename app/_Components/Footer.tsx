import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 gap-10 md:grid-cols-3">
       
        <div>
          <div className="flex items-center gap-2">
            <div className="size-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
            <h2 className="text-lg font-bold text-white md:text-xl">
              AI Expense Tracker
            </h2>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-neutral-400">
            Track your expenses effortlessly with the power of AI. 
            Get smart insights, manage your finances, and make better decisions.
          </p>
        </div>

       
        <div>
          <h3 className="mb-4 text-base font-semibold text-white">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

      
        <div>
          <h3 className="mb-4 text-base font-semibold text-white">Features</h3>
          <ul className="space-y-2 text-sm">
            <li>AI-powered insights</li>
            <li>Smart expense tracking</li>
            <li>Intuitive dashboard</li>
            <li>Detailed reports</li>
          </ul>
        </div>
      </div>

      
      <div className="border-t border-neutral-800 py-4 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} AI Expense Tracker. All rights reserved.
      </div>
    </footer>
  );
};
