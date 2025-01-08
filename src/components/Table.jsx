// import React, { useEffect, useState } from "react";

// const Table = () => {
//   const [data, setData] = useState([]);
//   const [search, setSearch] = useState("");

//   console.log(data);

//   useEffect(() => {
//     fetch(`https://api.razzakfashion.com/?paginate=5&search=${search}`)
//     // fetch(`https://api.razzakfashion.com`)
//       .then((response) => response.json())
//       .then((result) => setData(result.data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, [search]);

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search By Name"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         style={{ marginBottom: "10px", padding: "5px", borderRadius: "20px" }}
//       />
//       <table border="1" style={{ width: "100%", marginTop: "10px", backgroundColor: "black", color: "white" }}>
//         <thead>
//           <tr>
//             <th>Sl No</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Address</th>
//             <th>State</th>
//             <th>Phone Number</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <tr key={item.id}>
//               <td>{index + 1}</td>

//               <td>{item.name.split(" ")[0]}</td>
//               <td>{item.name.split(" ")[1]}</td>
//               <td>6009 Duglas street</td>
//               <td>Georgia</td>
//               <td>01000000000</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;


// import React, { useEffect, useState } from "react";

// const Table = () => {
//   const [data, setData] = useState([]);
//   const [search, setSearch] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [dataPerPage] = useState(5);

//   useEffect(() => {
//     fetch(`https://api.razzakfashion.com/?paginate=5&search=${search}`)
//       .then((response) => response.json())
//       .then((result) => setData(result.data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, [search]);

//   // Pagination logic
//   const indexOfLastData = currentPage * dataPerPage;
//   const indexOfFirstData = indexOfLastData - dataPerPage;
//   const currentData = data.slice(indexOfFirstData, indexOfLastData);

//   // Handle pagination
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search By Name"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         style={{ marginBottom: "10px", padding: "5px", borderRadius: "20px" }}
//       />
//       <table
//         border="1"
//         style={{
//           width: "100%",
//           marginTop: "10px",
//           backgroundColor: "black",
//           color: "white",
//         }}
//       >
//         <thead>
//           <tr>
//             <th>Sl No</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Address</th>
//             <th>State</th>
//             <th>Phone Number</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentData.map((item, index) => (
//             <tr key={item.id}>
//               <td>{index + 1}</td>
//               <td>{item.name.split(" ")[0]}</td>
//               <td>{item.name.split(" ")[1]}</td>
//               <td>6009 Duglas street</td>
//               <td>Georgia</td>
//               <td>01000000000</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Pagination Buttons */}
//       <div style={{ marginTop: "20px" }}>
//         <button
//           onClick={() => paginate(currentPage - 1)}
//           disabled={currentPage === 1}
//           style={{ marginRight: "10px" }}
//         >
//           Prev
//         </button>
//         <button
//           onClick={() => paginate(currentPage + 1)}
//           disabled={currentPage * dataPerPage >= data.length}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Table;




import React, { useEffect, useState } from "react";

const Table = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(5);

  useEffect(() => {
    fetch(`https://api.razzakfashion.com/?paginate=5&search=${search}`)
      .then((response) => response.json())
      .then((result) => setData(result.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [search]);

  // Pagination logic
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);

  // Handle pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Total pages calculation only after data is loaded
  const totalPages = data.length > 0 ? Math.ceil(data.length / dataPerPage) : 1;

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
          {currentData.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name.split(" ")[0]}</td>
              <td>{item.name.split(" ")[1]}</td>
              <td>6009 Duglas street</td>
              <td>Georgia</td>
              <td>01000000000</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Buttons */}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          style={{ marginRight: "10px" }}
        >
          Prev
        </button>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;

