export default function Filter({
  students = [],

  setCity, // selected city update krega

  setStatus, // selected status update krega
}) {
  // Dynamic Cities
 // remove duplicate city -> new Set(...), [...new Set] ->set ko array me convert
  const cities = [...new Set(students.map((student) => student.city||student.address?.city))];

  return (
    <div className="toolbar-filters">
      {/* City Filter */}

      <select
        className="filter-select"
        onChange={(e) => setCity(e.target.value)}
      >
        <option value="">All Cities</option>

        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>

      {/* Status Filter */}

      <select
        className="filter-select"
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="">All Status</option>

        <option value="Active">Active</option>

        <option value="Inactive">Inactive</option>
      </select>
    </div>
  );
}
