import React from 'react'

const Page = ({ isVisible, setIsVisible, page, setPage, array, totalPage }) => {
  return (
    <>
      {!isVisible && (
        <div  onClick={() => setIsVisible(true)}>
          <button >1</button>
          <button >2</button>
          <button >...</button>
          <button >99</button>
          <button >100</button>
        </div>
      )}
      
      {isVisible && (
        <div >
          <div >
            <ul>
              <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
                
              >
                prev
              </button>
              {array.map((number) => (
                <button
                  
                  key={number}
                  onClick={() => setPage(number)}
                >
                  {number}
                </button>
              ))}
              <button
                onClick={() => setPage(page + 1)}
                disabled={page === totalPage}
                
              >
                next
              </button>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default Page
