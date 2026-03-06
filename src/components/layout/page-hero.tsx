import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type PageHeroProps = {
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
  backgroundImage?: string;
};

export function PageHero({ title, description, breadcrumbs, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden gradient-navy">
      {backgroundImage ? (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIABADASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAL/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABBEFEiEiMUFRYf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AkGKJjI0ESsx5YoASfZqz/9k="
          />
          <div className="absolute inset-0 bg-[var(--navy-950)]/70" />
        </div>
      ) : (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,var(--navy-600),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,var(--gold),transparent_40%)]" />
        </div>
      )}
      <div className="relative mx-auto w-full max-w-6xl px-4 py-20 md:px-6 md:py-28">
        {breadcrumbs && breadcrumbs.length > 0 ? (
          <nav className="mb-4 flex items-center gap-1 text-sm text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb) => (
              <span key={crumb.label} className="flex items-center gap-1">
                <ChevronRight className="h-3 w-3" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[var(--gold)]">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        ) : null}
        <h1 className="font-heading text-4xl font-bold text-white md:text-5xl">{title}</h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-lg text-slate-300">{description}</p>
        ) : null}
        <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)]" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
