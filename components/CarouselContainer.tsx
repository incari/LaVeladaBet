import { Carousel } from "react-responsive-carousel";

type CarouselType = {
  children: any;
};
export function CarouselContainer({ children }: CarouselType) {
  return <Carousel showThumbs={true}>{children}</Carousel>;
}
