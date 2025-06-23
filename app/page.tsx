export default function Component() {
  return (
    <div className="min-h-screen bg-[#f5f5dc] flex items-center justify-center px-8">
      <div className="max-w-2xl space-y-6">
        {/* Name */}
        <h1 className="text-black font-normal text-lg gazette-font">Eshaan Kansal</h1>

        {/* Main description */}
        <p className="text-black leading-relaxed gazette-font">
          21 years old, INTJ. Indian, living in Germany.
          <br />
          I am the marketing guy, a bit funny and mostly anxious.
        </p>

        <p className="text-black leading-relaxed larsseit-font">I used to play football, now I train like a hybrid athlete and eat burgers for cheatmeals.</p>
        <p className="text-black leading-relaxed larsseit-font">This is what I am doing</p>

        <p className="text-black leading-relaxed larsseit-font">Building the go-to platform around consulting.</p>

        <p className="text-black leading-relaxed larsseit-font">
          We help people connect with experts all around the world so they can get 1:1 mentorship.{" "}
          <a href="https://www.socialease.com" className="underline hover:no-underline italic larsseit-font">
            Socialease
          </a>
        </p>

        <p className="text-black leading-relaxed larsseit-font">
        We also help people become experts, and we advise other small and medium sized businesses. If you want to get in touch regarding that{" "}
          <a href="https://cal.com/eshaan-kansal" className="underline hover:no-underline italic">
            Connect with me here.
          </a>
        </p>

        <p className="text-black leading-relaxed larsseit-font">
          I also created an AI chatbot which can mentor you for free if you don&apos;t like talking to someone.{" "}
          <a href="https://socialease.in" className="underline hover:no-underline italic">
            Socialease AI 
          </a>
        </p>

        <p className="text-black leading-relaxed larsseit-font">
          You will find me making vlogs on YouTube, sharing my perspectives and documenting my journey on all these
          platforms here:
        </p>

        {/* Links */}
        <div className="flex flex-wrap gap-4 text-black larsseit-font">
          <a href="https://www.youtube.com/@eshaankansal/videos" className="underline hover:no-underline italic">
            youtube
          </a>
          <a href="https://x.com/eshaankansal" className="underline hover:no-underline italic">
            twitter
          </a>
          <a href="https://www.linkedin.com/in/eshaan-kansal-277876241/" className="underline hover:no-underline italic">
            linkedin
          </a>
          <a href="https://www.instagram.com/eshaan.kansal" className="underline hover:no-underline italic">
            instagram
          </a>
        </div>
      </div>
    </div>
  )
}
