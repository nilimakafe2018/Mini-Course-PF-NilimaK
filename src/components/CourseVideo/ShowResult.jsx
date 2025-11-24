import CertificateCreator from "../Certificate/CertificateCreator";
import ReDo from "./ReDo";

const maxScore = 3;

function ShowResult({ score }) {

    // conditional rendering. 
    // if the score is greater or equal to maxScore, show certificate. If not show redo component to restart the course
    return (
        score >= maxScore ? (
            <CertificateCreator />
        ) : (
            <ReDo /> //Rendering the ReDo component with the start again button
        )
    );
}

export default ShowResult;

