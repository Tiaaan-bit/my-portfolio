export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 px-5 dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl py-8 text-center">
        <p className="text-sm text-neutral-500">Tiaaan. </p>
        <p className="text-sm text-neutral-500">
          © {new Date().getFullYear()} Christian. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
