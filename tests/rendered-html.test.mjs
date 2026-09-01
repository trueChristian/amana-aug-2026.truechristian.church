import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("renders complete social preview metadata", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html = await response.text();
  assert.match(html, /<link[^>]+rel="canonical"[^>]+href="https:\/\/amana-aug-2026\.truechristian\.church\/"/i);
  assert.match(html, /<meta[^>]+property="og:image"[^>]+content="https:\/\/amana-aug-2026\.truechristian\.church\/assets\/social\/amana-aug-2026-camp-meeting\.jpg"/i);
  assert.match(html, /<meta[^>]+property="og:image:width"[^>]+content="1200"/i);
  assert.match(html, /<meta[^>]+property="og:image:height"[^>]+content="630"/i);
  assert.match(html, /<meta[^>]+property="og:image:type"[^>]+content="image\/jpeg"/i);
  assert.match(html, /<meta[^>]+name="twitter:card"[^>]+content="summary_large_image"/i);
});

test("ships the social preview image as a JPEG", async () => {
  const image = await readFile(new URL("../public/assets/social/amana-aug-2026-camp-meeting.jpg", import.meta.url));
  assert.deepEqual(Array.from(image.subarray(0, 3)), [0xff, 0xd8, 0xff]);
});
