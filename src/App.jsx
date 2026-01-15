import { useState } from 'react';

export default function App() {
  const [places, setPlaces] = useState([
    {
      id: 1,
      place: 'Kofra',
      location: 'Upper St Giles',
      type: 'Coffee shop',
      fwRating: 5,
      fwPrice: '3.50',
      vibes: ['Chill', 'Aesthetic'],
      whyHere: 'Great atmosphere and excellent coffee'
    }
  ]);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({
    place: '',
    location: '',
    type: 'Coffee shop',
    fwRating: 3,
    fwPrice: '',
    vibes: [],
    whyHere: '',
  });

  const handleAddPlace = (e) => {
    e.preventDefault();
    if (!formData.place || !formData.location) return;
    
    setPlaces([
      ...places,
      {
        ...formData,
        id: Date.now()
      }
    ]);
    
    setFormData({
      place: '',
      location: '',
      type: 'Coffee shop',
      fwRating: 3,
      fwPrice: '',
      vibes: [],
      whyHere: '',
    });
    setIsAdding(false);
  };

  const handleDelete = (id) => {
    setPlaces(places.filter(p => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-white border-b border-stone-200 sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-stone-800">☕ Norwich Coffee</h1>
          <button
            onClick={() => setIsAdding(true)}
            className="bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-700 transition"
          >
            + Add Place
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-6">
        {places.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg border-2 border-dashed border-stone-200">
            <p className="text-stone-500 mb-4">No coffee shops logged yet</p>
            <button
              onClick={() => setIsAdding(true)}
              className="text-orange-600 font-bold hover:underline"
            >
              Log your first place →
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {places.map((place) => (
              <div key={place.id} className="bg-white p-5 rounded-lg border border-stone-200 shadow-sm hover:shadow-md transition">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-stone-800">{place.place}</h3>
                    <p className="text-sm text-stone-500">📍 {place.location}</p>
                  </div>
                  <div className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-sm font-bold">
                    ⭐ {place.fwRating}/5
                  </div>
                </div>

                <p className="text-xs text-stone-400 mb-2">{place.type}</p>
                
                {place.vibes.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {place.vibes.map((vibe) => (
                      <span key={vibe} className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">
                        {vibe}
                      </span>
                    ))}
                  </div>
                )}

                <p className="text-sm text-stone-600 mb-3 italic">"{place.whyHere}"</p>

                <div className="flex justify-between items-center pt-3 border-t border-stone-100">
                  <p className="text-xs text-stone-400">£{place.fwPrice}</p>
                  <button
                    onClick={() => handleDelete(place.id)}
                    className="text-stone-400 hover:text-red-600 transition"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Modal */}
      {isAdding && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Add Coffee Shop</h2>
            
            <form onSubmit={handleAddPlace} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-1">Place Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Kofra"
                  value={formData.place}
                  onChange={(e) => setFormData({ ...formData, place: e.target.value })}
                  className="w-full border border-stone-300 rounded px-3 py-2 focus:outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-1">Location *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Upper St Giles"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full border border-stone-300 rounded px-3 py-2 focus:outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-1">Type</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full border border-stone-300 rounded px-3 py-2 focus:outline-none focus:border-orange-500"
                >
                  <option>Coffee shop</option>
                  <option>Cafe</option>
                  <option>Bakery</option>
                  <option>Bar</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-1">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, fwRating: star })}
                      className={`text-2xl ${formData.fwRating >= star ? 'opacity-100' : 'opacity-30'}`}
                    >
                      ⭐
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-1">Price (£)</label>
                <input
                  type="number"
                  step="0.01"
                  placeholder="3.50"
                  value={formData.fwPrice}
                  onChange={(e) => setFormData({ ...formData, fwPrice: e.target.value })}
                  className="w-full border border-stone-300 rounded px-3 py-2 focus:outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">Vibes</label>
                {['Chill', 'Quiet', 'Social', 'Aesthetic', 'Cozy', 'Writing'].map((vibe) => (
                  <label key={vibe} className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      checked={formData.vibes.includes(vibe)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormData({ ...formData, vibes: [...formData.vibes, vibe] });
                        } else {
                          setFormData({ ...formData, vibes: formData.vibes.filter(v => v !== vibe) });
                        }
                      }}
                      className="w-4 h-4 rounded"
                    />
                    <span className="text-sm text-stone-700">{vibe}</span>
                  </label>
                ))}
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-1">Notes</label>
                <textarea
                  placeholder="Why you like this place..."
                  value={formData.whyHere}
                  onChange={(e) => setFormData({ ...formData, whyHere: e.target.value })}
                  className="w-full border border-stone-300 rounded px-3 py-2 focus:outline-none focus:border-orange-500 h-24"
                />
              </div>

              <div className="flex gap-2 pt-4">
                <button
                  type="button"
                  onClick={() => setIsAdding(false)}
                  className="flex-1 px-4 py-2 text-stone-700 border border-stone-300 rounded hover:bg-stone-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-orange-600 text-white rounded font-semibold hover:bg-orange-700 transition"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
