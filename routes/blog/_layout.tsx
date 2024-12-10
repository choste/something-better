import { PageProps } from "$fresh/server.ts"

export default function Layout({ Component, state }: PageProps) {
    // do something with state here
    return (
      <div class="layout,bg-stone-100 font-serif">
        <Component />
      </div>
    );
  }