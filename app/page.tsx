import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-slate-800">
      <header className="flex items-center  w-full max-w-3xl px-16 py-4 bg-white dark:bg-slate-800">
        <div className="flex flex-col items-center relative pb-8">
          <Image
            src="/archeroc-logo.png"
            alt="Logo"
            width={150}
            height={150}
          />
          <div className="text-5xl absolute bottom-0 -left-12">
            ArcheROC
          </div>
        </div>
      </header>
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-slate-800 sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            ArcheROC Purpose:
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-200">
            There are origins or first beginnings to the basics of life.  The Greek word for origin or first beginning is "arche" (ἀρχή).
            Origins or first beginnings are the foundation of life. A solid foundation is like a rock or boulder that is unmovable.
            ArcheROC is a collection of mobile applications that are designed to help people build a solid foundation for their lives.
          </p>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-200">
            Time Management is the first application in the ArcheROC collection.  It is a mobile application that helps people manage their time more effectively
            by creating a schedule for a day, week, month, or year. This schedule is a tool to help people see how committed they are to their schedule.
            As well as making notes on the schedule to better understand it and improve their time management skills.
          </p>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-200">
            Tempo Timer is the second application in the ArcheROC collection.  It is a mobile application that helps them keep track of tempo during their exercises.
            It is a tool to help people see how committed they are to their exercise. Its main functionality is keep track of tempo for their exercises and not waste
            time on keeping track of tempo or reps for the exercises. It is a tool to hit the tempo and reps for their exercises without much thinking, as you just move
            your body parts to hit the tempo and reps for their exercises.
          </p>
        </div>
      </main>
    </div>
  );
}
