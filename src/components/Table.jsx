import React, { useEffect, useState } from "react";

const Table = () => {
  const [data, setData] = useState([]);
  console.log(data.length);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const numberOfPages = Math.ceil(data?.length / itemsPerPage);

  const pages = [...Array(numberOfPages).keys()].map((page) => page + 1);

  console.log(numberOfPages);

  useEffect(() => {
    fetch(`https://api.razzakfashion.com/?search=${search}`)
      .then((response) => response.json())
      .then((result) => setData(result.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [search]);

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < numberOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search By Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px", borderRadius: "20px" }}
      />
      <table
        border="1"
        style={{
          width: "100%",
          marginTop: "10px",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <thead>
          <tr>
            <th>Sl No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>State</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item, index) => (
            <tr key={item.id}>
              <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
              <td>{item.name.split(" ")[0]}</td>
              <td>{item.name.split(" ")[1]}</td>
              <td>6009 Duglas street</td>
              <td>Georgia</td>
              <td>01000000000</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={handlePrevPage}>Prev</button>
        {pages.map((page) => (
          <button
            className={currentPage === page ? "selected" : ""}
            onClick={() => setCurrentPage(page)}
            key={page}
          >
            {page}
          </button>
        ))}
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
};

export default Table;
