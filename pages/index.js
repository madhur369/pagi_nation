// pages/index.js
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
export default function Home() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 10; // Number of records to display per page

  const fetchData = async () => {
    const response = await fetch(`/api/data?page=${currentPage}&pageSize=${pageSize}`);
    const jsonData = await response.json();
    setData(jsonData);
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className={styles.main}>
      <h1 style={{textAlign:"center" , fontSize:"4rem" }}>Data</h1>
      <div className={styles.row}>
        {data.map((record) => (
          <div className={styles.col} key={record.id} >
            <h1>{record.title}</h1>
            <p>{record.description}</p>
            <img src={record.image} />
          </div>
        ))}
      </div>

      <div className={styles.btn}>
        <button onClick={handlePrevPage}>Previous</button>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
}
