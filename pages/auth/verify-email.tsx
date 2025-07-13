import { AuthLayout } from '@/components/layouts';
import type { ReactElement } from 'react';

const VerifyEmail = () => {
  return <></>
};

VerifyEmail.getLayout = function getLayout(page: ReactElement) {
  return (
    <AuthLayout heading="confirm-email" description="confirm-email-description">
      {page}
    </AuthLayout>
  );
};

export const getServerSideProps = async () => {
  return {
 props:{}, // No translation for now
  };
};

export default VerifyEmail;
