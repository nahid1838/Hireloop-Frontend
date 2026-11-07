import {
  BriefcaseBusiness,
  ChartNoAxesColumnIncreasing,
  MapPin,
  Search,
  Star,
  UserSearch,
} from "lucide-react"

const trendingPositions = [
  "Product Designer",
  "AI Engineering",
  "Dev-ops Engineer",
]

const stats = [
  { icon: BriefcaseBusiness, value: "50K", label: "Active Jobs" },
  { icon: ChartNoAxesColumnIncreasing, value: "12K", label: "Companies" },
  { icon: UserSearch, value: "2M", label: "Job Seekers" },
  { icon: Star, value: "97%", label: "Satisfaction Rate" },
]

export function Hero() {
  return (
    <section className="relative pb-16 lg:pb-[72px]">
      <div className="mx-auto flex w-full max-w-[784px] flex-col items-center px-4 pt-20 text-center sm:px-6 sm:pt-28 lg:px-0 lg:pt-[176px]">
        {/* Eyebrow badge */}
        <div className="flex w-full items-center justify-center">
          <span
            aria-hidden="true"
            className="hidden h-px w-16 bg-[linear-gradient(90deg,rgba(1,0,36,0.7),rgba(168,168,168,0.7))] sm:block"
          />

          <div className="rounded-3xl bg-[linear-gradient(180deg,rgba(168,168,168,0.3),rgba(153,153,153,0))] p-px">
            <div className="flex h-[42px] items-center gap-3 rounded-[23px] bg-[linear-gradient(120deg,#474747_0%,#010102_72%)] px-4 shadow-[inset_0_0_6px_6px_rgba(0,0,0,0.1)] sm:h-12 sm:gap-4 sm:px-6">
              <span
                aria-hidden="true"
                className="text-xl leading-none sm:text-2xl"
              >
                💼
              </span>
              <span className="font-space text-xs leading-[1.2] whitespace-nowrap text-white sm:text-base lg:text-xl">
                50,000+ new jobs this month
              </span>
            </div>
          </div>

          <span
            aria-hidden="true"
            className="hidden h-px w-16 bg-[linear-gradient(90deg,rgba(168,168,168,0.7),rgba(1,0,36,0.7))] sm:block"
          />
        </div>

        {/* Headline */}
        <h1 className="mt-8 font-manrope text-[34px] leading-[1.15] font-bold tracking-[-0.02em] text-white sm:text-[44px] lg:text-[56px]">
          Find Your Dream Job Today
        </h1>
        <p className="mt-4 max-w-[784px] font-manrope text-base leading-[1.6] text-white/70 sm:text-lg lg:text-xl">
          HireLoop connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role — faster.
        </p>

        {/* Search */}
        <div className="mt-10 w-full max-w-[784px] lg:mt-12">
          <div className="flex flex-col gap-2 rounded-2xl border border-white/20 bg-[#101010] p-2 lg:h-16 lg:flex-row lg:items-center lg:gap-0 lg:py-0 lg:pr-2 lg:pl-6">
            <div className="flex h-11 items-center gap-2 px-2 lg:h-full lg:flex-1 lg:px-0">
              <Search
                aria-hidden="true"
                className="size-5 shrink-0 text-white lg:size-6"
                strokeWidth={1.5}
              />
              <input
                type="text"
                aria-label="Job title, skill or company"
                placeholder="Job title, skill or company"
                className="h-full w-full min-w-0 bg-transparent font-manrope text-sm leading-[1.7] text-white placeholder:text-white/80 focus:outline-none lg:text-base"
              />
            </div>

            <span
              aria-hidden="true"
              className="mx-4 h-px bg-white/10 lg:mx-6 lg:h-[23px] lg:w-px lg:bg-white/20"
            />

            <div className="flex h-11 items-center gap-2 px-2 lg:h-full lg:flex-1 lg:px-0">
              <MapPin
                aria-hidden="true"
                className="size-5 shrink-0 text-[#5C53FE] lg:size-6"
                strokeWidth={1.5}
              />
              <input
                type="text"
                aria-label="Location or Remote"
                placeholder="Location or Remote"
                className="h-full w-full min-w-0 bg-transparent font-manrope text-sm leading-[1.7] text-white placeholder:text-white/80 focus:outline-none lg:text-base"
              />
            </div>

            <button
              type="button"
              aria-label="Search jobs"
              className="mt-1 flex h-12 w-full cursor-pointer items-center justify-center rounded-xl bg-[#5C53FE] transition-colors hover:bg-[#6A61FF] lg:mt-0 lg:size-12 lg:w-12 lg:shrink-0"
            >
              <Search
                aria-hidden="true"
                className="size-5 text-white"
                strokeWidth={2}
              />
            </button>
          </div>
        </div>

        {/* Trending positions */}
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <span className="font-manrope text-sm leading-[1.3] text-white/70 sm:text-base">
            Trending Position
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {trendingPositions.map((position) => (
              <span
                key={position}
                className="rounded-3xl border border-white/10 bg-[#1A1A1B] px-3 py-1.5 font-manrope text-sm leading-[1.5] whitespace-nowrap text-white"
              >
                {position}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="relative mx-auto mt-24 w-full max-w-[1440px] px-4 sm:mt-40 sm:px-6 lg:mt-[358px] lg:px-12 xl:px-[60px]">
        <p className="mx-auto max-w-[600px] text-center font-instrument text-[28px] leading-[1.3] font-medium tracking-[-1px] text-white/70 sm:text-[34px] lg:text-[40px]">
          Assisting over 15,000 job seekers find their dream positions.
        </p>

        <div className="mx-auto mt-12 grid max-w-[1320px] grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon

            return (
              <div
                key={stat.label}
                className="flex min-h-[220px] flex-col justify-between rounded-2xl border border-white/10 bg-[linear-gradient(135deg,#010102_0%,#313131_100%)] p-6 lg:min-h-[254px]"
              >
                <Icon
                  aria-hidden="true"
                  className="size-6 text-white"
                  strokeWidth={1.5}
                />

                <div>
                  <p className="font-jakarta text-[44px] leading-[1.15] font-semibold tracking-[-0.02em] text-white lg:text-[56px]">
                    {stat.value}
                  </p>
                  <p className="mt-4 font-inter-tight text-base leading-[1.65] text-white lg:text-lg">
                    {stat.label}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
