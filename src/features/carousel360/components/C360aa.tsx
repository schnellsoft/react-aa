// this component is a main component for a rotate card carousel
import React, { useState } from 'react';
import styles from './C360aa.module.css';
import Card from './card/card';

const rotationDurationMs = 900;

const cardData = [
    {
        title: 'Card 1',
        description: 'Description for Card 1',
        backTitle: 'Back 1',
        backDescription: 'Back description for Card 1',
        imageSrc: 'https://picsum.photos/seed/42/250/350',
        imageAlt: 'Card 1',
    },
    {
        title: 'Card 2',
        description: 'Description for Card 2',
        backTitle: 'Back 2',
        backDescription: 'Back description for Card 2',
        imageSrc: 'https://picsum.photos/seed/43/250/350',
        imageAlt: 'Card 2',
    },
    {
        title: 'Card 3',
        description: 'Description for Card 3',
        backTitle: 'Back 3',
        backDescription: 'Back description for Card 3',
        imageSrc: 'https://picsum.photos/seed/44/250/350',
        imageAlt: 'Card 3',
    },
];

const C360aa: React.FC = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className={styles['carousel-container']}>
            <div className={styles['carousel-header']}>
                <button
                    type="button"
                    className={styles['rotate-button']}
                    onClick={() => setIsFlipped((previous) => !previous)}
                    aria-pressed={isFlipped}
                >
                    Rotate
                </button>
            </div>

            <div className={styles['carousel']}>
                {cardData.map((card) => (
                    <Card
                        key={card.title}
                        title={card.title}
                        description={card.description}
                        backTitle={card.backTitle}
                        backDescription={card.backDescription}
                        imageSrc={card.imageSrc}
                        imageAlt={card.imageAlt}
                        isFlipped={isFlipped}
                        rotationDurationMs={rotationDurationMs}
                    />
                ))}
            </div>
        </div>
    );
};

export default C360aa;