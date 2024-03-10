import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "lef237's homepage" },
    { name: "description", content: "Welcome to LEF's homepage!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to lef237&apos;s homepage!</h1>
      <h2>This site is made by Remix (SPA Mode)</h2>
      <ul>
        <li>
          <a target="_blank" href="https://github.com/lef237" rel="noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a target="_blank" href="https://twitter.com/lef237" rel="noreferrer">
            Twitter
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://lef237.hatenablog.com/"
            rel="noreferrer"
          >
            LEF LOG (Blog)
          </a>
        </li>
      </ul>
      <img src="/lefzou.jpg" alt="lefzou" width="500" height="500" />
      <p className="text-3xl">Brave New Elephant</p>
    </div>
  );
}
