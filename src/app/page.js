import { auth, signIn, signOut } from "@/auth";
import prisma from '@/lib/db'

export default async function Home() {
  const session = await auth();
  const students = await prisma.student.findMany()

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>home</h1>
      {session?.user ? (
        <div>
          <div>{session?.user.name}</div>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button type="submit">Sign out</button>
          </form>
        </div>
      ) : (
        <form
          action={async () => {
            "use server";
            await signIn("microsoft-entra-id");
          }}
        >
          <button type="submit">Sign in</button>
        </form>
      )}
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <pre>{JSON.stringify(students, null, 2)}</pre>


    </div>
  );
}
