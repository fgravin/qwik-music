import { $, component$, useSignal } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { fetch10 } from "~/services/itunes.client";
import { ITunesRssResponse } from "~/services/music.model";
import MusicList from "~/components/home/music-list/music-list";
import Search from "~/components/home/search/search";

export const usePrefetchMusicList = routeLoader$<ITunesRssResponse>(
  async () => {
    const response = await fetch10();
    return (await response.json()) as ITunesRssResponse;
  }
);

export default component$(() => {
  // const search = $((filter: string) => alert(filter));

  const filter = useSignal("");
  const search = $(() => alert(filter.value));
  return (
    <main class="container">
      <h1 class="text-5xl text-amber-500">Blazing Songs</h1>
      <section>
        <Search filter={filter} search$={search} />
      </section>
      <section class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <MusicList />
      </section>
    </main>
  );
});
