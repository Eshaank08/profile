export default function Component() {
  return (
    <div className="min-h-screen bg-[#f0f0f0] flex items-center justify-center px-8">
      <div className="max-w-md space-y-4 py-12 mx-auto">
        {/* Name */}
        <h1 className="text-black font-normal text-xl font-playfair-display">Hi, I&apos;m Eshaan Kansal</h1>

        {/* Main description */}
        <p className="text-black leading-relaxed text-base font-playfair-display">
          21 years old, INTJ. 
          <br />
          Indian, living in Germany. I call myself the jack of all trades.
          I am the marketing guy, a bit funny and mostly anxious.
        </p>

        <p className="text-black leading-relaxed text-base font-playfair-display">I used to play football, now I train like a hybrid athlete and eat burgers for cheatmeals.</p>
        <p className="text-black leading-relaxed text-base font-playfair-display">This is what I am doing</p>

        <p className="text-black leading-relaxed text-base font-playfair-display">Building the go-to platform around consulting.</p>

        <p className="text-black leading-relaxed text-base font-playfair-display">
          We help people connect with experts all around the world so they can get 1:1 mentorship.{" "}
          <a href="https://www.socialease.space" className="italic font-bold no-underline hover:opacity-80 text-base font-playfair-display">
            Socialease
          </a>
        </p>

        <p className="text-black leading-relaxed text-base font-playfair-display">
        We also help people become experts, and we advise other small and medium sized businesses. If you want to get in touch regarding that{" "}
          <a href="https://cal.com/eshaan-kansal" className="italic font-bold no-underline hover:opacity-80 text-base">
            Connect with me here.
          </a>
        </p>

        <p className="text-black leading-relaxed text-base font-playfair-display">
          I also created an AI chatbot which can mentor you for free if you don&apos;t like talking to someone. xD{" "}
          <a href="https://socialease.in" className="italic font-bold no-underline hover:opacity-80 text-base">
          <br />
            Socialease AI 
          </a>
        </p>

        <p className="text-black leading-relaxed text-base font-playfair-display">
          You will find me making vlogs on YouTube, sharing my perspectives and documenting my journey on all these
          platforms here:
        </p>

        {/* Links */}
        <div className="flex flex-wrap gap-3 text-black text-base font-playfair-display">
          <a href="https://www.youtube.com/@eshaankansal/videos" className="italic font-bold no-underline hover:opacity-80 text-base">
            YouTube
          </a>
          <a href="https://x.com/eshaankansal" className="italic font-bold no-underline hover:opacity-80 text-base">
            X(formerly twitter)
          </a>
          <a href="https://www.linkedin.com/in/eshaan-kansal-277876241/" className="italic font-bold no-underline hover:opacity-80 text-base">
            LinkedIn
          </a>
          <a href="https://www.instagram.com/eshaan.kansal" className="italic font-bold no-underline hover:opacity-80 text-base">
            Instagram
          </a>
        </div>
      </div>
    </div>
  )
}
