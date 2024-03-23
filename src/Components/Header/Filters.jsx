const FilterBtn = props => {
    return (
        <button className={`font-Roboto text-sm font-medium py-1.5 px-3 rounded-md whitespace-nowrap transition ${props.active ? 'bg-yt-white text-yt-black' : 'bg-yt-gray text-yt-white hover:bg-yt-white/15'}`}>{props.text}</button>
    );
}

const Filters = () => {
    return (
        <div className="home-nav-filters overflow-x-hidden hover:overflow-x-scroll flex gap-x-3">
            <FilterBtn text="All" active={true} />
            <FilterBtn text="Music" />
            <FilterBtn text="Gaming" />
            <FilterBtn text="Mixes" />
            <FilterBtn text="Programming" />
            <FilterBtn text="Cameras" />
            <FilterBtn text="Playlists" />
            <FilterBtn text="Live" />
            <FilterBtn text="Indie Music" />
            <FilterBtn text="Hiking" />
            <FilterBtn text="Soundtracks" />
            <FilterBtn text="House Music" />
            <FilterBtn text="Comedy" />
            <FilterBtn text="Guitar" />
            <FilterBtn text="Cars" />
            <FilterBtn text="Recently uploaded" />
            <FilterBtn text="Watched" />
            <FilterBtn text="Near to you" />
        </div>
    );
}

export default Filters;