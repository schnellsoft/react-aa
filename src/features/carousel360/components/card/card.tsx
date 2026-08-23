// react Card component for the carousel360 feature
import React from 'react';
import styles from './card.module.css';

interface CardProps {
    title: string;
    description: string;
    backTitle?: string;
    backDescription?: string;
    imageSrc?: string;
    imageAlt?: string;
    isFlipped?: boolean;
    rotationDurationMs?: number;
}

const Card: React.FC<CardProps> = ({
    title,
    description,
    backTitle,
    backDescription,
    imageSrc,
    imageAlt,
    isFlipped = false,
    rotationDurationMs = 900,
}) => {
    const cardStyle = {
        ['--card-rotation-duration' as string]: `${rotationDurationMs}ms`,
    } as React.CSSProperties;

    return (
        <div className={`${styles.card} ${isFlipped ? styles.flipped : ''}`} style={cardStyle}>
            <div className={styles['card-inner']}>
                <div className={`${styles.face} ${styles.front}`}>
                    <div className={styles['front-copy']}>
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                </div>

                <div className={`${styles.face} ${styles.back}`}>
                    <img src={imageSrc} alt={imageAlt ?? title} />
                    <div className={styles['back-copy']}>
                        <h2>{backTitle ?? title}</h2>
                        <p>{backDescription ?? description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;