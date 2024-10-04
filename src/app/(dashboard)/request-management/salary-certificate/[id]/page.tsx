'use client';
import dynamic from 'next/dynamic';
// import SalaryCertificateTemplate from '@/components/templates/salary-certificate/Salary-certificate-template';
import { useParams } from 'next/navigation';
const SalaryCertificateTemplate = dynamic(
  () =>
    import(
      '@/components/templates/salary-certificate/Salary-certificate-template'
    ),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
);
type Params = {
  id: string;
};

export default function SalaryCertificateTemplatePage() {
  const { id } = useParams<Params>();

  return (
    <>
      <SalaryCertificateTemplate id={id} />
    </>
  );
}
