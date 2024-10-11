import Link from "next/link";

export default function TopMenuItem({
  title,
  pageRef,
}: {
  title: string;
  pageRef: string;
}) {
  return (
    <div className=" h-[72px] px-[24px] bg-lime-400/50 flex items-center justify-center rounded-[32px] border-2 border-solid border-lime-950">
      <Link
        href={pageRef}
        className="text-3xl font-medium font-serif text-lime-900"
      >
        {title}
      </Link>
    </div>
  );
}
