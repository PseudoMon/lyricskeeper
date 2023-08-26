console.log(SONGS);

if ("content" in document.createElement("template")) {
  const searchbar = document.querySelector("#song-search");
  const resultTemplate = document.querySelector("#song-search-result");
  const parent = searchbar.parentNode;
  console.log(searchbar);

  let resultListElem;

  searchbar.addEventListener("input", (e) => {
      const input = e.target.value.toLowerCase();

      if (input.length) {
        if (!resultListElem) {
          const container = resultTemplate.content.cloneNode(true);
          resultListElem = parent.appendChild(container.firstElementChild);
        }

        let songElems = []

        filteredSongs = SONGS.filter((song) => {
          title = song.title.toLowerCase();
          artist = song.artist.toLowerCase();
          console.log(title);
          return title.includes(input) || artist.includes(input);
        });

        filteredSongs.forEach((song) => {
          const songElem = document.createElement("a");
          songElem.href = song.url;
          songElem.innerText = `${song.artists[0]} - ${song.title}`;
          songElems.push(songElem);
        });
        
        resultListElem.replaceChildren(...songElems);
      }

      else if (!input.length && resultListElem) {
        parent.removeChild(resultListElem);
        resultListElem = null;
      }
  })
}