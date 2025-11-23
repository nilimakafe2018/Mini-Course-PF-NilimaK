import CertificateCreator from "../Certificate/CertificateCreator";
import ReDo from "./ReDo";

const maxScore = 3;

function ShowResult({ score }) {
    console.log("score for result", score);

    return (
        score >= maxScore ? (
            <CertificateCreator />
        ) : (
            <ReDo /> //Rendering the ReDo component with the button
        )
    );
}

export default ShowResult;

