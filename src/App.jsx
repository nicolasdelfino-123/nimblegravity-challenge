import { useEffect, useState } from "react";
import JobCard from "./components/JobCard";



const API_BASE_URL = "https://botfilter-h5ddh6dye8exb7ha.centralus-01.azurewebsites.net";
const CANDIDATE_UUID = "ad4e70a3-7114-4754-9ad3-148418ec6201";
const CANDIDATE_ID = "74103136005";
const APPLICATION_ID = "77767838005";


function App() {
  const [jobs, setJobs] = useState([]);
  const [repoUrlByJobId, setRepoUrlByJobId] = useState({});
  const [loadingJobId, setLoadingJobId] = useState(null);


  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/jobs/get-list`);
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);


  const handleApply = async (jobId) => {
    const repoUrl = repoUrlByJobId[jobId];

    if (!repoUrl) {
      alert("Por favor ingresá la URL del repositorio");
      return;
    }

    try {
      setLoadingJobId(jobId);

      const response = await fetch(
        `${API_BASE_URL}/api/candidate/apply-to-job`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            uuid: CANDIDATE_UUID,
            candidateId: CANDIDATE_ID,
            applicationId: APPLICATION_ID,
            jobId,
            repoUrl,
          }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Server response:", errorText);
        throw new Error("Request failed");
      }

      const data = await response.json();

      if (data.ok) {
        alert("Postulación enviada correctamente ✅");
      } else {
        alert("No se pudo enviar la postulación");
      }
    } catch (error) {
      console.error("Error applying to job:", error);
      alert("Error de conexión");
    } finally {
      setLoadingJobId(null);
    }
  };


  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: 20,
        fontFamily: "system-ui, Arial",
        width: "100%",
      }}
    >

      <div
        style={{
          width: 620,
          margin: "0 auto",
        }}
      >


        <h1 style={{ marginBottom: 30, fontWeight: 600, textAlign: "center" }}>
          Posiciones abiertas
        </h1>

        {jobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            repoUrl={repoUrlByJobId[job.id] ?? ""}
            onRepoChange={(id, value) =>
              setRepoUrlByJobId((prev) => ({
                ...prev,
                [id]: value,
              }))
            }
            onApply={handleApply}
            isLoading={loadingJobId === job.id}
          />
        ))}

      </div>
    </div>
  );
}

export default App;
