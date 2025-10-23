export const metadata = {
  title: 'CitizenHub - FFT Cognitive Foundation',
  description: 'Plateforme assistance citoyenne avec IA locale, OCR documents et interface vocale simplifiée',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
