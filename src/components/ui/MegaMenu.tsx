export default function MegaMenu({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute left-1/2 top-full w-[700px] -translate-x-1/2 rounded-3xl border border-zinc-800 bg-(--background) p-8 shadow-2xl grid grid-cols-2 gap-10">
      {children}
    </div>
  );
}
