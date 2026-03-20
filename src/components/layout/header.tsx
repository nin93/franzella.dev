import Nav from "@/components/models/nav";

export default function Header() {
  return (
    <header
      className={`bg-deep-black sticky top-0 z-10 flex w-full justify-between py-6 text-sm md:text-base`}
    >
      <Nav />

      {/* <ThemeToggler /> */}
    </header>
  );
}
