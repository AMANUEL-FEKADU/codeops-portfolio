export default function Footer() {
  return (
    <footer className="mt-16 border-t border-amber-900/15 bg-[#2a100b] text-[#f6ead7]">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>Addis Eats · Bole & Kazanchis kitchens · TeleBirr welcome</p>
        <p>&copy; {new Date().getFullYear()} Addis Eats. Injera in every box.</p>
      </div>
    </footer>
  );
}
