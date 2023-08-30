export function getBackgroundColor(value) {
    if (value < 50) return '#C92A2A';
    if (value >= 50 && value < 60) return '#D95C0F';
    if (value >= 60 && value < 70) return '#E6B600';
    if (value >= 70 && value < 80) return '#66A80F';
    if (value >= 80 && value < 90) return '#0C8539';
    if (value >= 90) return '#0C8539';
    return 'white';  // Default color
}

