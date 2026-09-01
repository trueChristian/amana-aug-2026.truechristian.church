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
  assert.match(html, /<meta[^>]+property="og:image"[^>]+content="https:\/\/amana-aug-2026\.truechristian\.church\/assets\/social\/true-christian-icon-114-v4\.png"/i);
  assert.match(html, /<meta[^>]+property="og:image:secure_url"[^>]+content="https:\/\/amana-aug-2026\.truechristian\.church\/assets\/social\/true-christian-icon-114-v4\.png"/i);
  assert.match(html, /<meta[^>]+property="og:image:width"[^>]+content="114"/i);
  assert.match(html, /<meta[^>]+property="og:image:height"[^>]+content="114"/i);
  assert.match(html, /<meta[^>]+property="og:image:type"[^>]+content="image\/png"/i);
  assert.match(html, /<meta[^>]+name="twitter:card"[^>]+content="summary"/i);
  assert.match(html, /<meta[^>]+name="twitter:image:alt"[^>]+content="A True Christian Church"/i);
  assert.match(html, /<link[^>]+rel="image_src"[^>]+href="https:\/\/amana-aug-2026\.truechristian\.church\/assets\/social\/true-christian-icon-114-v4\.png"/i);
  assert.match(html, /<link[^>]+rel="apple-touch-icon"[^>]+href="https:\/\/amana-aug-2026\.truechristian\.church\/assets\/favicons\/apple-touch-icon\.png"/i);
});

test("ships the social preview image as a PNG", async () => {
  const image = await readFile(new URL("../public/assets/social/true-christian-icon-114-v4.png", import.meta.url));
  assert.deepEqual(Array.from(image.subarray(0, 4)), [0x89, 0x50, 0x4e, 0x47]);
  assert.equal(image.readUInt32BE(16), 114);
  assert.equal(image.readUInt32BE(20), 114);
});
