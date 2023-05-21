import UploadCard from "@/components/UploadCard";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-background-primary relative h-screen w-screen overflow-auto flex justify-center items-center">
      <UploadCard />
      <p className="text-secondary fixed bottom-4">Created by
        <Link href="https://github.com/atul24112001" target="_blank">&nbsp;atul24112001&nbsp;</Link>
        * devChallenge</p>
    </main>
  )
}
