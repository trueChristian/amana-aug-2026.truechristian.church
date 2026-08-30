"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowDown,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Droplets,
  ExternalLink,
  Heart,
  Images,
  MapPin,
  Music2,
  Pause,
  Play,
  Users,
  Video,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const gallerySources = [
  "/media/photos/day-img-1992.webp",
  "/media/photos/day-img-2001.webp",
  "/media/photos/day-img-2015.webp",
  "/media/photos/day-img-3767.webp",
  "/media/photos/day-img-2027.webp",
  "/media/photos/day-img-2029.webp",
  "/media/photos/day-img-3768.webp",
  "/media/photos/day-img-2071.webp",
  "/media/photos/day-img-2080.webp",
  "/media/photos/day-img-2084.webp",
  "/media/photos/day-img-2085.webp",
  "/media/photos/day-img-2088.webp",
  "/media/photos/day-img-2089.webp",
  "/media/photos/day-img-2091.webp",
  "/media/photos/day-img-2095.webp",
  "/media/photos/day-img-2104.webp",
  "/media/photos/day-img-2106.webp",
  "/media/photos/day-img-2108.webp",
  "/media/photos/day-img-2113.webp",
  "/media/photos/day-img-2129.webp",
  "/media/photos/day-img-2130.webp",
  "/media/photos/day-img-2143.webp",
  "/media/photos/day-img-2148.webp",
  "/media/photos/day-img-2150.webp",
  "/media/photos/day-img-2169.webp",
  "/media/photos/groups-img-2176.webp",
  "/media/photos/groups-img-2177.webp",
  "/media/photos/groups-dji-fly-20260822-170728-0746-1787508236179-photo.webp",
  "/media/photos/groups-dji-fly-20260822-170756-0747-1787508235850-photo.webp",
  "/media/photos/day-img-2193.webp",
  "/media/photos/borehole-img-2195.webp",
  "/media/photos/borehole-img-3731.webp",
  "/media/photos/day-img-2202.webp",
  "/media/photos/day-img-2207.webp",
  "/media/photos/day-img-2208.webp",
  "/media/photos/day-img-2214.webp",
  "/media/photos/day-img-2219.webp",
  "/media/photos/day-img-2234.webp",
  "/media/photos/fireside-img-3733.webp",
  "/media/photos/fireside-img-3735.webp",
  "/media/photos/fireside-dji-fly-20260822-214234-0762-1787508212876-photo.webp",
  "/media/photos/day-dji-fly-20260823-072604-0787-1787508068146-pano.webp",
  "/media/photos/day-img-2258.webp",
  "/media/photos/day-img-2291.webp",
  "/media/photos/day-img-2292.webp",
  "/media/photos/day-img-3776.webp",
  "/media/photos/day-img-3780.webp",
  "/media/photos/amana-mission.webp",
];

const fridayPhotos = [
  "/media/photos/day-img-1992.webp",
  "/media/photos/day-img-2001.webp",
  "/media/photos/day-img-2015.webp",
  "/media/photos/day-img-3767.webp",
  "/media/photos/day-img-2027.webp",
  "/media/photos/day-img-2029.webp",
  "/media/photos/day-img-3768.webp",
  "/media/photos/day-img-2071.webp",
];

const saturdayPhotos = [
  "/media/photos/day-img-2088.webp",
  "/media/photos/day-img-2091.webp",
  "/media/photos/day-img-2095.webp",
  "/media/photos/day-img-2104.webp",
  "/media/photos/day-img-2106.webp",
  "/media/photos/day-img-2108.webp",
  "/media/photos/day-img-2113.webp",
  "/media/photos/day-img-2129.webp",
  "/media/photos/day-img-2130.webp",
  "/media/photos/day-img-2143.webp",
  "/media/photos/day-img-2148.webp",
  "/media/photos/day-img-2150.webp",
  "/media/photos/day-img-2169.webp",
  "/media/photos/day-img-2234.webp",
];

const sundayPhotos = [
  "/media/photos/day-dji-fly-20260823-072604-0787-1787508068146-pano.webp",
  "/media/photos/day-img-2258.webp",
];

const fellowshipPhotos = [
  "/media/photos/fireside-dji-fly-20260822-214234-0762-1787508212876-photo.webp",
  "/media/photos/day-img-2035.webp",
  "/media/photos/day-img-2059.webp",
  "/media/photos/day-img-2071.webp",
  "/media/photos/day-img-2091.webp",
  "/media/photos/day-img-2104.webp",
  "/media/photos/day-img-2148.webp",
  "/media/photos/day-img-2258.webp",
  "/media/photos/fireside-img-3733.webp",
  "/media/photos/fireside-img-3735.webp",
  "/media/photos/day-img-3768.webp",
  "/media/photos/fellowship-group-extra.webp",
];

const songNumbers = [1, 2, 4, 5, 6];

const singingPhotos = songNumbers.map((number) => `/media/songs/song-${number}.webp`);

const messageData = [
  {
    number: "01",
    theme: "Clothed by Christ",
    title: "Wearing the Wedding Garment",
    scripture: "Matthew 22:1–14",
    preacher: "Brother Malachi van der Merwe",
    translator: "Translated by Paulus Hamutenya",
    image: "/media/photos/day-img-2130.webp",
    link: "https://t.me/namibiamission/897",
    summary: "Jesus’ parable of the wedding feast shows that we cannot enter clothed in a righteousness made by our own works. We need the true wedding garment—the cleansing and righteousness that come through Jesus Christ alone.",
    response: "The message was received seriously. Many questions centred on how a person may be sure that they are wearing the right wedding garment and have been cleansed by Christ.",
  },
  {
    number: "02",
    theme: "Walking in Victory",
    title: "The Victorious Christian Life",
    scripture: "Isaiah 30:21",
    preacher: "Brother Lemuel van der Merwe",
    translator: "Translated by Paulus Hamutenya",
    image: "/media/photos/day-img-2143.webp",
    link: "https://t.me/namibiamission/898",
    summary: "The victorious Christian life is lived by hearing the Lord’s voice in our daily walk, following His leading and keeping our feet clean from the dirt of the world.",
    response: "People shared personal struggles and asked what the Bible says about the choices of daily life, and how to hear the Lord’s direction while facing those struggles.",
  },
  {
    number: "03",
    theme: "Fleeing Temptation",
    title: "Flee Youthful Lusts",
    scripture: "2 Timothy 2:22",
    preacher: "Brother Paulus Hamutenya",
    translator: "Translated by Brother Emmanuel Kapuire",
    image: "/media/photos/day-img-2291.webp",
    link: "https://t.me/namibiamission/899",
    summary: "Those who have been clothed by Christ and desire to walk in victory must flee temptation and pursue righteousness, faith, love and peace with those who call upon the Lord out of a pure heart.",
    response: "Many questions turned to fellowship—how believers can gather, strengthen one another and help one another remain on the right path with the Lord.",
  },
];

const videoSources = [
  { src: "/media/video/hero-amana.mp4", poster: "/media/video/hero-amana-poster.webp", label: "The camp meeting group from the air", category: "camp" },
  { src: "/media/backgrounds/drone-1.mp4", poster: "/media/backgrounds/drone-1.webp", label: "Northern Namibia from above", category: "camp" },
  { src: "/media/backgrounds/drone-2.mp4", poster: "/media/backgrounds/drone-2.webp", label: "Amana Mission and the surrounding countryside", category: "camp" },
  { src: "/media/backgrounds/drone-3.mp4", poster: "/media/backgrounds/drone-3.webp", label: "Approaching the camp from the air", category: "camp" },
  { src: "/media/backgrounds/drone-4.mp4", poster: "/media/backgrounds/drone-4.webp", label: "Flying into the campground and past the gathering", category: "camp" },
  { src: "/media/video/saturday-evening.mp4", poster: "/media/video/saturday-evening.webp", label: "Saturday evening — taking people home", category: "camp" },
  ...songNumbers.map((number) => ({ src: `/media/songs/song-${number}.mp4`, poster: `/media/songs/song-${number}.webp`, label: `Singing recording ${number}`, category: "songs" })),
];

function describeGalleryImage(src: string, index: number) {
  if (src.includes("/songs/")) return "Singing praise and worship together at Amana";
  if (src.includes("2258")) return "Sunday prayer together in Brother Theo’s kitchen before leaving Amana";
  if (src.includes("pano")) return "Sunday sunrise over the countryside surrounding Amana";
  if (src.includes("fellowship-group-extra")) return "Brothers gathered in fellowship at Amana Mission";
  if (src.includes("fireside")) return "Brothers and sisters sharing fellowship together at Amana";
  if (src.includes("borehole-img-2195")) return "The borehole at Amana Mission";
  if (src.includes("borehole-img-3731")) return "The water tank provided for Amana Mission";
  if (src.includes("groups")) return "Those gathered for the Amana camp meeting";
  if (src.includes("2130")) return "The first message being shared and translated";
  if (src.includes("2143")) return "The second message being shared and translated";
  if (src.includes("2291")) return "The third message being shared and translated";
  if (src.includes("1992") || src.includes("2001") || src.includes("2015") || src.includes("3767")) return "The Friday journey north from Windhoek to Amana";
  if (src.includes("2024") || src.includes("2026") || src.includes("2027") || src.includes("2028") || src.includes("2029")) return "Arrival and welcome at Amana Mission";
  if (src.includes("2234")) return "Vehicles taking attendees home on Saturday evening";
  return `A moment from the Amana camp meeting, photograph ${index + 1}`;
}

function BackgroundVideo({ src, poster, className = "", immediate = false, paused }: { src: string; poster: string; className?: string; immediate?: boolean; paused: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;
    if (immediate) {
      const timer = window.setTimeout(() => setShouldLoad(true), 0);
      return () => window.clearTimeout(timer);
    }
    const node = containerRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setShouldLoad(true); }, { rootMargin: "300px" });
    observer.observe(node);
    return () => observer.disconnect();
  }, [immediate]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (paused) video.pause();
    else void video.play().catch(() => undefined);
  }, [paused, shouldLoad]);

  return (
    <div ref={containerRef} className={`background-media ${className}`} style={{ backgroundImage: `url(${poster})` }} aria-hidden="true">
      {shouldLoad ? <video ref={videoRef} muted autoPlay loop playsInline preload={immediate ? "auto" : "metadata"} poster={poster} tabIndex={-1}><source src={src} type="video/mp4" /></video> : null}
    </div>
  );
}

type CarouselVideoSlide = {
  src: string;
  poster: string;
  label: string;
};

function PhotoCarousel({
  sources,
  onSelect,
  className = "",
  label,
  paused = false,
  videoSlide,
  onVideoSelect,
}: {
  sources: string[];
  onSelect: (src: string) => void;
  className?: string;
  label: string;
  paused?: boolean;
  videoSlide?: CarouselVideoSlide;
  onVideoSelect?: (src: string) => void;
}) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [interactionPaused, setInteractionPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const totalSlides = sources.length + (videoSlide ? 1 : 0);
  const normalizedCurrent = current % totalSlides;
  const activeIsVideo = Boolean(videoSlide && normalizedCurrent === sources.length);
  const active = activeIsVideo ? videoSlide!.poster : sources[normalizedCurrent];

  useEffect(() => {
    const node = carouselRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { rootMargin: "120px", threshold: .05 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (totalSlides < 2 || !inView || paused || interactionPaused || activeIsVideo || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => { if (!document.hidden) setCurrent((value) => (value + 1) % totalSlides); }, 2000);
    return () => window.clearInterval(timer);
  }, [activeIsVideo, inView, interactionPaused, paused, totalSlides]);

  const move = (direction: number) => setCurrent((value) => (value + direction + totalSlides) % totalSlides);
  const openActiveSlide = () => {
    if (activeIsVideo && videoSlide) onVideoSelect?.(videoSlide.src);
    else onSelect(active);
  };
  const activeDescription = activeIsVideo && videoSlide
    ? videoSlide.label
    : describeGalleryImage(active, gallerySources.indexOf(active));

  return (
    <div ref={carouselRef} className={`photo-carousel ${className}`} aria-roledescription="carousel" aria-label={label} onMouseEnter={() => setInteractionPaused(true)} onMouseLeave={() => setInteractionPaused(false)} onFocusCapture={() => setInteractionPaused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setInteractionPaused(false); }}>
      <button type="button" className={`photo-carousel-stage${activeIsVideo ? " is-video" : ""}`} onClick={openActiveSlide} aria-label={`${activeIsVideo ? "Play video" : "Open photograph"} ${normalizedCurrent + 1} of ${totalSlides}: ${activeDescription}`}>
        <img key={active} src={active} alt={activeIsVideo ? "" : activeDescription} loading="lazy" />
        {activeIsVideo && videoSlide ? <span className="photo-carousel-video"><small>{videoSlide.label}</small></span> : null}
      </button>
      {totalSlides > 1 ? <><button type="button" className="photo-carousel-arrow previous" onClick={() => move(-1)} aria-label="Previous slide"><ChevronLeft /></button><button type="button" className="photo-carousel-arrow next" onClick={() => move(1)} aria-label="Next slide"><ChevronRight /></button><span className="photo-carousel-count" aria-hidden="true">{normalizedCurrent + 1} / {totalSlides}</span></> : null}
    </div>
  );
}

type VideoFilter = "all" | "camp" | "songs";

function GlobalHeader({ onOpenVideos }: { onOpenVideos: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const navigationRef = useRef<HTMLElement>(null);
  const lastScrollYRef = useRef(0);
  const directionStartYRef = useRef(0);
  const scrollDirectionRef = useRef<-1 | 0 | 1>(0);
  const scrollFrameRef = useRef<number | null>(null);

  const closeMenu = (restoreFocus = false) => {
    const shouldRestoreFocus = restoreFocus && menuOpen;
    setMenuOpen(false);
    if (shouldRestoreFocus) window.requestAnimationFrame(() => toggleRef.current?.focus());
  };

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 959px)");
    const synchronizeBreakpoint = () => {
      setIsMobile(mobileQuery.matches);
      if (!mobileQuery.matches) setMenuOpen(false);
    };
    synchronizeBreakpoint();
    mobileQuery.addEventListener("change", synchronizeBreakpoint);
    return () => mobileQuery.removeEventListener("change", synchronizeBreakpoint);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("tcc-menu-open", menuOpen && isMobile);
    if (!menuOpen || !isMobile) return () => document.documentElement.classList.remove("tcc-menu-open");

    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu(true);
        return;
      }

      if (event.key !== "Tab" || !navigationRef.current) return;
      const focusable = Array.from(
        navigationRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => element.getClientRects().length > 0);
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.documentElement.classList.remove("tcc-menu-open");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isMobile, menuOpen]);

  useEffect(() => {
    const initialY = Math.max(0, window.scrollY);
    lastScrollYRef.current = initialY;
    directionStartYRef.current = initialY;
    scrollDirectionRef.current = 0;
    if (menuOpen) setHeaderHidden(false);

    const updateHeader = () => {
      scrollFrameRef.current = null;
      const currentY = Math.max(0, window.scrollY);
      const delta = currentY - lastScrollYRef.current;
      const nextDirection: -1 | 0 | 1 = delta > 0 ? 1 : delta < 0 ? -1 : scrollDirectionRef.current;

      if (nextDirection !== scrollDirectionRef.current) {
        scrollDirectionRef.current = nextDirection;
        directionStartYRef.current = lastScrollYRef.current;
      }

      const distanceInDirection = Math.abs(currentY - directionStartYRef.current);
      const headerHeight = headerRef.current?.offsetHeight ?? 81;

      if (currentY <= 4 || menuOpen) {
        setHeaderHidden(false);
      } else if (nextDirection === 1 && currentY > headerHeight && distanceInDirection >= 12) {
        setHeaderHidden(true);
      } else if (nextDirection === -1 && distanceInDirection >= 8) {
        setHeaderHidden(false);
      }

      lastScrollYRef.current = currentY;
    };

    const onScroll = () => {
      if (scrollFrameRef.current === null) scrollFrameRef.current = window.requestAnimationFrame(updateHeader);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollFrameRef.current !== null) window.cancelAnimationFrame(scrollFrameRef.current);
    };
  }, [menuOpen]);

  return (
    <header ref={headerRef} className="tcc-site-header tm-header" data-tcc-global-header data-menu-open={menuOpen ? "true" : undefined} data-scroll-hidden={headerHidden && !menuOpen ? "true" : undefined} onFocusCapture={() => setHeaderHidden(false)}>
      <div className="tcc-header__container tcc-container">
        <a className="tcc-header__brand uk-logo" href="https://truechristian.church/" aria-label="Back to home">
          <img src="/assets/brand/logo.jpg" width="288" height="77" alt="A True Christian Church" />
        </a>

        <button ref={toggleRef} className="tcc-header__toggle" type="button" aria-controls="tcc-primary-navigation" aria-expanded={menuOpen} onClick={() => { if (window.matchMedia("(max-width: 959px)").matches) setMenuOpen((current) => !current); }}>
          <span className="tcc-visually-hidden">Open menu</span>
          <span aria-hidden="true">☰</span>
        </button>

        <nav ref={navigationRef} id="tcc-primary-navigation" className="tcc-header__navigation" aria-label="Primary navigation" aria-hidden={isMobile && !menuOpen ? true : undefined} inert={isMobile && !menuOpen ? true : undefined}>
          <button ref={closeRef} className="tcc-header__close" type="button" aria-label="Close menu" onClick={() => closeMenu(true)}>
            <span aria-hidden="true">×</span>
          </button>
          <ul className="tcc-header__menu uk-navbar-nav">
            <li><a href="https://truechristian.church/" onClick={() => closeMenu()}>Home</a></li>
            <li><a href="#journey" onClick={() => closeMenu(true)}>Three days</a></li>
            <li><a href="#messages" onClick={() => closeMenu(true)}>Messages</a></li>
            <li><a href="#gallery" onClick={() => closeMenu(true)}>Photos</a></li>
            <li><a href="#prayer" onClick={() => closeMenu(true)}>Prayer</a></li>
            <li><button type="button" onClick={() => { closeMenu(); onOpenVideos(); }}>Videos</button></li>
          </ul>
        </nav>
        <button className="tcc-header__scrim" type="button" tabIndex={-1} aria-label="Close menu" onClick={() => closeMenu(true)} />
      </div>
    </header>
  );
}

function GlobalFooter() {
  return (
    <>
      <div className="tcc-footer-directory tm-bottom uk-section-muted uk-section" data-tcc-directory-footer>
        <div className="tcc-container tcc-footer-directory__grid">
          <section className="tcc-footer-group" aria-labelledby="tcc-footer-church-info">
            <h2 id="tcc-footer-church-info">Church Info</h2>
            <ul>
              <li><a href="https://truechristian.church/history">History</a></li>
              <li><a href="https://truechristian.church/brotherhood">Brotherhood</a></li>
              <li><a href="https://truechristian.church/blog/">Blog</a></li>
              <li><a href="https://truechristian.church/testimonies/">Testimonies</a></li>
              <li><a href="https://truechristian.church/confession-of-faith">Confession of Faith</a></li>
              <li><a href="https://truechristian.church/storehouse">Storehouse</a></li>
              <li><a href="https://truechristian.church/privacy-policy">Privacy Policy</a></li>
              <li><a href="https://truechristian.church/copyright">Copyright</a></li>
            </ul>
          </section>

          <section className="tcc-footer-group" aria-labelledby="tcc-footer-projects">
            <h2 id="tcc-footer-projects">Projects</h2>
            <ul>
              <li><a href="https://getBible.life/" target="_blank" rel="noopener">GETBIBLE</a></li>
              <li><a href="https://www.loudvoice.org/" target="_blank" rel="noopener">Loudvoice</a></li>
              <li><a href="https://shecares.life/">SHE Cares</a></li>
              <li><a href="https://truechristian.church/trousseauchest">Trousseau Chest</a></li>
              <li><a href="https://truechristian.church/whybible/">Why Bible</a></li>
              <li><a href="https://truechristian.church/wefeargod/">we fear God</a></li>
              <li><a href="https://truechristian.church/amana">Amana</a></li>
              <li><a href="https://truechristian.church/mission">Mission (Namibia)</a></li>
            </ul>
          </section>

          <section className="tcc-footer-group" aria-labelledby="tcc-footer-welcome">
            <h2 id="tcc-footer-welcome">Welcome</h2>
            <ul>
              <li><a href="https://truechristian.church/comeandfollowjesus">Follow Jesus</a></li>
              <li><a href="https://truechristian.church/services">Live Services</a></li>
              <li><a href="https://truechristian.church/fellowships">Locations</a></li>
              <li><a href="https://truechristian.church/events">Events</a></li>
              <li><a href="https://truechristian.church/revival">Revival</a></li>
              <li><a href="https://truechristian.church/telegram">Telegram</a></li>
              <li><a href="https://truechristian.church/contact-us">Contact Us</a></li>
            </ul>
          </section>

          <section className="tcc-footer-group tcc-footer-social" aria-labelledby="tcc-footer-social">
            <h2 id="tcc-footer-social">Social Outreach</h2>
            <div className="tcc-footer-social__links">
              <a href="https://github.com/trueChristian" target="_blank" rel="noopener" aria-label="GitHub">
                <svg className="tcc-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .7a11.3 11.3 0 0 0-3.57 22.02c.57.1.77-.25.77-.55v-2.16c-3.15.69-3.81-1.34-3.81-1.34-.51-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.39-1.23.72-1.51-2.51-.29-5.15-1.26-5.15-5.59 0-1.23.44-2.24 1.17-3.03-.12-.29-.51-1.44.11-2.99 0 0 .95-.3 3.11 1.16A10.8 10.8 0 0 1 12 6.09c.96 0 1.91.13 2.82.38 2.16-1.46 3.11-1.16 3.11-1.16.62 1.55.23 2.7.11 2.99.73.79 1.17 1.8 1.17 3.03 0 4.34-2.65 5.3-5.17 5.58.41.35.77 1.04.77 2.1v3.16c0 .3.21.66.78.55A11.3 11.3 0 0 0 12 .7Z" /></svg>
              </a>
              <a href="https://truechristian.church/telegram" target="_blank" rel="noopener" aria-label="Telegram">
                <svg className="tcc-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M23.91 3.79 20.3 20.82c-.27 1.2-.97 1.49-1.97.93l-5.5-4.05-2.65 2.55c-.29.29-.54.54-1.1.54l.39-5.6L19.67 5.98c.44-.39-.1-.6-.68-.21L6.39 13.7.96 12c-1.18-.37-1.2-1.18.25-1.75L22.43 2.1c.98-.36 1.84.24 1.48 1.69Z" /></svg>
              </a>
            </div>
            <img src="/assets/footer/city-skyline-reference.png" width="270" height="180" alt="" loading="lazy" data-source-path="/images/city-skyline-skyscrapers-top.jpg" />
          </section>
        </div>
      </div>

      <footer className="tcc-footer-copyright" data-tcc-copyright-footer>
        <div className="tcc-container" id="license">
          <span>Copyright © trueChristian.Church</span>{" "}
          <a href="https://truechristian.church/copyright">free distribution only</a><span aria-hidden="true"> | </span>
          <a href="https://truechristian.church/privacy-policy">Privacy Policy</a><span aria-hidden="true"> | </span>
          <a href="https://truechristian.church/mission/">Mission</a><span aria-hidden="true"> | </span>
          <a href="https://truechristian.church/revival/">Revival</a><span aria-hidden="true"> | </span>
          <a href="https://truechristian.church/wefeargod/">We Fear God</a><span aria-hidden="true"> | </span>
          <a href="https://truechristian.church/whybible/">Why we believe the Bible</a><span aria-hidden="true"> | </span>
          <a href="https://truechristian.church/trousseauchest/">Trousseau Chest</a>
        </div>
      </footer>
    </>
  );
}

export default function Home() {
  const [backgroundPaused, setBackgroundPaused] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [viewerSources, setViewerSources] = useState(gallerySources);
  const [videoOpen, setVideoOpen] = useState(false);
  const [videoFilter, setVideoFilter] = useState<VideoFilter>("all");
  const [activeVideoSrc, setActiveVideoSrc] = useState(videoSources[0].src);

  const gallery = useMemo(() => gallerySources.map((src, index) => ({ src, alt: describeGalleryImage(src, index) })), []);
  const activeSource = viewerSources[activeImage] ?? gallerySources[0];
  const activeAlt = describeGalleryImage(activeSource, gallerySources.indexOf(activeSource));
  const filteredVideos = videoSources.filter((video) => videoFilter === "all" || video.category === videoFilter);
  const activeVideo = videoSources.find((video) => video.src === activeVideoSrc) ?? videoSources[0];
  const slidesPaused = galleryOpen || videoOpen;

  const openCollection = (sources: string[], selected = sources[0]) => { setViewerSources(sources); setActiveImage(Math.max(0, sources.indexOf(selected))); setGalleryOpen(true); };
  const openGalleryImage = (src: string) => openCollection(gallerySources, src);
  const moveImage = (direction: number) => setActiveImage((current) => (current + direction + viewerSources.length) % viewerSources.length);
  const chooseVideoFilter = (filter: VideoFilter) => { setVideoFilter(filter); if (filter === "songs") setActiveVideoSrc("/media/songs/song-1.mp4"); else setActiveVideoSrc(videoSources[0].src); };
  const openVideoLibrary = (filter: VideoFilter = "all") => { chooseVideoFilter(filter); setVideoOpen(true); };
  const openVideo = (src: string, filter: VideoFilter = "all") => { setVideoFilter(filter); setActiveVideoSrc(src); setVideoOpen(true); };

  useEffect(() => {
    if (!galleryOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") setActiveImage((current) => (current - 1 + viewerSources.length) % viewerSources.length);
      if (event.key === "ArrowRight") setActiveImage((current) => (current + 1) % viewerSources.length);
      if (event.key === "Home") setActiveImage(0);
      if (event.key === "End") setActiveImage(viewerSources.length - 1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [galleryOpen, viewerSources.length]);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to the story</a>
      <GlobalHeader onOpenVideos={() => openVideoLibrary("all")} />
      <main id="main-content" tabIndex={-1}>
      <section className="hero" aria-labelledby="page-title">
        <BackgroundVideo src="/media/video/hero-amana.mp4" poster="/media/video/hero-amana-poster.webp" immediate paused={backgroundPaused || videoOpen} />
        <div className="hero-scrim" />
        <div className="hero-content" id="top"><p className="eyebrow">Amana Mission · Northern Namibia</p><h1 id="page-title">Amana Aug 2026 Camp Meeting</h1><p className="hero-date">21–23 August 2026</p><div className="hero-actions"><a className="scroll-cue" href="#journey"><span>Follow the weekend</span><ArrowDown aria-hidden="true" /></a><button type="button" className="hero-video-button" onClick={() => openVideoLibrary("camp")}><Play /> Watch the videos</button></div></div>
        <Button type="button" variant="outline" size="icon-lg" className="motion-control" onClick={() => setBackgroundPaused((current) => !current)} aria-label={backgroundPaused ? "Play background videos" : "Pause background videos"}>{backgroundPaused ? <Play /> : <Pause />}</Button>
      </section>

      <div className="fact-ribbon" aria-label="Camp meeting facts"><div><strong>3 days</strong><span>of fellowship</span></div><div><strong>100+</strong><span>gathered together</span></div><div><strong>3</strong><span>Bible messages</span></div><div><strong>1</strong><span>blessed weekend</span></div></div>

      <div>
        <section className="intro content-section"><div className="intro-image image-frame"><img src="/media/photos/amana-mission.webp" alt="The sandy Amana Mission yard, teak fence and green trees" /></div><div className="intro-copy"><p className="section-kicker"><MapPin /> Mukekete, northern Namibia</p><h2>A weekend at Amana Mission</h2><p className="lead">Amana Mission serves Mukekete and communities across northern Namibia as a place for spiritual teaching, fellowship and the growth of the local church.</p><p>For three days in August, families and believers gathered, cooked, sang, listened to God’s Word, asked questions and shared fellowship together at Brother Theo’s place.</p><a className="text-link" href="https://truechristian.church/amana" target="_blank" rel="noreferrer">Learn more about Amana Mission <ExternalLink aria-hidden="true" /></a></div></section>

        <section className="landscape-film" aria-label="Amana and the northern landscape"><BackgroundVideo src="/media/backgrounds/drone-1.mp4" poster="/media/backgrounds/drone-1.webp" paused={backgroundPaused || videoOpen} /><div className="landscape-film-scrim" /><div className="landscape-film-caption"><p><span>Amana from above</span>The northern landscape surrounding the mission</p><button type="button" onClick={() => openVideo("/media/backgrounds/drone-1.mp4", "camp")}><Play aria-hidden="true" /> Watch the landscape film</button></div></section>

        <section className="journey-section content-section" id="journey">
          <header className="section-heading"><p className="section-kicker">The weekend story</p><h2>Three days of ministry and fellowship in the north</h2></header>
          <div className="timeline">
            <article className="day-card"><div className="day-number">Friday <span>21 Aug</span></div><div className="day-copy"><h3>The journey and arrival</h3><p>Three vehicles left Windhoek early for the journey north. The road carried the group to Amana together with a water tank for the mission.</p><p>Brother Theo welcomed and hosted the travellers when they arrived at the mission base.</p></div><PhotoCarousel sources={fridayPhotos} onSelect={openGalleryImage} label="Friday journey and arrival photographs" paused={slidesPaused} /></article>
            <article className="day-card featured-day"><div className="day-number">Saturday <span>22 Aug</span></div><div className="day-copy"><h3>The great gathering</h3><p>Saturday began early, with food being prepared while buses went out to bring people from the surrounding communities. By the time everyone had gathered, more than 100 people were present.</p><p>Songs of celebration and worship opened the gathering. Brother Malachi van der Merwe then shared <em>Wearing the Wedding Garment</em>, followed by Brother Lemuel van der Merwe with <em>The Victorious Christian Life</em>; both messages were translated by Paulus Hamutenya. In the afternoon, Brother Paulus Hamutenya shared <em>Flee Youthful Lusts</em>, translated by Brother Emmanuel Kapuire.</p><p>Questions after the messages showed a sincere desire to understand how God’s Word applies to daily life. Meals were shared, groups spent time in fellowship, and the vehicles went out again in the evening to take people home, with the work continuing late into the night.</p></div><PhotoCarousel sources={saturdayPhotos} onSelect={openGalleryImage} className="featured-carousel" label="Saturday gathering photographs and evening film" paused={slidesPaused} videoSlide={{ src: "/media/video/saturday-evening.mp4", poster: "/media/video/saturday-evening.webp", label: "Saturday evening · Taking people home" }} onVideoSelect={(src) => openVideo(src, "camp")} /></article>
            <article className="day-card"><div className="day-number">Sunday <span>23 Aug</span></div><div className="day-copy"><h3>Prayer before the road home</h3><p>Sunday began with sunrise over Amana and a time of prayer together in Brother Theo’s kitchen. The camp was then packed up and the group began the long journey back to Windhoek.</p><p>Everyone travelled safely and returned grateful for a blessed weekend of fellowship.</p></div><PhotoCarousel sources={sundayPhotos} onSelect={openGalleryImage} label="Sunday sunrise and prayer photographs" paused={slidesPaused} /></article>
          </div>
        </section>

        <section className="messages-section" id="messages"><BackgroundVideo src="/media/backgrounds/drone-1.mp4" poster="/media/backgrounds/drone-1.webp" paused={backgroundPaused || videoOpen} /><div className="messages-scrim" /><div className="messages-content"><header className="messages-intro"><p className="section-kicker light"><BookOpen /> Three messages from God’s Word</p></header><div className="message-list">{messageData.map((message) => <article className="message-chapter" key={message.title}><header className="message-chapter-heading"><p>Message {message.number}</p><h2>{message.theme}</h2></header><div className="message-card"><div className="message-image"><img src={message.image} alt={`${message.preacher} sharing ${message.title}`} loading="lazy" /><span>{message.number}</span></div><div className="message-copy"><p className="scripture">{message.scripture}</p><h3>{message.title}</h3><p className="speaker"><strong>{message.preacher}</strong><br />{message.translator}</p><p>{message.summary}</p><p className="response"><strong>The response:</strong> {message.response}</p><a className="message-link" href={message.link} target="_blank" rel="noreferrer">Listen to the message <ExternalLink aria-hidden="true" /></a></div></div></article>)}</div></div></section>

        <section className="water-section content-section" id="water"><div className="water-copy"><p className="section-kicker"><Droplets /> An answered prayer</p><h2>Water at Amana</h2><p className="lead">A borehole has been drilled and good water was found. The Lord also provided a tank so that water can be stored at the mission.</p><p>The next need is a pump and the remaining work required to make the water system fully usable. This is an important step for daily life and for hosting larger gatherings more easily.</p></div><div className="water-story"><button type="button" className="water-main-photo" onClick={() => openGalleryImage("/media/photos/borehole-img-3731.webp")} aria-label="Open the water tank photograph"><img src="/media/photos/borehole-img-3731.webp" alt="The water tank and borehole site at Amana Mission" loading="lazy" /></button><div className="water-detail"><button type="button" onClick={() => openGalleryImage("/media/photos/borehole-img-2195.webp")} aria-label="Open the borehole photograph"><img src="/media/photos/borehole-img-2195.webp" alt="The newly drilled borehole at Amana Mission" loading="lazy" /></button><p><span>Good water found</span>The borehole is ready for the next step: providing and installing a pump.</p></div></div></section>

        <section className="gallery-section content-section" id="gallery" aria-labelledby="gallery-title"><header className="section-heading gallery-title"><p className="section-kicker"><Images /> Amana August 2026</p><h2 id="gallery-title">The weekend in pictures</h2></header><PhotoCarousel sources={gallerySources} onSelect={openGalleryImage} className="gallery-showcase" label="Automatically changing camp meeting photographs" paused={slidesPaused} /><div className="gallery-grid">{gallery.map((image) => <button type="button" className="gallery-tile" key={image.src} onClick={() => openGalleryImage(image.src)} aria-label={`Open photograph: ${image.alt}`}><img src={image.src} alt={image.alt} loading="lazy" /></button>)}</div></section>

        <section className="prayer-section" id="prayer"><BackgroundVideo src="/media/backgrounds/drone-4.mp4" poster="/media/backgrounds/drone-4.webp" paused={backgroundPaused || videoOpen} /><div className="prayer-scrim" /><div className="prayer-content"><header className="section-heading light-heading"><p className="section-kicker light"><Heart /> Remember Amana</p><h2>Praise and prayer</h2></header><div className="prayer-columns"><article className="prayer-card praise-card"><h3>We praise the Lord for</h3><ul><li>Protection and safe travel throughout the weekend, including every journey made to bring people to the meeting and take them home.</li><li>The answer to prayer of seeing more than 100 people gather around God’s Word.</li><li>Good water found through the new borehole and the provision of a tank for the mission.</li><li>Three messages that were clearly translated, understood and well received.</li><li>The many sincere questions and the desire shown by people to know more about Jesus and His ways.</li><li>Willing hands, shared food, joyful singing and precious fellowship among brothers and sisters in Christ.</li></ul></article><article className="prayer-card request-card"><h3>Please pray for</h3><ul><li>Gatherings like this to take place more regularly in the north.</li><li>Better and more reliable transport so that more people can be brought to future meetings.</li><li>The Lord to prepare many more hearts to receive His Word and to help the truths already heard bear lasting fruit.</li><li>More resources to accommodate larger gatherings comfortably, including adequate shade, additional seating and improved cooking facilities.</li><li>A pump and the remaining work needed to complete the borehole water system.</li><li>The church at Amana Mission to grow as people come and gather with the believers there.</li></ul></article></div></div></section>

        <section className="community-section content-section" aria-label="Fellowship and singing"><article className="community-card"><PhotoCarousel sources={fellowshipPhotos} onSelect={(src) => openCollection(fellowshipPhotos, src)} label="Fellowship photographs" paused={slidesPaused} /><div className="community-copy"><Users className="community-icon" aria-hidden="true" /><p className="section-kicker">Brothers and sisters in Christ</p><h2>Sweet moments of fellowship</h2><p>Throughout the weekend there were many opportunities to enjoy one another’s company, speak together about the Lord’s things and meditate on the truths heard from His Word.</p><p>These quieter moments strengthened relationships and encouraged believers to continue walking together with the Lord.</p><Button variant="outline" onClick={() => openCollection(fellowshipPhotos)}><Images /> View fellowship photographs</Button></div></article><article className="community-card"><PhotoCarousel sources={singingPhotos} onSelect={(src) => openCollection(singingPhotos, src)} label="Singing photographs" paused={slidesPaused} /><div className="community-copy"><Music2 className="community-icon" aria-hidden="true" /><p className="section-kicker">Praise and worship</p><h2>Singing together</h2><p>The gathering began with songs of celebration and gladness. Singing continued throughout the day as those gathered worshipped the Lord together.</p><Button onClick={() => openVideoLibrary("songs")}><Play /> Watch the singing</Button></div></article></section>

        <section className="closing-section"><img src="/media/photos/groups-dji-fly-20260822-170756-0747-1787508235850-photo.webp" alt="The camp meeting group gathered at Amana Mission" loading="lazy" /><div className="closing-copy"><p className="section-kicker">With gratitude</p><h2>Blessed by a weekend of fellowship</h2><p>We remember the weekend with gratitude to the Lord—for His protection, His provision and the opportunity to gather around His Word. May the teaching received continue to bear fruit at Amana and throughout northern Namibia.</p><div className="closing-actions"><button type="button" className="text-link button-link" onClick={() => openVideoLibrary("all")}><Video /> View all videos</button><a className="text-link" href="https://truechristian.church/amana" target="_blank" rel="noreferrer">Continue with Amana Mission <ExternalLink aria-hidden="true" /></a></div></div></section>
      </div>

      <Dialog open={galleryOpen} onOpenChange={setGalleryOpen}><DialogContent className="gallery-dialog" showCloseButton><DialogHeader className="sr-only"><DialogTitle>Camp meeting photograph viewer</DialogTitle><DialogDescription>{activeAlt}</DialogDescription></DialogHeader><div className="gallery-stage"><img key={activeSource} src={activeSource} alt={activeAlt} /><button type="button" className="gallery-nav previous" onClick={() => moveImage(-1)} aria-label="Previous photograph"><ChevronLeft /></button><button type="button" className="gallery-nav next" onClick={() => moveImage(1)} aria-label="Next photograph"><ChevronRight /></button><span className="gallery-count" aria-hidden="true">{activeImage + 1} / {viewerSources.length}</span><span className="sr-only" aria-live="polite">{activeAlt}. Photograph {activeImage + 1} of {viewerSources.length}.</span></div></DialogContent></Dialog>

      <Dialog open={videoOpen} onOpenChange={setVideoOpen}><DialogContent className="video-dialog"><DialogHeader><DialogTitle>Videos from Amana</DialogTitle><DialogDescription>Drone views, scenes from the camp meeting and five recordings of the singing—all hosted here on the site.</DialogDescription></DialogHeader><div className="video-filters" aria-label="Filter videos"><button type="button" className={videoFilter === "all" ? "active" : ""} onClick={() => chooseVideoFilter("all")}>All videos</button><button type="button" className={videoFilter === "camp" ? "active" : ""} onClick={() => chooseVideoFilter("camp")}>Camp &amp; countryside</button><button type="button" className={videoFilter === "songs" ? "active" : ""} onClick={() => chooseVideoFilter("songs")}>Singing</button></div><div className="video-player"><video key={activeVideo.src} controls playsInline preload="metadata" poster={activeVideo.poster} aria-label={activeVideo.label}><source src={activeVideo.src} type="video/mp4" />Your browser cannot play this recording.</video>{activeVideo.category === "camp" ? <p>{activeVideo.label}</p> : null}</div><div className="video-picker">{filteredVideos.map((video) => <button type="button" key={video.src} className={activeVideo.src === video.src ? "active" : ""} onClick={() => setActiveVideoSrc(video.src)} aria-label={`Play ${video.label}`} aria-current={activeVideo.src === video.src ? "true" : undefined}><img src={video.poster} alt="" />{video.category === "camp" ? <span>{video.label}</span> : <span>Singing</span>}</button>)}</div></DialogContent></Dialog>
      </main>
      <GlobalFooter />
    </>
  );
}
