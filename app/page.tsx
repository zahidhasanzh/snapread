import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col  flex-1 items-center justify-center bg-zinc-50 dark:bg-black">
      <h1>snapread</h1>
      <Button variant={"outline"} size={'lg'}>Hello world</Button>
    </div>
  );
}
