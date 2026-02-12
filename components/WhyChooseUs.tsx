import {
    Sparkles,
    Layers,
    Zap,
    ShieldCheck,
    MessageSquare,
    TrendingUp,
} from 'lucide-react'
import React from 'react'

type Feature = {
    title: string
    description: string
    icon: React.ReactNode
}

const features: Feature[] = [
    {
        title: 'Senior-level execution',
        description:
            'No juniors, no guesswork. Just clean, predictable delivery.',
        icon: <Sparkles className="h-5 w-5" />,
    },
    {
        title: 'Design-driven engineering',
        description:
            'UI and code evolve together — not stitched later.',
        icon: <Layers className="h-5 w-5" />,
    },
    {
        title: 'Fast feedback loops',
        description:
            'Decisions, iterations, and shipping without long waits.',
        icon: <Zap className="h-5 w-5" />,
    },
    {
        title: 'Production-ready quality',
        description:
            'Performance, accessibility, and maintainability by default.',
        icon: <ShieldCheck className="h-5 w-5" />,
    },
    {
        title: 'Clear communication',
        description:
            'You always know what’s happening and why.',
        icon: <MessageSquare className="h-5 w-5" />,
    },
    {
        title: 'Built to scale',
        description:
            'Systems that grow with your product, not against it.',
        icon: <TrendingUp className="h-5 w-5" />,
    },
]

export function WhyChooseUs() {
    return (
        <section className="relative py-24">
            <div className="mx-auto max-w-7xl px-6">
                {/* Section Heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-balance">
                        Why teams choose us
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Built by engineers. Refined for real users.
                        Designed to scale without friction.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="
                group relative rounded-lg
                border border-border/60
                bg-card/60 p-6 backdrop-blur
                transition-all duration-300
                hover:border-primary/40
                hover:bg-card
              "
                        >
                            <div
                                className="
                  mb-4 inline-flex h-10 w-10 items-center justify-center
                  rounded-md bg-secondary text-primary
                  transition-colors duration-300
                  group-hover:bg-primary
                  group-hover:text-primary-foreground
                "
                            >
                                {feature.icon}
                            </div>

                            <h3 className="text-lg font-medium">
                                {feature.title}
                            </h3>

                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}