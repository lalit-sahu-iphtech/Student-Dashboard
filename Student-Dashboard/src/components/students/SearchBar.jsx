

export default function SearchBar({setSearch}){
 return(
    <div className="search-filter">
     <input placeholder="Search Student"
    onChange={(e)=>setSearch(e.target.value)}/>
    </div>
   
 )

}