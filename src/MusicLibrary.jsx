import { useState, useEffect } from 'react'

const initialSongs = [
  { id: 1, title: 'Thinkin Bout You', artist: 'Frank Ocean', album: 'Channel Orange' },
  { id: 2, title: 'Nights', artist: 'Frank Ocean', album: 'Blonde' },
  { id: 3, title: 'Chamber of Reflection', artist: 'Mac DeMarco', album: 'Salad Days' },
  { id: 4, title: 'My Kind of Woman', artist: 'Mac DeMarco', album: '2' },
  { id: 5, title: 'Lemons', artist: 'Nanku', album: 'Mood Ring' },
  { id: 6, title: 'Fade', artist: 'Nanku', album: 'Mood Ring' },
  { id: 7, title: 'Kaafi Zyada', artist: 'Nanku', album: 'Single' },
  { id: 8, title: 'Khush Toh Hai Na Tu', artist: 'Nanku', album: 'Single' },
  { id: 9, title: 'Shaam', artist: 'Nanku', album: 'Single' },
  { id: 10, title: 'Cigarettes out the Window', artist: 'TV Girl', album: 'Who Really Cares' },
  { id: 11, title: 'Lovers Rock', artist: 'TV Girl', album: 'French Exit' },
  { id: 12, title: 'Good Days', artist: 'SZA', album: 'SOS' },
  { id: 13, title: 'Kill Bill', artist: 'SZA', album: 'SOS' },
  { id: 14, title: 'After Dark', artist: 'Mr.Kitty', album: 'Eternity' },
  { id: 15, title: 'Ivy', artist: 'Frank Ocean', album: 'Blonde' },
  { id: 16, title: 'Vapor', artist: 'The Midnight', album: 'Nocturnal' },
  { id: 17, title: 'Feeling Whitney', artist: 'Post Malone', album: 'Stoney' },
  { id: 18, title: 'Dark Red', artist: 'Steve Lacy', album: 'Dark Red' },
  { id: 19, title: 'Pretty Boy', artist: 'Joji', album: 'Nectar' },
  { id: 20, title: 'Television / So Far So Good', artist: 'Rex Orange County', album: 'Apricot Princess' },
  { id: 21, title: 'Electric Feel', artist: 'MGMT', album: 'Oracular Spectacular' },
  { id: 22, title: 'Sunflower', artist: 'Post Malone', album: 'Hollywood’s Bleeding' },
  { id: 23, title: 'Losing You', artist: 'boy pablo', album: 'Soy Pablo' },
  { id: 24, title: 'Lavender', artist: 'Nanku', album: 'Single' },
  { id: 25, title: 'Midnight Dreams', artist: 'Nanku', album: 'Single' }
];



const getStoredSongs = () => {
  const stored = localStorage.getItem('songs')
  return stored ? JSON.parse(stored) : initialSongs
}

const saveSongs = (songs) => {
  localStorage.setItem('songs', JSON.stringify(songs))
}

export default function MusicLibrary({ role }) {
  const [songs, setSongs] = useState(getStoredSongs)
  const [search, setSearch] = useState('')
  const [groupBy, setGroupBy] = useState('')
  const [sortBy, setSortBy] = useState('')
  const [newSong, setNewSong] = useState({ title: '', artist: '', album: '' })

  useEffect(() => {
    saveSongs(songs)
  }, [songs])

  const handleDelete = (id) => {
    const updated = songs.filter(song => song.id !== id)
    setSongs(updated)
  }

  const handleAdd = () => {
    const newId = songs.length ? Math.max(...songs.map(s => s.id)) + 1 : 1
    const song = { ...newSong, id: newId }
    const updated = [...songs, song]
    setSongs(updated)
    setNewSong({ title: '', artist: '', album: '' })
  }

  let filteredSongs = songs.filter(
    song =>
      song.title.toLowerCase().includes(search.toLowerCase()) ||
      song.artist.toLowerCase().includes(search.toLowerCase()) ||
      song.album.toLowerCase().includes(search.toLowerCase())
  )

  if (sortBy) {
    filteredSongs = [...filteredSongs].sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
  }

  const grouped = groupBy
    ? filteredSongs.reduce((acc, song) => {
        const key = song[groupBy]
        if (!acc[key]) acc[key] = []
        acc[key].push(song)
        return acc
      }, {})
    : null

// MusicLibrary.jsx (just the return JSX, replace inside your current component)
return (
  <div style={{
    border: '1px solid #444',
    padding: '1.5rem',
    borderRadius: '10px',
    background: '#2c2c2e',
    fontFamily: 'sans-serif',
    color: '#fff',
    marginTop: '2rem',
    boxShadow: '0 0 12px rgba(255,255,255,0.05)'
  }}>
    <h2 style={{ marginBottom: '1rem', color: '#f8d3da' }}>🎵 Music Library</h2>

    <input
      placeholder="Search songs..."
      value={search}
      onChange={e => setSearch(e.target.value)}
      style={{
        marginBottom: '1rem',
        padding: '0.6rem',
        width: '100%',
        borderRadius: '4px',
        border: '1px solid #666',
        background: '#1e1e20',
        color: '#fff'
      }}
    />

    <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
      <div>
        <label><strong>Group By:</strong> </label>
        <select value={groupBy} onChange={e => setGroupBy(e.target.value)} style={{ padding: '0.4rem', background: '#1e1e20', color: '#fff' }}>
          <option value="">None</option>
          <option value="artist">Artist</option>
          <option value="album">Album</option>
          <option value="title">Title</option>
        </select>
      </div>

      <div>
        <label><strong>Sort By:</strong> </label>
        <select value={sortBy} onChange={e => setSortBy(e.target.value)} style={{ padding: '0.4rem', background: '#1e1e20', color: '#fff' }}>
          <option value="">None</option>
          <option value="artist">Artist</option>
          <option value="album">Album</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>

    {role === 'admin' && (
      <div style={{
        marginBottom: '1.5rem',
        padding: '1rem',
        background: '#3a3a3c',
        borderRadius: '8px'
      }}>
        <h3 style={{ color: '#f8d3da' }}>Add Song</h3>
        <input
          placeholder="Title"
          value={newSong.title}
          onChange={e => setNewSong({ ...newSong, title: e.target.value })}
          style={{ marginRight: '0.5rem', padding: '0.4rem', background: '#1e1e20', color: '#fff' }}
        />
        <input
          placeholder="Artist"
          value={newSong.artist}
          onChange={e => setNewSong({ ...newSong, artist: e.target.value })}
          style={{ marginRight: '0.5rem', padding: '0.4rem', background: '#1e1e20', color: '#fff' }}
        />
        <input
          placeholder="Album"
          value={newSong.album}
          onChange={e => setNewSong({ ...newSong, album: e.target.value })}
          style={{ marginRight: '0.5rem', padding: '0.4rem', background: '#1e1e20', color: '#fff' }}
        />
        <button onClick={handleAdd} style={{
          backgroundColor: '#d1989b',
          color: '#fff',
          border: 'none',
          padding: '0.4rem 0.8rem',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          Add
        </button>
      </div>
    )}

    {(groupBy ? Object.entries(grouped) : [["All Songs", filteredSongs]]).map(([key, group]) => (
      <div key={key} style={{ marginBottom: '1rem' }}>
        <h4 style={{ textDecoration: 'underline', color: '#f8d3da' }}>
          {groupBy ? `${groupBy.toUpperCase()}: ${key}` : key}
        </h4>
        <div>
          {group.map(song => (
            <div key={song.id} style={{ marginBottom: '0.5rem', padding: '0.5rem', background: '#1e1e20', borderRadius: '5px' }}>
              {song.title} - {song.artist} ({song.album})
              {role === 'admin' && (
                <button onClick={() => handleDelete(song.id)} style={{
                  marginLeft: '1rem',
                  backgroundColor: '#ff5e6c',
                  color: '#fff',
                  border: 'none',
                  padding: '0.3rem 0.6rem',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}>
                  ❌
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

    
}
