function JobCard({
    job,
    repoUrl,
    onRepoChange,
    onApply,
    isLoading,
}) {
    return (
        <div
            style={{
                marginBottom: 16,
                padding: 16,
                border: "1px solid #e5e5e5",
                borderRadius: 8,
                background: "#ffffff",
                boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
                textAlign: "left",
            }}
        >
            <strong style={{ fontSize: 15 }}>{job.title}</strong>

            <div
                style={{
                    display: "flex",
                    gap: 8,
                    marginTop: 12,
                    justifyContent: "center",
                }}
            >
                <input
                    type="text"
                    placeholder="URL de tu repositorio"
                    value={repoUrl}
                    onChange={(e) => onRepoChange(job.id, e.target.value)}
                    style={{
                        flex: 1,
                        padding: "9px 10px",
                        borderRadius: 6,
                        border: "1px solid #ccc",
                        fontSize: 14,
                    }}
                />

                <button
                    disabled={isLoading}
                    onClick={() => onApply(job.id)}
                    style={{
                        padding: "9px 16px",
                        borderRadius: 6,
                        border: "none",
                        background: isLoading ? "#999" : "#111",
                        color: "#fff",
                        fontSize: 14,
                        fontWeight: 500,
                        cursor: isLoading ? "not-allowed" : "pointer",
                    }}
                >
                    {isLoading ? "Enviando..." : "Submit"}
                </button>
            </div>
        </div>
    );
}

export default JobCard;
