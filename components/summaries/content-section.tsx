import { parseEmojiPoint, parsePoint } from "@/utils/summary-helper";
import { MotionDiv } from "../common/motion-wrapper";
import { containerVariants, itemVariants } from "@/utils/constants";


const TILTS = [-1.5, 1, -0.75, 1.5];

const EmojiPoint = ({ point, index }: { point: string; index: number }) => {
  const { emoji, text } = parseEmojiPoint(point) ?? {};
  return (
    <MotionDiv
      variants={itemVariants}
      style={{ rotate: `${TILTS[index % TILTS.length]}deg` }}
      className="group relative bg-[var(--paper)] p-4 rounded-2xl border border-[var(--border)] hover:border-[var(--marigold-dark)]/60 hover:shadow-md hover:rotate-0 transition-all duration-300"
    >
      <div className="relative flex items-start gap-3">
        <span className="text-lg lg:text-xl shrink-0 pt-1">{emoji}</span>
        <p className="text-lg lg:text-xl text-[var(--ink-soft)] leading-relaxed">
          {text}
        </p>
      </div>
    </MotionDiv>
  );
};

const RegularPoint = ({ point, index }: { point: string; index: number }) => {
  return (
    <MotionDiv
      variants={itemVariants}
      style={{ rotate: `${TILTS[index % TILTS.length]}deg` }}
      className="group relative bg-[var(--paper)] p-4 rounded-2xl border border-[var(--border)] hover:border-[var(--marigold-dark)]/60 hover:shadow-md hover:rotate-0 transition-all duration-300"
    >
      <p className="relative text-lg lg:text-xl text-[var(--ink-soft)] leading-relaxed text-left">
        {point}
      </p>
    </MotionDiv>
  );
};

export default function ContentSection({
  title,
  points,
}: {
  title: string;
  points: string[];
}) {
  return (
    <MotionDiv
      variants={containerVariants}
      key={points.join("")}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="space-y-4"
    >
      {points.map((point, index) => {
        const { isMainPoint, hasEmoji, isEmpty } = parsePoint(point);

        if (isEmpty) return null;

        if (hasEmoji || isMainPoint) {
          return <EmojiPoint key={`point-${index}`} point={point} index={index} />;
        }
        return <RegularPoint key={`point-${index}`} point={point} index={index} />;
      })}
    </MotionDiv>
  );
}