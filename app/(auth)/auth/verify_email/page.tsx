'use client';

import React, { Suspense } from "react";
import EmailVerification from "../../../../components/EmailVerification";

const VerifyEmailPage: React.FC = () => {
  return (
    <Suspense fallback={<div className="text-center mt-20">Loading...</div>}>
      <EmailVerification />
    </Suspense>
  );
};

export default VerifyEmailPage;
