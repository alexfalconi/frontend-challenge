import clsx from "clsx";
import { Children } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = {
	autoPlay?: boolean;
	autoPlaySpeed?: number;
	infinite?: boolean;
	dots?: boolean;
	dotsBlock?: boolean;
	arrows?: boolean;
	swipeable?: boolean;
	draggable?: boolean;
	mousewheel?: boolean;
	slidesToSlide?: number;
	tabletBreakpointMin?: number;
	desktopBreakpointMin?: number;
	mobileBreakpointItems?: number;
	tabletBreakpointItems?: number;
	desktopBreakpointItems?: number;
	children?: React.ReactNode;
};

import "./ACarousel.scss";

export function ACarousel({
	autoPlay = false,
	autoPlaySpeed = 6000,
	infinite = false,
	dots = false,
	dotsBlock = false,
	arrows = false,
	swipeable = false,
	draggable = false,
	mousewheel = false,
	slidesToSlide = 1,
	tabletBreakpointMin = 580,
	desktopBreakpointMin = 1024,
	mobileBreakpointItems = 1,
	tabletBreakpointItems = 1,
	desktopBreakpointItems = 1,
	children,
}: Props) {
	return (
		<Swiper
			className={clsx(dotsBlock && "dots_block")}
			modules={[Autoplay, Navigation, Pagination]}
			autoplay={autoPlay ? { delay: autoPlaySpeed, disableOnInteraction: false } : false}
			loop={infinite}
			pagination={dots ? { clickable: true } : false}
			navigation={arrows}
			draggable={draggable}
			mousewheel={mousewheel}
			allowTouchMove={swipeable}
			slidesPerGroup={slidesToSlide}
			slidesPerView={mobileBreakpointItems}
			spaceBetween={30}
			autoHeight={true}
			breakpoints={{
				[tabletBreakpointMin]: { slidesPerView: tabletBreakpointItems },
				[desktopBreakpointMin]: { slidesPerView: desktopBreakpointItems },
			}}>
			{Children.map(children, (child, i) => (
				<SwiperSlide key={i}>{child}</SwiperSlide>
			))}
		</Swiper>
	);
}
