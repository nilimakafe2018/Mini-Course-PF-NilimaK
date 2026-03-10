import CertificateCreator from "../Certificate/CertificateCreator";
import ReDo from "./ReDo";

const maxScore = 3;

//Showresult receives score as a prop
function ShowResult({ score, restartCourse }) {

    // conditional rendering. 
    // if the score is greater or equal to maxScore, show certificate. If not show redo component to restart the course
    return (
        score >= maxScore ? (
            <CertificateCreator /> 
        ) : (
            <ReDo restartCourse={restartCourse} /> //Rendering the ReDo component with the start again button
        )
    );
}

export default ShowResult;

