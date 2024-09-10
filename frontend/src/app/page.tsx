import Welcome from "./components/welcome";

export default function Home() {
   return (
      <main className="flex min-h-screen  flex-col w-full">
         <div className="flex flex-col w-full">
            <span className="text-4xl font-sans font-bold">
               Overview
            </span>

            <Welcome />
         </div>
      </main>
   );
}
