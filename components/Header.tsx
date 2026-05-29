"use client";
import clsx from "clsx";
import Link from "next/link";
import { lusitana } from "@/app/ui/fonts";
import { usePathname } from "next/navigation";
type Props = {
  status: "ERR" | "OK";
};
export default function Header({ status }: Props) {
  const pathname = usePathname();
  console.log(pathname);
  const classess = clsx(
    `${lusitana.className} bg-lime-500 flex gap-4 justify-center`,
    {
      "bg-red-100": status === "ERR",
      "bg-lime-300": status === "OK",
    },
  );

  return (
    <nav className={classess}>
      <Link
        className={clsx("bg-red-200 p-2 hover:bg-red-400 transition", {
          "bg-rose-500": pathname === "/dashboard",
        })}
        href={"/dashboard"}
      >
        dashboard
      </Link>
      <Link
        className={clsx("bg-red-200 p-2 hover:bg-red-400 transition", {
          "bg-rose-500": pathname === "/dashboard/customer",
        })}
        href={"/dashboard/customer"}
      >
        customer
      </Link>
      <Link
        className={clsx("bg-red-200 p-2 hover:bg-red-400 transition", {
          "bg-rose-500": pathname === "/dashboard/invoices",
        })}
        href={"/dashboard/invoices"}
      >
        invoices
      </Link>
    </nav>
  );
}
