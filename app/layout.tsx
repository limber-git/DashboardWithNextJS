import { montserrat } from './ui/fonts';
import './ui/global.css';
import { Metadata } from 'next';

export const meta: Metadata = {
  title: 'LimberDeveloper001',
  description: 'Limbeloper is the best company for developers.',
  metadataBase: new URL('https://companydeveloper.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>        {children}
        <footer>
          <p className="text-center text-gray-500 text-sm mt-4">
            &copy; 2024 CompanyDEVELOPER. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
