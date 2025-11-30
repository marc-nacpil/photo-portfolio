"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const TechStack = ({
  heading = "Trusted by these companies",
  logos = [
    {
      id: "logo-2",
      description: "Logo 2",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-wordmark.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-3",
      description: "Logo 3",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nextjs-wordmark.svg",
      className: "h-10 w-auto",
    },
    {
      id: "logo-5",
      description: "Logo 5",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-6",
      description: "Logo 6",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-7",
      description: "Logo 7",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-wordmark.svg",
      className: "h-4 w-auto",
    },
    {
      id: "logo-8",
      description: "Logo 8",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-wordmark.svg",
      className: "h-7 w-auto",
    },
  ],
}: Logos3Props) => {
  // Duplicate logos if fewer than 8 to ensure smooth auto-scroll
  const extendedLogos = logos.length < 8 ? [...logos, ...logos] : logos;

  return (
    <section className="pb-36" id="tech">
      <div className="container flex flex-col items-center text-center">
        <h1 className="text-pretty text-2xl font-bold lg:text-5xl">
          {heading}
        </h1>
      </div>
      <div className="pt-10 md:pt-16 lg:pt-20">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-7xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[
              AutoScroll({ playOnInit: true, stopOnInteraction: false }),
            ]}
          >
            <CarouselContent className="ml-0">
              {extendedLogos.map((logo, index) => (
                <CarouselItem
                  key={`${logo.id}-${index}`}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-10 flex shrink-0 items-center justify-center">
                    <img
                      src={logo.image}
                      alt={logo.description}
                      className={logo.className}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-12 to-transparent"></div>
          <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-12 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export { TechStack };
