import React from 'react';
import classNames from 'classnames';

const MoviePages = (props) => {
  const { page, pages, updatePage } = props;
  const handleClick = value => {
    return () => {
      updatePage(value);
    }
  }
  
  let pageNumberOne = page === 1 ? page : (page === pages) ? pages - 2 : page - 1;
  let pageNumberTwo = page === 1 ? page + 1 : (page === pages) ? pages - 1 : page;
  let pageNumberThree = page === 1 ? page + 2 : (page === pages) ? pages : page + 1;

  const classPrevNext = classNames({
    'page-item cursor': true,
    'disabled': pageNumberOne === 1 || pageNumberThree === pages
  })
  const classPageOne = classNames({
    'page-item cursor': true,
    'active': page === 1
  })
  const classPageTwo = classNames({
    'page-item cursor': true,
    'active': pageNumberTwo === page
  })
  const classPageThree = classNames({
    'page-item cursor': true,
    'active': page === pages
  })

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li 
          className={classPrevNext}
          onClick={(page !== 1) ? handleClick(page - 1) : undefined}
        >
          <span className="page-link">Previous</span>
        </li> 
        <li 
          className={classPageOne}
          onClick={handleClick(pageNumberOne)}
        >
          <span className="page-link">{pageNumberOne}</span>
        </li>
        <li 
          className={classPageTwo}
          onClick={handleClick(pageNumberTwo)}
        >
          <span className="page-link">{pageNumberTwo}</span>
        </li>
        <li 
          className={classPageThree}
          onClick={handleClick(pageNumberThree)}
        >
          <span className="page-link">{pageNumberThree}</span>
        </li>
        <li 
          className={classPrevNext}
          onClick={(page !== pages) ? handleClick(page + 1) : undefined}
        >
          <span className="page-link">Next</span>
        </li>
        <li className="page-item disabled">
          <span className="page-link">total {pages}</span>
        </li>
      </ul>
    </nav>
  )
}

export default MoviePages;