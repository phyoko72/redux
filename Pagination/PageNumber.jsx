import style from "./Pagination.module.css"


const PageNumber = ({totalPage,postPerPage, changeCurrentPage,currentPage}) => {

    const listStyle = { border:'1px solid white', 
                        padding:'10px',
                        textAlign:'center',
                        display:'inline-block',
                        cursor:'pointer'
                    }

    const pages = []


    for(let i=1;i<=Math.ceil(totalPage/postPerPage);i++){
        pages.push(i)
    }

    return ( 
        <>
            <ul style={{listStyleType:'none'}}>
                {pages.map(page=>( 
                    <li 
                        onClick={()=>changeCurrentPage(page)} 
                        key={page}
                        className={ currentPage === page ? style.active : ''   } 
                        style={{ border:'1px solid white', 
                        padding:'10px',
                        textAlign:'center',
                        display:'inline-block',
                        cursor:'pointer',
                       
                    }}
                    > {page} </li> 
                ))}
            </ul>
        </>
     );
}
 
export default PageNumber;