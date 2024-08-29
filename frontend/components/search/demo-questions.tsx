import { useSourceStore } from '@/lib/store';
import { SearchCategory } from '@/lib/types';

const exampleMessages = [
    {
        title: 'Ask Indie Maker Questions',
        message: `How to get first 1000 users?`,
        source: SearchCategory.INDIE_MAKER,
    },
    {
        title: 'Ask by Image Content',
        message:
            'What is the hybrid AI search https://www.memfree.me/memfree-hybrid-ai-search.webp',
        source: SearchCategory.ALL,
    },
    {
        title: 'OCR | Extract Text from Image',
        message: 'Extract Text https://www.memfree.me/pricing-card.png',
        source: SearchCategory.ALL,
    },
    {
        title: 'Summarize and ask Web Page and PDF',
        message:
            'Summarize the content of https://www.memfree.me/docs/index-bookmarks',
        source: SearchCategory.ALL,
    },
    {
        title: 'Get Top Hacker News Stories',
        message: `Get the top 3 Hacker News stories`,
        source: SearchCategory.ALL,
    },
    {
        title: 'Ask Twitter Questions',
        message: `Claude 3.5 Sonect VS GPT-4o`,
        source: SearchCategory.TWEET,
    },
];

export function DemoQuestions({ onSelect }) {
    const { setSource } = useSourceStore();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {exampleMessages
                .sort(() => Math.random() - 0.5)
                .slice(0, 4)
                .map((example, index) => (
                    <div
                        key={example.title}
                        onClick={() => {
                            setSource(example.source);
                            onSelect(example.message);
                        }}
                        className={`cursor-pointer rounded-lg border bg-white p-4 hover:bg-zinc-50 dark:bg-zinc-950 dark:hover:bg-zinc-900`}
                    >
                        <div className="text-sm font-semibold">
                            {example.title}
                        </div>
                    </div>
                ))}
        </div>
    );
}
