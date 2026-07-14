export default function Filter({
  students = [],

  setCity,

  setStatus,
}) {
  // Dynamic Cities

  const cities = [...new Set(students.map((student) => student.address.city))];

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
