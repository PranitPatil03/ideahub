import clsx from "clsx";
import Image from "next/image";

const featuredTestimonial = {
  body: "IdeaHub helped me find the perfect team to bring my app idea to life. The feedback and validation I received were invaluable.",
  author: {
    name: "Alex Johnson",
    handle: "alex_j",
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    logoUrl: "https://via.placeholder.com/40",
  },
};

const testimonials = [
  [
    [
      {
        body: "The collaborator matching feature is fantastic! I quickly found experts to help me with my project.",
        author: {
          name: "Samantha Lee",
          handle: "samanthalee",
          imageUrl: "https://randomuser.me/api/portraits/women/1.jpg",
        },
      },
      {
        body: "IdeaHub's resource hub has been a game-changer for my startup. The articles and mentorship opportunities are top-notch.",
        author: {
          name: "Michael Brown",
          handle: "michael_b",
          imageUrl: "https://randomuser.me/api/portraits/men/2.jpg",
        },
      },
      {
        body: "Love how easy it is to form a team and start collaborating. IdeaHub is a must-have for any tech enthusiast.",
        author: {
          name: "Linda Garcia",
          handle: "lindag",
          imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
        },
      },
    ],
    [
      {
        body: "The feedback and validation from the community helped refine my idea and make it market-ready.",
        author: {
          name: "James Wilson",
          handle: "james_w",
          imageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
        },
      },
    ],
  ],
  [
    [
      {
        body: "IdeaHub is the perfect platform for connecting with like-minded individuals and bringing ideas to life.",
        author: {
          name: "Emily Davis",
          handle: "emilyd",
          imageUrl: "https://randomuser.me/api/portraits/women/3.jpg",
        },
      },

    ],
    [
      {
        body: "Great platform for idea and problem submission. Highly recommend it to anyone looking to innovate.",
        author: {
          name: "Sophia Taylor",
          handle: "sophiat",
          imageUrl: "https://randomuser.me/api/portraits/women/4.jpg",
        },
      },
      {
        body: "IdeaHub has streamlined our team's workflow and boosted our productivity significantly.",
        author: {
          name: "Daniel Anderson",
          handle: "daniela",
          imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
        },
      },
      {
        body: "The support and resources available on IdeaHub have been invaluable to our project's success.",
        author: {
          name: "Robert Martinez",
          handle: "robert_m",
          imageUrl: "https://randomuser.me/api/portraits/men/4.jpg",
        },
      },
    ],
  ],
];

export function Testimonials() {
  return (
    <div className="relative isolate bg-white pt-24 sm:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl flex flex-col items-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight border bg-secondary-bg rounded-2xl w-fit text-center px-3 py-1">
            Testimonials
          </h2>
          <p className="mt-2 text-xl md:text-3xl font-bold tracking-tight text-gray-900">
            What our users are saying
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
              <Image
                className="h-10 w-10 flex-none rounded-full bg-gray-50"
                src={featuredTestimonial.author.imageUrl}
                alt=""
                width={40}
                height={40}
              />
              <div className="flex-auto">
                <div className="font-semibold">
                  {featuredTestimonial.author.name}
                </div>
                <div className="text-gray-600">{`@${featuredTestimonial.author.handle}`}</div>
              </div>
              <Image
                className="h-8 w-auto flex-none"
                src={featuredTestimonial.author.logoUrl}
                alt=""
                height={32}
                width={98}
                unoptimized
              />
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 xl:contents xl:space-y-0"
            >
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={clsx(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                      ? "xl:row-span-2"
                      : "xl:row-start-1",
                    "space-y-8",
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author.handle}
                      className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                    >
                      <blockquote className="text-gray-900">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <Image
                          className="h-10 w-10 rounded-full bg-gray-50"
                          src={testimonial.author.imageUrl}
                          alt=""
                          width={40}
                          height={40}
                        />
                        <div>
                          <div className="font-semibold">
                            {testimonial.author.name}
                          </div>
                          {testimonial.author.handle ? (
                            <div className="text-gray-600">
                              @{testimonial.author.handle}
                            </div>
                          ) : undefined}
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
