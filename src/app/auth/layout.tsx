import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Auth',
  description: 'Generated by create next app',
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="min-h-screen">{children}</main>;
}
