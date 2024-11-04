
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Kickstart = () => {
  return (
    <section className="text-center text-primary-foreground">
      <div className="container">
        <div className="mb-12 rounded-xl bg-blue-500 px-2.5 pb-7 pt-16">
          <h1 className="mb-5 text-4xl font-bold">
            <span className="nht__highlight">Kickstart2</span> your test
            automation journey
          </h1>

          <p className="mb-7 font-semibold">
            Use TXX to run tests directly on our test lab with 3000+ real
            Android devices & 1000+ browser/OS combinations or use TXX Agent to
            run tests on your local workstation.
          </p>

          <div className="mb-8 flex justify-center gap-8">
            <Button variant={"secondary"} size={"lg"}>
              Sign up for free
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              Book a free demo
            </Button>
          </div>

          <p className="text-sm font-semibold">
            Feel free to
            <Link href="#">talk to our solutions team</Link> for a consultation.
          </p>
        </div>
      </div>
    </section>
  );
};
