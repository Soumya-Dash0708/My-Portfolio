import { SkillBarProps } from "@/Types";
import { useEffect, useRef, useState } from "react";

export default function Skills({ skills }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean>(false);
  const [progress, setProgress] = useState<number[]>(skills.map(() => 0));
  const [animatedProgress, setAnimatedProgress] = useState<number[]>(
    skills.map(() => 0)
  );
  useEffect(() => {
    function onScroll() {
      if (ref.current) {
        const { top, bottom } = ref.current.getBoundingClientRect();
        const isVisible = top < window.innerHeight && bottom >= 0;
        if (isVisible && !visible) {
          setVisible(true);
          setProgress(skills.map((skill) => skill.level));
        }
      }
    }
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [skills, visible]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimatedProgress((prevProgress) =>
        prevProgress.map((value, index) => {
          const diff = progress[index] - value;
          const step = Math.ceil(diff / 10);
          return value + step;
        })
      );
    }, 100);
    return () => {
      clearInterval(intervalId);
    };
  }, [progress]);
  return (
    <div>
      <div className="text-WhiteGray text-center text-sm font-semibold uppercase">
        - Skills
      </div>
      <div className="text-White mt-4 text-center text-3xl font-semibold">
        What I Expert
      </div>
      <div ref={ref} className="grid gap-4 p-10 md:grid-cols-2">
        {skills.map((skill, index) => (
          <div key={skill.name} className="mb-4">
            <div className="mb-2 flex items-center justify-between">
              <span>{skill.name}</span>
              <span className="text-sm font-bold text-gray-500">
                {animatedProgress[index]}%
              </span>
            </div>
            <div className="relative h-2 w-full overflow-hidden rounded-full bg-orange-200">
              <div
                className="absolute left-0 top-0 h-full rounded-full bg-orange-400"
                style={{
                  width: `${visible ? animatedProgress[index] : 0}%`,
                  transition: "width 1s",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
