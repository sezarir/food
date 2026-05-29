import Header from "@/components/Header";
import { ReactNode } from "react";
type Props = {
  children: ReactNode;
};
export default function Layout(props: Props) {
  return (
    <main>
      <Header status="ERR" />
      {props.children}
    </main>
  );
}
