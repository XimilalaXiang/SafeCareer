import React from 'react';
import { Users, MousePointerClick, BookOpen } from 'lucide-react';
import { DEMO_METRICS, DEMO_METRICS_LABEL } from '../data/demoMetrics';

const formatNumber = (value: number) =>
  new Intl.NumberFormat('zh-CN').format(value);

type DemoMetricsStripProps = {
  variant?: 'default' | 'compact';
  className?: string;
};

const metrics = [
  {
    key: 'users',
    label: '用户数量',
    value: formatNumber(DEMO_METRICS.userCount),
    suffix: '人',
    hint: '已注册使用 SafeCareer 的校园用户',
    icon: Users,
  },
  {
    key: 'ctr',
    label: '点击率',
    value: DEMO_METRICS.clickThroughRate.toFixed(1),
    suffix: '%',
    hint: '首页核心入口近 30 日平均点击转化',
    icon: MousePointerClick,
  },
  {
    key: 'reads',
    label: '阅读量',
    value: formatNumber(DEMO_METRICS.readVolume),
    suffix: '次',
    hint: '防骗攻略、案例与指南累计浏览',
    icon: BookOpen,
  },
] as const;

const DemoMetricsStrip: React.FC<DemoMetricsStripProps> = ({
  variant = 'default',
  className = '',
}) => {
  const isCompact = variant === 'compact';

  if (isCompact) {
    return (
      <div
        className={`flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-[11px] text-white/60 ${className}`}
        aria-label="平台数据概览（演示数据）"
      >
        <span className="inline-flex items-center gap-1 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/5 px-2 py-0.5 text-[10px] uppercase tracking-wider text-[var(--primary)]">
          {DEMO_METRICS_LABEL}
        </span>
        {metrics.map((item, index) => (
          <span key={item.key} className="inline-flex items-center gap-1">
            {index > 0 && <span className="text-white/20">|</span>}
            <span className="text-white/45">{item.label}</span>
            <span className="text-[var(--primary)] font-semibold">
              {item.value}
              {item.suffix}
            </span>
          </span>
        ))}
      </div>
    );
  }

  return (
    <section
      className={`relative border-y border-white/10 bg-gradient-to-b from-black via-[#0a0800] to-black ${className}`}
      aria-labelledby="demo-metrics-heading"
    >
      <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 max-w-3xl h-px bg-gradient-to-r from-transparent via-[var(--primary)]/50 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 md:mb-10">
          <div className="text-center sm:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/40 bg-[var(--primary)]/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--primary)]">
              {DEMO_METRICS_LABEL}
            </div>
            <h2
              id="demo-metrics-heading"
              className="mt-4 font-display text-2xl sm:text-3xl text-white"
            >
              平台<span className="italic font-light text-[var(--primary)]">数据概览</span>
            </h2>
            <p className="mt-2 text-sm text-white/50 max-w-md">
              以下为校园求职防骗场景的示意指标，便于了解 SafeCareer 的使用规模与触达效果。
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {metrics.map((item) => (
            <div
              key={item.key}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8 transition-colors duration-300 hover:border-[var(--primary)]/35 hover:bg-[var(--primary)]/[0.06]"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[var(--primary)]/5 blur-2xl transition-opacity group-hover:opacity-100 opacity-60" />
              <div className="relative flex items-start justify-between gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--primary)]/25 bg-[var(--primary)]/10">
                  <item.icon className="h-5 w-5 text-[var(--primary)]" strokeWidth={1.5} />
                </div>
              </div>
              <p className="relative mt-5 font-mono text-xs uppercase tracking-wider text-white/45">
                {item.label}
              </p>
              <p className="relative mt-2 font-display text-3xl md:text-4xl text-white tabular-nums">
                <span className="gradient-text">{item.value}</span>
                <span className="ml-1 text-lg font-mono text-[var(--primary)]/80">
                  {item.suffix}
                </span>
              </p>
              <p className="relative mt-3 text-xs text-white/40 leading-relaxed">
                {item.hint}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoMetricsStrip;