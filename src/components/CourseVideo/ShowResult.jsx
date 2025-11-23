import React from "react";
import CertificatePreview from "../Certificate/CertificatePreview";
import CertificateCreator from "../Certificate/CertificateCreator";

const maxScore = 3;

function ShowResult({score }) {

    console.log("score for result", score);

    return (

        score >= maxScore ?
            <>
        
                <CertificateCreator />

            </> :
            <>
                <>Please try again</>
            </>

    )
}
export default ShowResult;
