export default function Header() {
  return (
    <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        <a href="/" className="flex items-center gap-2">
          <img className="h-[45px]" src="/react.svg" alt="jihad" />
          <p className="text-2xl italic text-[#F5BF42]">Tasker</p>
        </a>
      </div>
    </nav>
  );
}
