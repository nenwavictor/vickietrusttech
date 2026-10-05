function Skeleton() {
  return (
    <div className="fixed inset-0 z-[99999] min-h-screen overflow-y-auto bg-[#020817]">

      {/* ================= NAVBAR ================= */}
      <div className="border-b border-white/10 bg-[#020817]/95 px-5 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">

          {/* Logo */}
          <div className="h-9 w-36 animate-pulse rounded-md bg-[#17233b]"></div>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <div className="h-4 w-14 animate-pulse rounded bg-[#17233b]"></div>
            <div className="h-4 w-16 animate-pulse rounded bg-[#17233b]"></div>
            <div className="h-4 w-16 animate-pulse rounded bg-[#17233b]"></div>
            <div className="h-4 w-20 animate-pulse rounded bg-[#17233b]"></div>
          </div>

          {/* Button */}
          <div className="h-10 w-28 animate-pulse rounded-lg bg-[#17233b]"></div>

        </div>
      </div>


      {/* ================= HERO ================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:py-24">

        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Hero text */}
          <div>

            {/* Small greeting */}
            <div className="h-4 w-40 animate-pulse rounded bg-[#17233b]"></div>

            {/* Heading */}
            <div className="mt-5 h-12 w-full max-w-xl animate-pulse rounded-lg bg-[#17233b]"></div>

            <div className="mt-3 h-12 w-4/5 animate-pulse rounded-lg bg-[#17233b]"></div>

            {/* Description */}
            <div className="mt-7 h-4 w-full max-w-lg animate-pulse rounded bg-[#17233b]"></div>

            <div className="mt-3 h-4 w-5/6 max-w-lg animate-pulse rounded bg-[#17233b]"></div>

            <div className="mt-3 h-4 w-3/5 max-w-lg animate-pulse rounded bg-[#17233b]"></div>

            {/* Buttons */}
            <div className="mt-8 flex gap-4">

              <div className="h-12 w-36 animate-pulse rounded-lg bg-[#17233b]"></div>

              <div className="h-12 w-32 animate-pulse rounded-lg bg-[#17233b]"></div>

            </div>

            {/* Social icons */}
            <div className="mt-8 flex gap-4">

              <div className="h-10 w-10 animate-pulse rounded-full bg-[#17233b]"></div>

              <div className="h-10 w-10 animate-pulse rounded-full bg-[#17233b]"></div>

              <div className="h-10 w-10 animate-pulse rounded-full bg-[#17233b]"></div>

              <div className="h-10 w-10 animate-pulse rounded-full bg-[#17233b]"></div>

            </div>

          </div>


          {/* Hero image placeholder */}
          <div className="flex justify-center md:justify-end">

            <div className="relative">

              {/* Blue glow */}
              <div className="absolute inset-0 scale-90 rounded-full bg-[#0770FA]/10 blur-3xl"></div>

              {/* Image frame */}
              <div className="relative h-[350px] w-[280px] animate-pulse rounded-2xl bg-[#17233b] sm:h-[420px] sm:w-[330px] md:h-[480px] md:w-[370px]">

                <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#243552]"></div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= ABOUT / SKILLS ================= */}
      <section className="mx-auto max-w-7xl px-5 py-16">

        <div className="mb-10">

          <div className="h-8 w-48 animate-pulse rounded-lg bg-[#17233b]"></div>

          <div className="mt-4 h-4 w-full max-w-2xl animate-pulse rounded bg-[#17233b]"></div>

          <div className="mt-3 h-4 w-4/5 max-w-2xl animate-pulse rounded bg-[#17233b]"></div>

        </div>


        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-white/5 bg-[#0a1224] p-5"
            >

              <div className="h-14 w-14 animate-pulse rounded-xl bg-[#17233b]"></div>

              <div className="mt-5 h-5 w-3/4 animate-pulse rounded bg-[#17233b]"></div>

              <div className="mt-4 h-4 w-full animate-pulse rounded bg-[#17233b]"></div>

              <div className="mt-2 h-4 w-5/6 animate-pulse rounded bg-[#17233b]"></div>

            </div>
          ))}

        </div>

      </section>


      {/* ================= PROJECTS ================= */}
      <section className="mx-auto max-w-7xl px-5 py-16">

        <div className="h-8 w-56 animate-pulse rounded-lg bg-[#17233b]"></div>

        <div className="mt-4 h-4 w-96 max-w-full animate-pulse rounded bg-[#17233b]"></div>


        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="overflow-hidden rounded-xl border border-white/5 bg-[#0a1224]"
            >

              {/* Project image */}
              <div className="h-52 animate-pulse bg-[#17233b]"></div>

              {/* Project content */}
              <div className="p-5">

                <div className="h-5 w-3/4 animate-pulse rounded bg-[#17233b]"></div>

                <div className="mt-4 h-4 w-full animate-pulse rounded bg-[#17233b]"></div>

                <div className="mt-2 h-4 w-4/5 animate-pulse rounded bg-[#17233b]"></div>

                <div className="mt-5 h-10 w-28 animate-pulse rounded-lg bg-[#17233b]"></div>

              </div>

            </div>
          ))}

        </div>

      </section>


      {/* ================= CONTACT ================= */}
      <section className="mx-auto max-w-7xl px-5 py-16">

        <div className="rounded-2xl border border-white/5 bg-[#0a1224] p-8 md:p-12">

          <div className="h-8 w-52 animate-pulse rounded-lg bg-[#17233b]"></div>

          <div className="mt-5 h-4 w-full max-w-xl animate-pulse rounded bg-[#17233b]"></div>

          <div className="mt-3 h-4 w-4/5 max-w-xl animate-pulse rounded bg-[#17233b]"></div>

          <div className="mt-8 h-12 w-36 animate-pulse rounded-lg bg-[#17233b]"></div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <div className="border-t border-white/10 px-5 py-8">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">

          <div className="h-5 w-40 animate-pulse rounded bg-[#17233b]"></div>

          <div className="flex gap-3">

            <div className="h-9 w-9 animate-pulse rounded-full bg-[#17233b]"></div>

            <div className="h-9 w-9 animate-pulse rounded-full bg-[#17233b]"></div>

            <div className="h-9 w-9 animate-pulse rounded-full bg-[#17233b]"></div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Skeleton;