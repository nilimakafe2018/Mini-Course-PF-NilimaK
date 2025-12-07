import "./Certificate.css";

// receiving data from CertificateCreator
function CertificatePreview({ name, color, customItems }) {
  return (
    <div className="certificate" style={{ borderColor: color }}>
      <h1 style={{ color }}>Certificate of Completion</h1>
      
      <h2>{name || "Your name here"}</h2>
      <p>Great job. You have successfully completed the Process Feedback Mini-Course. Keep up the excellent work and continue your learning journey.</p>

      {/* Displaying custom added content by user*/}
      {customItems?.length > 0 && (
        <div className="custom-section">
          {customItems.map((item, i) => (
            <p key={i}>{item}</p> 
          ))}
        </div>
      )}
    </div>
  );
}

export default CertificatePreview;
