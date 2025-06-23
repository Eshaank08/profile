export default function Component() {
  return (
    <div className="min-h-screen bg-[#f5f5dc] flex items-center justify-center px-8">
      <div className="max-w-2xl space-y-6">
        {/* Name */}
        <h1 className="text-black font-normal text-lg">Eshaan Kansal</h1>

        {/* Main description */}
        <p className="text-black leading-relaxed">
          21 years old, INTJ. Indian, living in Germany. I am the marketing guy, a bit funny and mostly anxious.
        </p>

        <p className="text-black leading-relaxed">Building the go-to platform around consulting.</p>

        <p className="text-black leading-relaxed">
          We help people connect with experts all around the world so they can get 1:1 mentorship.{" "}
          <a href="#" className="underline hover:no-underline">
            Link
          </a>
        </p>

        <p className="text-black leading-relaxed">
          We train experts to build and help small and medium sized businesses.{" "}
          <a href="#" className="underline hover:no-underline">
            Link
          </a>
        </p>

        <p className="text-black leading-relaxed">
          I also created an AI chatbot which can mentor you for free if you don't like talking to someone.{" "}
          <a href="#" className="underline hover:no-underline">
            Link
          </a>
        </p>

        <p className="text-black leading-relaxed">
          I used to play football, now I train like a hybrid athlete and eat burgers for fun.
        </p>

        <p className="text-black leading-relaxed">
          You will find me making vlogs on YouTube, sharing my perspectives and documenting my journey on all these
          platforms here:
        </p>

        {/* Links */}
        <div className="space-x-4 text-black">
          <a href="#" className="underline hover:no-underline">
            youtube
          </a>
          <a href="#" className="underline hover:no-underline">
            twitter
          </a>
          <a href="#" className="underline hover:no-underline">
            linkedin
          </a>
          <a href="#" className="underline hover:no-underline">
            instagram
          </a>
          <a href="mailto:eshaan@example.com" className="underline hover:no-underline">
            eshaan@example.com
          </a>
        </div>
      </div>
    </div>
  )
}
