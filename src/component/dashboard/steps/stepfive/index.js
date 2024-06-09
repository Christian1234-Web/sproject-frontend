import React from "react";
import UploadCertificate from "./upload_certificate";
import Form from "./forms";
import { Spinner } from "reactstrap";

const Index = ({
  certificateTitle,
  setCertificateTitle,
  certificateFile,
  setCertificateFile,
  handleUpdateProfile,
  loading
}) => {
  return (
    <>
      <div className="pl-1">
        <div className="flex justify-between">
          <div>
            <h1 className="text-sm font-semibold text-neutral-600 max-md:max-w-full">
              Certifcations
            </h1>
            <p className="text-xs text-zinc-500 max-md:max-w-full">
              add your certificate here
            </p>
          </div>
          <div>
           {loading && <Spinner color="primary" />}
          </div>
        </div>
      </div>
      <br />
      <Form
        certificateTitle={certificateTitle}
        setCertificateTitle={setCertificateTitle}
      />
      <br />
      <UploadCertificate
        certificateFile={certificateFile}
        setCertificateFile={setCertificateFile}
        handleUpdateProfile={handleUpdateProfile}
      />
      <br />
      <br />
    </>
  );
};

export default Index;
