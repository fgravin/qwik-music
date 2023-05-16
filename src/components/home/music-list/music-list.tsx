import { component$ } from '@builder.io/qwik'
import { usePrefetchMusicList } from '~/routes/home'
import MusicCard from '~/components/home/music-card/music-card'


export default component$(() => {
  const musicList = usePrefetchMusicList();
  return (
    <>
      {musicList.value.feed.entry.map(music=> <MusicCard music={music} />)}
    </>
  );

})
