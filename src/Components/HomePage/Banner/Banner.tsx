import React from "react";
import "./Banner.scss";
import banner from "../../../Assets/images/Banner.png";
import ArrowDown from '../../Icons/ArrowDown';
const Banner = () => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = React.useState(0);
  React.useLayoutEffect(() => {
    let isNotAnimation = false
    if (ref.current !== null) {
      setWidth(ref.current.offsetWidth);

    }
    const element = ref.current;
    if (element) {
      const imgElements = element.querySelectorAll('.banner-img');
      if (window.innerWidth < 577)
        (imgElements[0] as HTMLElement).style.maxWidth = `70%`;
      else
        (imgElements[0] as HTMLElement).style.maxWidth = `50.8125%`;
    }
    const handleScroll = () => {
      if (element) {
        const imgElements = element.querySelectorAll('.banner-img');
        const pElements = element.querySelectorAll('.banner-img p');
        const svgElements = element.querySelectorAll('.banner-img svg');
        const spanElements = element.querySelectorAll('span');
        if (imgElements.length > 0) {
          const verticalScrollPosition = window.scrollY;
          if (window.innerWidth < 577) {
            const percentage = (verticalScrollPosition / (65 + 70)) * 100;
            if (verticalScrollPosition <= 42 && !isNotAnimation) {
              console.log(verticalScrollPosition);

              (imgElements[0] as HTMLElement).style.maxWidth = `calc(70% + ${percentage}%)`;
              (imgElements[0] as HTMLElement).style.marginTop = `${verticalScrollPosition * 3 * -1}px`
              if (pElements) {
                const verticalScrollPosition = window.scrollY;
                (pElements[0] as HTMLElement).style.marginTop = `calc(-125px + ${verticalScrollPosition * 5}px)`
              }
              if (svgElements) {
                const verticalScrollPosition = window.scrollY;
                (svgElements[0] as HTMLElement).style.opacity = `calc(${verticalScrollPosition / 65} * 100%)`
              }
              if (spanElements) {
                const verticalScrollPosition = window.scrollY;
                spanElements[0].style.marginBottom = `${verticalScrollPosition * -1}px`
              }
            }
            else {
              spanElements[0].style.marginBottom = `-40px`;
              (pElements[0] as HTMLElement).style.marginTop = `80px`;
              (svgElements[0] as HTMLElement).style.opacity = `1`;
              (imgElements[0] as HTMLElement).style.maxWidth = `100%`;
              (imgElements[0] as HTMLElement).style.marginTop = `-123px`
              isNotAnimation = true

            }
          }
          else if (window.innerWidth < 993) {
            const percentage = (verticalScrollPosition / (65 + 70)) * 100;
            if (verticalScrollPosition <= 42 && !isNotAnimation) {
              console.log(verticalScrollPosition);

              (imgElements[0] as HTMLElement).style.maxWidth = `calc(70% + ${percentage}%)`;
              (imgElements[0] as HTMLElement).style.marginTop = `${verticalScrollPosition * 3 * -1}px`
              if (pElements) {
                const verticalScrollPosition = window.scrollY;
                (pElements[0] as HTMLElement).style.marginTop = `calc(-125px + ${verticalScrollPosition * 5}px)`
              }
              if (svgElements) {
                const verticalScrollPosition = window.scrollY;
                (svgElements[0] as HTMLElement).style.opacity = `calc(${verticalScrollPosition / 65} * 100%)`
              }
              if (spanElements) {
                const verticalScrollPosition = window.scrollY;
                spanElements[0].style.marginBottom = `${verticalScrollPosition * -1}px`
              }
            }
            else {
              spanElements[0].style.marginBottom = `-40px`;
              (pElements[0] as HTMLElement).style.marginTop = `80px`;
              (svgElements[0] as HTMLElement).style.opacity = `1`;
              (imgElements[0] as HTMLElement).style.maxWidth = `100%`;
              (imgElements[0] as HTMLElement).style.marginTop = `-123px`
              isNotAnimation = true

            }
          }
          else {
            const percentage = (verticalScrollPosition / (200 + 50.8125)) * 100;
            if (verticalScrollPosition <= 126 && !isNotAnimation) {

              (imgElements[0] as HTMLElement).style.maxWidth = `calc(50.8125% + ${percentage}%)`;
              (imgElements[0] as HTMLElement).style.marginTop = `${verticalScrollPosition * -1}px`
              if (pElements) {
                const verticalScrollPosition = window.scrollY;
                (pElements[0] as HTMLElement).style.marginTop = `calc(-250px + ${verticalScrollPosition * 2.5}px)`
              }
              if (svgElements) {
                const verticalScrollPosition = window.scrollY;
                (svgElements[0] as HTMLElement).style.opacity = `calc(${verticalScrollPosition / 126} * 100%)`
              }
              if (spanElements) {
                const verticalScrollPosition = window.scrollY;
                spanElements[0].style.marginBottom = `${verticalScrollPosition * -1}px`
              }
              console.log(isNotAnimation);

            }
            else {
              spanElements[0].style.marginBottom = `-170px`;
              (pElements[0] as HTMLElement).style.marginTop = `65px`;
              (svgElements[0] as HTMLElement).style.opacity = `1`;
              (imgElements[0] as HTMLElement).style.maxWidth = `100%`;
              (imgElements[0] as HTMLElement).style.marginTop = `-123px`
              isNotAnimation = true

            }
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  return (
    <>
      <section ref={ref} className='banner'>
        <span className="title">The Perfect Place For UI/UX Talent and Enterprises! with Quality Services</span>
        <div className="banner-img">
          <p>Let’s Take A Look <br />
            SHALL WE!</p>
          <ArrowDown />
        </div>
      </section>

    </>
  );
};

export default Banner;
