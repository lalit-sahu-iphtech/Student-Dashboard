
export default function Filter({
    setCity, setStatus
}){
  return(
    <div className="search-filter">
       <select onChange={(e)=>setCity(e.target.value)}>
        <option value="">All City</option>
        <option value="">Delhi</option>
        <option value="">Mumbai</option>
       </select>

       <select onChange={(e)=>setStatus(e.target.value)}>
        <option value="">All Status</option>
        <option value="">Active</option>
        <option value="">Inactive</option>
       </select>
        
    </div>
  )
}