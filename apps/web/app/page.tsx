import Image from "next/image"

import { Hero } from "@/components/home/hero"
import { SiteHeader } from "@/components/home/site-header"

export default function Page() {
  return (
    <main className="relative min-h-svh overflow-hidden bg-[#010103]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[1400px] overflow-hidden sm:h-[1700px] lg:h-[1882px]"
      >
        <div className="absolute top-[250px] left-1/2 h-[1500px] w-[1900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(74,64,224,0.18)_0%,rgba(40,20,90,0.072)_55%,transparent_78%)] blur-[40px]" />

        <Image
          src="/globe.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />

        <div className="absolute inset-x-0 top-0 h-[1000px] [mask-image:linear-gradient(180deg,black_0%,black_55%,transparent_100%)]">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,1,3,0.4)_0%,rgba(1,1,3,0.3)_12%,rgba(1,1,3,0.08)_30%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_26%,rgba(80,2,76,0.3)_0%,rgba(70,2,66,0.18)_35%,transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_75%_at_50%_28%,transparent_55%,rgba(1,1,3,0.22)_100%)]" />
        </div>
      </div>

      <div className="relative">
        <SiteHeader />
        <Hero />
      </div>
    </main>
  )
}
