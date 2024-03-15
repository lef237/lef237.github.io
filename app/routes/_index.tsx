import type { MetaFunction } from "@remix-run/node";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { useToast } from "~/components/ui/use-toast";

export const meta: MetaFunction = () => {
  return [
    { title: "lef237's homepage" },
    { name: "description", content: "Welcome to LEF's homepage!" },
  ];
};

export default function Index() {
  const { toast } = useToast();

  return (
    <div
      className="pl-4"
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}
    >
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Welcome to lef237&apos;s homepage!
      </h1>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        This site is made by Remix (SPA Mode)
      </h2>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Links
      </h3>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <a
            className="text-blue-500"
            target="_blank"
            href="https://github.com/lef237"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            className="text-blue-500"
            target="_blank"
            href="https://twitter.com/lef237"
            rel="noreferrer"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            className="text-blue-500"
            target="_blank"
            href="https://lef237.hatenablog.com/"
            rel="noreferrer"
          >
            LEF LOG (Blog)
          </a>
        </li>
      </ul>
      <img src="/lefzou.jpg" alt="lefzou" width="500" height="500" />
      <p className="text-xl text-muted-foreground">Brave New Elephant</p>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <a target="_blank" href="https://github.com/lef237" rel="noreferrer">
          <Avatar>
            <AvatarImage src="/lefzou.jpg" alt="lefzou" />
            <AvatarFallback>L</AvatarFallback>
          </Avatar>
        </a>
        <p
          className="text-sm text-muted-foreground"
          style={{ margin: "0 0 0 10px" }}
        >
          May the force be with you...
        </p>
      </div>
      <div className="m-10">
        <Button
          variant="ghost"
          onClick={() => {
            toast({
              description: "I like icecream very much🍦",
            });
          }}
        >
          Click me!
        </Button>
      </div>
    </div>
  );
}
