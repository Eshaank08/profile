import { cn } from "@/lib/utils";

const reviews = [
  {
    name: "Alex",
    username: "Marketing Professional",
    body: "I am really thankful for giving me advice for my business; it's very helpful for me in figuring out how to reschedule my work.",
    img: "https://avatar.vercel.sh/alex",
  },
  {
    name: "रोहित", // Hindi name for Hinglish testimonial
    username: "Business Owner",
    body: "Appse baat krke sach mai bahut acha laga aur appki wajah se mujhe market ka update pata chal paya.",
    img: "https://avatar.vercel.sh/rohit",
  },
  {
    name: "Jessica",
    username: "Entrepreneur",
    body: "Thanks Eshaan for giving me your time and guidance it will definitely be going to help me in the field.",
    img: "https://avatar.vercel.sh/jessica",
  },
  {
    name: "Michael",
    username: "Student",
    body: "Thank you for your guidance sir. It helped me a lot... I'm more clear of my goals now. And I'll surely follow all of your tips and strategies to grow more.",
    img: "https://avatar.vercel.sh/michael",
  },
  {
    name: "Sarah",
    username: "Freelancer",
    body: "Thanks alot for the ton of values. I really appreciate you. Helping a strange guy.. awesome.",
    img: "https://avatar.vercel.sh/sarah",
  },
  {
    name: "David",
    username: "Professional",
    body: "It was a great call thank you for giving me a right direction of earning and learning and I get a clear way to look forward.",
    img: "https://avatar.vercel.sh/david",
  },
  {
    name: "Emma",
    username: "Agency Owner",
    body: "I am aspiring to start my own digital marketing agency but had doubts. Had a 1:1 consultation with Eshaan who patiently resolved all my queries.",
    img: "https://avatar.vercel.sh/emma",
  },
  {
    name: "James",
    username: "Marketing Agency",
    body: "I was having issues with acquiring new clients. Eshaan helped me with the framework, leads, management. I am really happy with his strategy.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-52 w-80 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function TestimonialsMarquee() {
  return (
    <div className="mt-16 relative flex w-full flex-col items-center justify-center overflow-hidden">
      <h2 className="text-2xl font-medium mb-8 text-center">What People Are Saying</h2>
      
      {/* First row - RIGHT direction */}
      <div className="w-full overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content">
            {firstRow.map((review) => (
              <div key={review.username} className="px-4">
                <ReviewCard {...review} />
              </div>
            ))}
            {/* Duplicate to create continuous loop */}
            {firstRow.map((review) => (
              <div key={`${review.username}-dup`} className="px-4">
                <ReviewCard {...review} />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Gap between rows */}
      <div className="h-12"></div>
      
      {/* Second row - LEFT direction (reversed) */}
      <div className="w-full overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content-reverse">
            {secondRow.map((review) => (
              <div key={review.username} className="px-4">
                <ReviewCard {...review} />
              </div>
            ))}
            {/* Duplicate to create continuous loop */}
            {secondRow.map((review) => (
              <div key={`${review.username}-dup`} className="px-4">
                <ReviewCard {...review} />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
