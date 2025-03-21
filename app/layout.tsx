import { montserrat } from './ui/fonts';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>

        {children}
        <footer>
          <p className="text-center text-gray-500 text-sm mt-4">
            &copy; 2024 CompanyDEVELOPER. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
