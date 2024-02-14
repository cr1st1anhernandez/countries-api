import { Button, Image, Link } from "@nextui-org/react";
import { IoIosArrowForward } from "react-icons/io";

export default function HomePage(): JSX.Element {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pt-8 xl:pt-32">
      <div className="flex flex-col xl:flex-row justify-between items-center">
        <article className="flex flex-col gap-4">
          <h1>Countries Api</h1>
          <p className="text-2xl text-zinc-500 font-bold text-pretty">
            Your API to get curiosities about different countries.
          </p>
          <Button color="primary" className="font-bold text-lg w-fit" endContent={<IoIosArrowForward />}>
            View Docs
          </Button>
        </article>
        <Image src="/assets/images/principalImage.svg" width={600} height={600} alt="PrincipalImage" />
      </div>
      <div className="flex flex-col xl:flex-row justify-end items-center">
        <p className="text-xl text-zinc-500 font-bold text-pretty">Inspired by <Link isExternal href="https://fakeapi.platzi.com/" className="text-teal-500 text-xl">FakeStoreApi</Link></p>
      </div>
    </main>
  );
}
