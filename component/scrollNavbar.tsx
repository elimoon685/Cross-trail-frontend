'use client'
import { useState, useEffect, useMemo } from "react"
const TABS = [
  { id: "organizer", label: "Become organizer" },
  { id: "join", label: "Join activity" },
  { id: "shop", label: "Shop" },
];

const TAB_WIDTH = 163;

const Navbar = () => {
  const [activeId, setActiveId] = useState<string>("organizer");
  useEffect(() => {
    const sections = TABS.map((t) => document.getElementById(t.id)).filter(
      Boolean
    ) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting);

        // 2. 一个都没有，就直接结束，本次不更新 activeId
        if (visibleEntries.length === 0) {
          return;
        }
    
        // 3. 找到这次最可见的那个
        const visible = visibleEntries.sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio
        )[0];
          console.log("visible",visible)
          const ratio = visible.intersectionRatio;
          const id = (visible.target as HTMLElement).id;
          setActiveId((prev) => {
            if (!id) return prev;
    
            // 如果这个 section 露出的面积还不够多，就保持原来的 active，不切换
            if (ratio < 0.9999 && prev) {
              return prev;
            }
    
            // 露出了足够多 ⇒ 可以切了
            return id;
          });
     
      },
      {
        threshold: [0.1, 0.25, 0.5, 0.75, 0.9, 0.999]
      }
    );
    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  const activeIndex = useMemo(
    () => TABS.findIndex((t) => t.id === activeId),
    [activeId]
  );
  const handleClick = (id: string) => {
    const el=document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setActiveId(prev=>prev=id)

  }

  return (
    <div className="sticky top-0 z-50 bg-white/90 backdrop-blur">
      <div className="flex h-20 max-w-7xl w-full mx-auto overflow-auto">
        <div className="flex gap-10 border-b border-[#5D9787]">
          <div className="text-3xl self-center font-bold lg:inline-block hidden">What you can do</div>
          <div className="relative flex">
          <ul className="flex justify-between items-center gap-8">
            {TABS.map(li => <li key={li.id} className="flex text-xl border-b-2 border-transparent hover:border-b-2 hover:border-[#549281]/50 h-full items-center w-[163px] justify-center"
              onClick={() => handleClick(li.id)}
            ><a className="">{li.label}</a></li>)}
          </ul>
          <span
            className="
              pointer-events-none
              absolute bottom-0 h-1
              bg-[#5D9787]
              transition-transform duration-300 ease-out
            "
            style={{
              width: `${TAB_WIDTH}px`,
              transform: `translateX(${activeIndex*TAB_WIDTH+32*activeIndex}px)`,
            }}
          />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar