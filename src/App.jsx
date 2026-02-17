import { useEffect, useState } from "react";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(
          "https://botfilter-h5ddh6dye8exb7ha.centralus-01.azurewebsites.net/api/jobs/get-list"
        );

        const data = await response.json();
        setJobs(data);

      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);


  return (
    <div>
      <h1>Posiciones disponibles</h1>

      {jobs.map((job) => (
        <p key={job.id}>{job.title}</p>
      ))}
    </div>
  );
}

export default App;
