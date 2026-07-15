// table ke page control karta hai

export default function Pagination({page, setPage, total}) {
  return (
    <div>
      <button disabled={page===1}onClick={()=>setPage(page-1)}>Previous</button>
     {/* current page */}
      <span>{page}</span>

      <button disabled={page===total}onClick={()=>setPage(page+1)}>Next</button>


    </div>
  );
}
