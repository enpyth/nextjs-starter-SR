import Hero from "@/features/home/hero"
import CarouselCard from "@/components/carousel/card"

const slides = [
  {
    id: 1,
    image: "/placeholder.jpg",
    title: "",
    contents: [
      "companyHistory1",
    ]
  },
  {
    id: 2,
    image: "/placeholder.jpg",
    title: "",
    contents: [
      "companyHistory2",
    ]
  },
  {
    id: 3,
    image: "/placeholder.jpg",
    title: "",
    contents: [
      "companyHistory3",
    ]
  },
]

export default function AboutUs() {
  return (
    <main className="flex-grow">
      <Hero imageSrc="/banner/banner-about.jpeg" title="About Us" />
      <CarouselCard slides={slides} />
    </main>
  )
}

