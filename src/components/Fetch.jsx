import { useEffect, useState } from 'react';

const FetchApi = () => {
  const [callApi, setCallApi] = useState([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      const apiKey = 'gNic433/7fQRomOXE7AZ8Q==r2WSl2KJTQfj1hCK';
      const category = 'happiness';

      const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': apiKey,
        },
      });

      if (response.ok) {
        const fetchedQuotes = await response.json();
        setCallApi(fetchedQuotes);
      } else {
        setCallApi([]);
      }
    };

    fetchQuotes();
  }, []);

  return (
    <div className="container mt-5">
      <ul className="d-flex list-group">
        {callApi.length > 0 ? (
          callApi.map((quote) => (
            <li className="p-3 rounded-4 d-flex justify-content-center" key={new Date().getTime().toString()}>
              <div className="d-flex justify-content-center align-items-center p-5 g-3 bg-success rounded w-60">
                <div className="text-light bg-success">
                  &quot;
                  {quote.quote}
                  &quot;
                  <hr className="" />
                  <div className="d-flex justify-content-center mt-3 bg-success">{quote.author}</div>
                </div>
              </div>
            </li>
          ))
        ) : (
          <li className="list-group-item">No quotes available!</li>
        )}
      </ul>
    </div>
  );
};

export default FetchApi;

// return (
//   <div className="container mt-5">
//     <ul className="list-group">
//       {callApi.length > 0 ? (
//         callApi.map((quote) => (
//           <li className="p-3  bg-primary-subtle rounded-4" key={new Date().getTime().toString()}>
//             <div className="align-items-center p-5 g-3">
//               <div className="text-light">
//                 &quot;
//                 {quote.quote}
//                 &quot;
//                 <div className="d-flex justify-content-center mt-3">{quote.author}</div>
//               </div>
//             </div>
//           </li>
//         ))
//       ) : (
//         <li className="list-group-item">No quotes available!</li>
//       )}
//     </ul>
//   </div>
// );
