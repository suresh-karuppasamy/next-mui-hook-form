import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full">
      <div className="flex flex-col items-center justify-center w-1/2 bg-gray-50">
        <div className="mb-8">
          <Image
            src="/logo.png"
            alt="Logo"
            width={150}
            height={50}
            priority
            className="object-contain"
          />
        </div>
        <div className="w-full max-w-md px-6 py-8">
          {children}
        </div>
      </div>
      <div className="w-1/2 relative">
        <Image
          src="/background.jpeg"
          alt="Auth image"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
    </main>
  );
}
