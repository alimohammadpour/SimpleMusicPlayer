import SearchBar from "../containers/search-bar";
import MusicList from "../containers/music-list";
import MusicDetail from "../containers/music-detail";

export default function App() {
  return (
    <div className="d-flex flex-column align-items-center m-5">
      <SearchBar />
      <MusicDetail />
      <MusicList />
    </div>
  );
}
