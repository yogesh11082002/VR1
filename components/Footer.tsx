export default function Footer() {
  return (
    <footer className="mt-16 border-t">
      <div className="container py-8 text-sm text-slate-600 flex flex-col md:flex-row gap-2 items-center justify-between">
        <p>© {new Date().getFullYear()} VR1. All rights reserved.</p>
        <p>Delhi NCR • India</p>
      </div>
    </footer>
  );
}
